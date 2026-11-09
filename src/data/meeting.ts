// All page content lives here. Edit this file to update the site.

export const meeting = {
  title: 'SBI for Galaxy Evolution 2027',
  edition: 4,
  dates: '6–9 July 2027',
  days: 'Tuesday to Friday',
  venue: {
    name: 'Senate House',
    city: 'London',
    address: ['Malet Street, Bloomsbury', 'London WC1E 7HU'],
    map: 'https://www.google.com/maps/search/?api=1&query=Senate+House+Malet+Street+London+WC1E+7HU',
    travel:
      'Russell Square and Goodge Street Underground stations are a few minutes’ walk away. Euston and King’s Cross St Pancras (for Eurostar) are around 15–20 minutes on foot.',
  },
  host: {
    name: 'Department of Physical Sciences and Engineering, Royal Holloway, University of London',
    url: 'https://www.royalholloway.ac.uk/research-and-education/subjects/physics-and-astronomy/',
  },
};

export const topics = [
  {
    title: 'Theory',
    text: 'Flavours of SBI, density estimation, transfer learning, model comparison, hierarchical modelling, amortised inference, simulation budgets, active learning, domain adaptation.',
  },
  {
    title: 'Applications',
    text: 'Spectro-photometric and resolved SED fitting, dynamics, reionisation, AGN modelling, resolved stellar populations, gravitational waves, CMB foregrounds, population-level modelling.',
  },
  {
    title: 'Tools and techniques',
    text: 'Differentiable programming, efficient sampling, forward-modelling frameworks, simulation design, calibration and convergence testing.',
  },
];

// `when: null` renders as "To be announced".
export const keyDates: { what: string; when: string | null }[] = [
  { what: 'Abstract submission opens', when: '4 January 2027' },
  { what: 'Abstract deadline', when: '26 March 2027' },
  { what: 'Registration opens', when: '19 April 2027' },
  { what: 'Registration closes', when: '6 June 2027' },
  { what: 'Meeting', when: meeting.dates },
];

const rhul = { name: meeting.host.name, url: meeting.host.url };

export const loc: { name: string; role?: string; affiliation?: string; affiliationUrl?: string; url?: string }[] = [
  { name: 'Chris Lovell', role: 'Chair', affiliation: 'University of Cambridge', url: 'https://www.christopherlovell.co.uk/' },
  { name: 'Sotiria Fotopoulou', role: 'Chair', affiliation: 'University of Bristol', url: 'https://www.sotiriafotopoulou.com/' },
  { name: 'Alessio Spurio Mancini', affiliation: rhul.name, affiliationUrl: rhul.url },
  { name: 'Carolina M. García López', affiliation: rhul.name, affiliationUrl: rhul.url },
];

export const archive: {
  n: number;
  year: number;
  city: string;
  dates: string;
  venue: string;
  host?: { name: string; url: string };
  url?: string;
  photo?: string;
}[] = [
  {
    n: 4,
    year: 2027,
    city: 'London',
    dates: '6–9 July',
    venue: 'Senate House',
    host: rhul,
  },
  {
    n: 3,
    year: 2026,
    city: 'Cambridge',
    dates: '23–26 June',
    venue: 'Kavli Institute for Cosmology, University of Cambridge',
    url: 'https://sbi-galev.github.io/2026/',
    photo: 'archive/2026.png',
  },
  {
    n: 2,
    year: 2025,
    city: 'Bristol',
    dates: '27–30 May',
    venue: 'School of Physics, University of Bristol',
    url: 'https://sbi-galev.github.io/2025/',
    photo: 'archive/2025.png',
  },
  {
    n: 1,
    year: 2024,
    city: 'Bristol',
    dates: '9–12 April',
    venue: 'University of Bristol',
    url: 'https://sbi-galev.github.io/2024/',
    photo: 'archive/2024.png',
  },
];

export const links = {
  conduct: 'https://sbi-galev.github.io/2024/coc.html',
  series: 'https://sbi-galev.github.io/',
  github: 'https://github.com/sbi-galev',
  cranmer: 'https://www.pnas.org/doi/full/10.1073/pnas.1912789117',
};
