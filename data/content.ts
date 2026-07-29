export const SITE = {
  name: 'FlickzWithFitz',
  photographer: 'Cameron Fitzsimmons',
  email: 'flickzwithfitz@outlook.com',
  instagram: 'https://www.instagram.com/flickzwithfitz/',
  instagramHandle: '@flickzwithfitz',
  location: 'Erie, PA',
  booking: 'BOOKING 2026 — 2027',
  url: 'https://flickzwithfitz.com',
} as const;

export const SIDEBAR_BIO =
  "Cameron Fitzsimmons. Ten years in Erie, PA, photographing people on the days they'll want back. I stay out of the way and bring home what was actually there.";

export const HOME_LEDE =
  'Weddings and portraits, shot honestly. No stiff posing, no fake laughing at nothing — just the day as it happened, given back to you properly.';

export const HOME_LEDE_MOBILE =
  'Weddings & portraits in Erie, PA. Ten years behind the lens.';

export type Package = {
  name: string;
  short: string;
  detail: string;
  price?: string;
  popular?: boolean;
};

export const WEDDING_PACKAGES: Package[] = [
  {
    name: 'Basic',
    short: 'Basic',
    detail:
      'Up to 8 hours · 100 edited images · online gallery with high-res downloads',
  },
  {
    name: 'Classic',
    short: 'Classic',
    detail:
      '30-min engagement session · 2 hrs rehearsal · 8 hrs day-of · 200 edits · timeline planning',
    popular: true,
  },
  {
    name: 'Signature',
    short: 'Signature',
    detail:
      '1-hr engagement · 2 hrs rehearsal · 10 hrs day-of · 300 edits · consultation included',
  },
  {
    name: 'Full Story',
    short: 'Full Story',
    detail:
      '1-hr engagement · 3 hrs rehearsal · 12 hrs day-of · 400+ edits · access to the full gallery',
  },
];

export const PORTRAIT_PACKAGES: Package[] = [
  {
    name: 'Mini',
    short: 'Mini · 30 min',
    detail: '30 minutes · 1 outfit, 1 location · 5+ edits — good for headshots and socials',
    price: '$200',
  },
  {
    name: 'Standard',
    short: 'Standard · 1 hr',
    detail: '1 hour · 1 outfit, 1 location · 10+ edits — couples and personal branding',
    price: '$300',
    popular: true,
  },
  {
    name: 'Premium',
    short: 'Premium · 90 min',
    detail:
      '90 minutes · 2 outfits, 2 locations · 20+ edits · full gallery access · consultation',
    price: '$400',
  },
];

export type Testimonial = {
  quote: string;
  quoteShort: string;
  attribution: string;
  attributionShort: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Every photo tells a story, and we couldn’t be happier with the results.',
    quoteShort: 'Every photo tells a story, and we couldn’t be happier.',
    attribution: 'KELLY KRYSIAK — ERIE, PA · WEDDING',
    attributionShort: 'KELLY KRYSIAK — WEDDING',
  },
  {
    quote: 'Unobtrusive, yet he caught every important moment of the evening.',
    quoteShort: 'Unobtrusive, yet he caught every important moment.',
    attribution: 'JAMES SCHOFIELD — ERIE, PA · EVENT',
    attributionShort: 'JAMES SCHOFIELD — EVENT',
  },
  {
    quote: 'Sharp, professional headshots — exactly what I needed for the site.',
    quoteShort: 'Sharp and professional — exactly what I needed.',
    attribution: 'RYAN ROSIETHALL — ERIE, PA · PORTRAIT',
    attributionShort: 'RYAN ROSIETHALL — PORTRAIT',
  },
  {
    quote: 'His attention to detail showed our products in the best possible light.',
    quoteShort: 'Attention to detail showed our products at their best.',
    attribution: 'DAVID THOMPSON — BERKELEY, CA · COMMERCIAL',
    attributionShort: 'DAVID THOMPSON — COMMERCIAL',
  },
  {
    quote: 'Breathtaking. He captured the place perfectly and gave us memories we’ll keep.',
    quoteShort: 'Breathtaking. Memories we’ll keep for good.',
    attribution: 'LISA PARK — SAN JOSE, CA · LANDSCAPE',
    attributionShort: 'LISA PARK — LANDSCAPE',
  },
  {
    quote: 'Professional, creative, reliable. Engagement went up forty percent.',
    quoteShort: 'Professional, creative, reliable. Engagement up forty percent.',
    attribution: 'ROBERT WILLIAMS — MARIN COUNTY, CA · COMMERCIAL',
    attributionShort: 'ROBERT WILLIAMS — COMMERCIAL',
  },
];

export const STATS: { value: string; label: string }[] = [
  { value: '10+', label: 'YEARS SHOOTING' },
  { value: '7', label: 'PACKAGES TO PICK FROM' },
  { value: '8—12', label: 'HRS WEDDING COVERAGE' },
  { value: '4—6', label: 'WEEKS TO FULL GALLERY' },
];

export const HOW_I_WORK: { num: string; title: string; body: string; bodyShort: string }[] = [
  {
    num: '01',
    title: 'We talk first',
    body: "A call before anything is booked. Venue, timings, the people who matter, the shots you'd be upset to miss.",
    bodyShort: "A call before anything is booked — venue, timings, the shots you'd be upset to miss.",
  },
  {
    num: '02',
    title: 'I stay out of it',
    body: "On the day I'm working, not directing. Portraits get twenty minutes; the rest is the day happening on its own.",
    bodyShort: 'Portraits get twenty minutes; the rest is the day happening on its own.',
  },
  {
    num: '03',
    title: 'Then the edit',
    body: 'Lightroom and Photoshop, handled by me. Sneak peeks within the week, full gallery in four to six.',
    bodyShort: 'Sneak peeks within the week, full gallery in four to six.',
  },
];

export const WHAT_I_SHOOT = [
  'WEDDINGS',
  'PORTRAITS',
  'EVENTS',
  'COMMERCIAL',
  'LANDSCAPE',
  'STUDIO LIGHTING',
  'NATURAL LIGHT',
  'LIGHTROOM',
  'PHOTOSHOP',
];

export const EVENT_TYPES = ['Wedding', 'Engagement', 'Portrait', 'Event', 'Other'];

export const BUDGETS = [
  'Under $500',
  '$1K — $2K',
  '$2K — $3K',
  '$3K — $4K',
  'Not sure yet',
];

export const MARQUEE = [
  'untitled-85',
  'DSC05471',
  'DSC08743',
  'DSC_0808',
  'DSC01547',
  'kellywedding2-0306',
  'DSC05051',
];

export const MARQUEE_MOBILE = ['untitled-85', 'DSC05471', 'DSC08743', 'DSC01547'];

/** Indices into PHOTOS — the mobile home carousel, which opens the lightbox. */
export const MOBILE_CAROUSEL = [2, 4, 12, 18];
