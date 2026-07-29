import meta from './photo-meta.json';

export type Category = 'Weddings' | 'Portraits' | 'Details' | 'Places' | 'Pets';

export type Photo = {
  i: number;
  name: string;
  cat: Category;
  title: string;
  w: number;
  h: number;
};

type Meta = Record<string, { w: number; h: number }>;

const dims = meta as Meta;

const RAW: [name: string, cat: Category, title: string][] = [
  ['DSC01420', 'Weddings', 'Lakeside ceremony'],
  ['kellywedding2-0110', 'Weddings', 'Vows'],
  ['DSC01472', 'Weddings', 'Beneath the veil'],
  ['DSC00392', 'Weddings', 'At the window'],
  ['kellywedding2-0191', 'Weddings', 'The gown'],
  ['DSC01495', 'Weddings', 'Quiet minute'],
  ['DSC00580', 'Weddings', 'With the bouquet'],
  ['kellywedding2-0249', 'Weddings', 'The kiss'],
  ['DSC01508', 'Weddings', 'Forehead to forehead'],
  ['DSC01057', 'Weddings', 'Reading the vows'],
  ['kellywedding2-0199', 'Weddings', 'The dip'],
  ['DSC01511', 'Weddings', 'Close'],
  ['DSC01445', 'Weddings', 'First look'],
  ['kellywedding2-0306', 'Weddings', 'Beneath the tree'],
  ['DSC08998', 'Weddings', 'Veil in the wind'],
  ['DSC08999', 'Weddings', 'Spring bouquet'],
  ['kellywedding2-0458', 'Weddings', 'Walking out'],
  ['DSC04640', 'Weddings', 'Silhouette'],
  ['DSC05051', 'Portraits', 'Hands at sunset'],
  ['untitled-217', 'Portraits', 'In the trees'],
  ['untitled-85', 'Details', 'Shoes and hairpins'],
  ['DSC05471', 'Details', 'Beaded bodice'],
  ['untitled-88', 'Details', 'Heels'],
  ['DSC_0052', 'Details', 'Bodice'],
  ['untitled-84', 'Details', 'Jewellery on silk'],
  ['DSC05473', 'Details', 'Hem'],
  ['DSC05477', 'Details', 'Lace'],
  ['DSC01547', 'Details', 'Bouquet'],
  ['DSC08743', 'Places', 'Coastline'],
  ['DSC_0808', 'Places', 'Falls'],
  ['DSC_0804', 'Places', 'The gorge'],
  ['DSC_0856', 'Places', 'Bridge'],
  ['old-IMG_7955', 'Weddings', 'Autumn arch'],
  ['old-IMG_7956', 'Weddings', 'Under the veil'],
  ['old-IMG_7957', 'Weddings', 'Almost touching'],
  ['old-IMG_7954', 'Weddings', 'Pinning the boutonnière'],
  ['old-IMG_7953', 'Weddings', 'With the bridesmaids'],
  ['old-IMG_7960', 'Weddings', 'Held close'],
  ['old-IMG_7959', 'Weddings', 'In black and white'],
  ['old-IMG_7961', 'Weddings', 'Lakeside vows'],
  ['old-DSC01296', 'Weddings', 'The family'],
  ['old-DSC01484', 'Weddings', 'Veil light'],
  ['old-DSC01505', 'Weddings', 'Forehead to forehead'],
  ['old-DSC01518', 'Weddings', 'Laughing under the veil'],
  ['old-kellywedding2-0202', 'Weddings', 'The dip'],
  ['old-kellywedding2-0209', 'Weddings', 'Caught mid-laugh'],
  ['old-kellywedding2-0283', 'Weddings', 'Quiet aside'],
  ['old-kellywedding2-0296', 'Weddings', 'Held on the lawn'],
  ['old-kellywedding2-0302', 'Weddings', 'Walking the grounds'],
  ['old-kellywedding2-0303', 'Weddings', 'Grounds, black and white'],
  ['old-kellywedding2-0363', 'Weddings', 'The toast'],
  ['old-kellywedding2-0396', 'Weddings', 'Doorway light'],
  ['old-IMG_7946', 'Portraits', 'Sunset on the lake'],
  ['old-IMG_7947', 'Portraits', 'Held, black and white'],
  ['old-IMG_7948', 'Portraits', 'Over the shoulder'],
  ['old-IMG_7950', 'Portraits', 'Two on the shoreline'],
  ['old-IMG_7951', 'Portraits', 'Hands at golden hour'],
  ['old-DSC01556', 'Details', 'The seating chart'],
  ['old-DSC01579', 'Details', 'Reserved'],
  ['old-IMG_7952', 'Details', 'Blooms'],
  ['old-IMG_7958', 'Details', 'Rings in the bouquet'],
  ['DSC01838', 'Pets', 'Tux on the porch'],
  ['DSC02060', 'Pets', 'Two of them'],
  ['old-IMG_7934', 'Pets', 'Grey among the mums'],
  ['old-IMG_7939', 'Pets', 'Looking up'],
  ['old-IMG_7940', 'Pets', 'Good dog'],
  ['old-IMG_7941', 'Pets', 'Autumn on the deck'],
];

export const PHOTOS: Photo[] = RAW.map(([name, cat, title], i) => ({
  i,
  name,
  cat,
  title,
  w: dims[name].w,
  h: dims[name].h,
}));

export const PHOTO_COUNT = PHOTOS.length;

export type CategoryEntry = {
  num: string;
  name: Category;
  hero: string;
  count: number;
};

export const CATEGORIES: CategoryEntry[] = (
  [
    ['01', 'Weddings', 'DSC01472'],
    ['02', 'Portraits', 'old-IMG_7946'],
    ['03', 'Details', 'untitled-85'],
    ['04', 'Places', 'DSC08743'],
    ['05', 'Pets', 'old-IMG_7940'],
  ] as [string, Category, string][]
).map(([num, name, hero]) => ({
  num,
  name,
  hero,
  count: PHOTOS.filter((p) => p.cat === name).length,
}));

export function byCategory(cat: Category): Photo[] {
  return PHOTOS.filter((p) => p.cat === cat);
}

/** Dimensions for photos used as page furniture rather than gallery entries. */
export function dimsOf(name: string): { w: number; h: number } {
  return dims[name];
}
