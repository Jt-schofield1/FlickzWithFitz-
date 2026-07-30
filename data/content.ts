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

/* ------------------------------------------------------- wedding services --- */

export type Offering = {
  name: string;
  price: string;
  blurb: string;
  includes: string[];
};

export const WEDDING_SERVICES: Offering[] = [
  {
    name: 'Wedding Photography',
    price: 'Starting at $1,500',
    blurb:
      'Your wedding day is made up of moments that deserve to be remembered. My goal is to capture those moments naturally — from the big milestones to the little details — so you can look back and relive your day for years to come.',
    includes: [
      'One photographer',
      'Up to 8 hours of wedding day coverage',
      'Pre-wedding consultation',
      'Professionally edited, high-resolution images',
      'Private online gallery for viewing and downloading',
      'Personal printing rights',
      'Engagement photo session',
      'Sneak peek photos: 10+ delivered within 7 business days',
      'Final gallery delivered within 90 business days',
      'Additional coverage available for $150 per hour',
    ],
  },
  {
    name: 'Wedding Videography',
    price: 'Starting at $1,500',
    blurb:
      'Your wedding day is filled with moments you’ll never want to forget. My goal is to capture those moments as they naturally unfold, creating a wedding film that lets you relive the emotions, laughter, and memories for years to come.',
    includes: [
      'One videographer',
      'Up to 8 hours of wedding day coverage',
      'Pre-wedding consultation',
      '3–7 minute edited highlight film',
      'Full, unedited ceremony video',
      'Full, unedited first dance video',
      'Full, unedited speeches',
      'Professional recordings captured using multiple sources when available',
      'Digital delivery of all final videos',
      'Sneak peek trailer: 30–60 seconds delivered within 7 business days',
      'Final delivery within 90 business days',
      'Additional coverage available for $150 per hour',
    ],
  },
];

/* ---------------------------------------------------- additional services --- */

export const ADDITIONAL_SERVICES: { group: string; items: string[] }[] = [
  {
    group: 'Portraits',
    items: [
      'Family sessions',
      'Couples sessions',
      'Maternity',
      'Newborn lifestyle',
      'Senior photos',
      'Graduation sessions',
      'Headshots (professional & corporate)',
    ],
  },
  {
    group: 'Events',
    items: [
      'Birthday parties',
      'Baby showers',
      'Bridal showers',
      'Anniversary parties',
      'Quinceañeras',
      'Proms & homecoming',
      'Corporate events',
      'Fundraisers & galas',
    ],
  },
  {
    group: 'Business & Branding',
    items: [
      'Branding photography',
      'Branding videos',
      'Product photography',
      'Product videos',
      'Social media content creation',
      'Restaurant & food photography',
      'Real estate photography',
      'Real estate video tours',
      'Drone photography & video',
    ],
  },
  {
    group: 'Sports & Schools',
    items: ['Team photos', 'Individual athlete portraits', 'Game highlights', 'School events'],
  },
  {
    group: 'Creative',
    items: ['Music videos', 'Short films', 'Lifestyle sessions', 'Pet photography'],
  },
];

export type Package = {
  name: string;
  short: string;
  detail: string;
  price?: string;
  popular?: boolean;
};

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

/* ------------------------------------------------------------------- faqs --- */

export const FAQS: { q: string; a: string }[] = [
  {
    q: 'How far do you travel?',
    a: 'I’m based in Erie, Pennsylvania and proudly serve weddings throughout Pennsylvania, Ohio, New York and surrounding areas. Travel within 50 miles is included. Locations beyond that may require a travel fee depending on distance.',
  },
  {
    q: 'How many photos do we receive?',
    a: 'The number of final images you receive depends on the length and details of your wedding day, but most couples can expect approximately 400+ professionally edited, high-resolution images from a full wedding day.',
  },
  {
    q: 'How long until we receive our photos and videos?',
    a: 'Your wedding memories take time and care to be professionally edited and finalized. Your completed gallery and videos will be delivered within 90 business days after your wedding date.',
  },
  {
    q: 'Do you offer both photo and video?',
    a: 'Yes. I offer both wedding photography and wedding videography services, and couples interested in having both captured can inquire about a combined option. Because I personally handle both, I’m able to provide a consistent style and a more personal experience throughout your wedding day. I’m always transparent that capturing both services as one person requires careful planning, and certain moments may require prioritizing one medium over the other. For couples who want complete photo and video coverage, I’d be happy to discuss the best option for your wedding day and timeline.',
  },
  {
    q: 'Do you require a deposit?',
    a: 'Yes. A non-refundable deposit is required to reserve your wedding date and officially secure your booking. The deposit is set at 25% of your final cost. The remaining balance will be due according to the payment schedule outlined in your contract. Your date is not considered booked until the signed agreement and retainer have been received.',
  },
  {
    q: 'What happens if it rains?',
    a: 'Rain won’t stop us from creating beautiful memories. I’ll work with you and your timeline to adjust as needed and find the best opportunities for photos and video, whether that means using covered areas, moving to indoor locations, or embracing the weather for unique and memorable images. I always recommend having a backup plan for outdoor events, but unexpected weather can create some of the most romantic and meaningful moments of your wedding day. My goal is to make sure you feel comfortable, relaxed, and confident no matter what the forecast brings.',
  },
  {
    q: 'Can we print our photos?',
    a: 'Yes. Your wedding package includes a personal printing release, allowing you to print and share your images for personal use. You are welcome to print through the lab of your choice. For the best color accuracy and quality, I recommend using a professional print lab rather than standard consumer printing services.',
  },
  {
    q: 'Do you work with other vendors?',
    a: 'Yes. I love working alongside other wedding professionals to help create a smooth and enjoyable experience for couples. I’m happy to collaborate with planners, photographers, videographers, venues, florists, DJs, makeup artists, and other vendors to help your day run as smoothly as possible. I believe strong communication between vendors helps everyone stay organized and allows us to capture the best moments of your wedding day.',
  },
];

/* --------------------------------------------------------------- the rest --- */

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

/** Every figure here is derived from the published services — no invented claims. */
export const STATS: { value: string; label: string }[] = [
  { value: '10+', label: 'YEARS SHOOTING' },
  { value: '400+', label: 'IMAGES FROM A FULL DAY' },
  { value: '8+', label: 'HRS WEDDING COVERAGE' },
  { value: '90', label: 'BUSINESS DAYS TO DELIVERY' },
];

export const HOW_I_WORK: { num: string; title: string; body: string; bodyShort: string }[] = [
  {
    num: '01',
    title: 'We talk first',
    body: "A call before anything is booked. Venue, timings, the people who matter, the shots you'd be upset to miss.",
    bodyShort:
      "A call before anything is booked — venue, timings, the shots you'd be upset to miss.",
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
    body: 'Lightroom and Photoshop, handled by me. A sneak peek inside 7 business days, everything final within 90.',
    bodyShort: 'A sneak peek inside 7 business days, everything final within 90.',
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
