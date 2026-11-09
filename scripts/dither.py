"""1-bit dither images for the site.

Archive previews (Floyd-Steinberg, 400px = .preview width):
    python scripts/dither.py IN.jpg ... --out public/archive
Venue image (Bayer, sky removed):
    python scripts/dither.py senate-house.png --out public/venue --width 640 --bayer --gamma 1.8 --sky
"""

import argparse
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageOps

BAYER = np.array([[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]]) / 16 + 1 / 32


def sky_mask(rgb):
    """Blue or near-white pixels connected to the top edge."""
    R, B = rgb[..., 0].astype(int), rgb[..., 2].astype(int)
    L = rgb @ [0.299, 0.587, 0.114]
    m = Image.fromarray((((B - R > 15) | (L > 238)) * 255).astype(np.uint8)).copy()  # writable.copy()  
    for x in range(m.width):
        if m.getpixel((x, 0)) == 255:
            ImageDraw.floodfill(m, (x, 0), 128)
    s = np.asarray(m) == 128
    p = np.pad(s, 1, constant_values=True)
    return s | (p[:-2, 1:-1] & p[2:, 1:-1] & p[1:-1, :-2] & p[1:-1, 2:])  # absorb lone specks


p = argparse.ArgumentParser()
p.add_argument("images", nargs="+", type=Path)
p.add_argument("--out", type=Path, default=Path("public/archive"))
p.add_argument("--width", type=int, default=400)
p.add_argument("--contrast", type=float, default=1.3)
p.add_argument("--gamma", type=float, default=1.0, help=">1 darkens mid-tones")
p.add_argument("--bayer", action="store_true", help="ordered dither instead of Floyd-Steinberg")
p.add_argument("--sky", action="store_true", help="white out sky connected to the top edge")
args = p.parse_args()

args.out.mkdir(parents=True, exist_ok=True)
for path in args.images:
    im = ImageOps.exif_transpose(Image.open(path)).convert("RGB")
    im = im.resize((args.width, round(im.height * args.width / im.width)), Image.LANCZOS)
    g = ImageOps.autocontrast(im.convert("L"), cutoff=1)
    if args.sky:  # sharpen edges instead of boosting contrast
        g = g.filter(ImageFilter.UnsharpMask(radius=2, percent=160, threshold=2))
    else:
        g = ImageEnhance.Contrast(g).enhance(args.contrast)
    a = (np.asarray(g, float) / 255) ** args.gamma
    if args.sky:
        a[sky_mask(np.asarray(im))] = 1.0
    if args.bayer:
        h, w = a.shape
        out = Image.fromarray(((a > np.tile(BAYER, (h // 4 + 1, w // 4 + 1))[:h, :w]) * 255).astype(np.uint8)).convert("1")
    else:
        out = Image.fromarray((a * 255).astype(np.uint8)).convert("1")
    dest = args.out / f"{path.stem}.png"
    out.save(dest, optimize=True)
    print(dest, out.size, dest.stat().st_size // 1024, "KB")
