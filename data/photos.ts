export interface Photo {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: 'portrait' | 'landscape' | 'wedding' | 'event' | 'commercial';
  featured: boolean;
  width: number;
  height: number;
}

export const photos: Photo[] = [
  // Original IMG series - Featured selections
  {
    id: '1',
    src: '/photos/IMG_7950.jpeg',
    alt: 'Professional portrait session in natural light',
    title: 'Natural Light Portrait',
    category: 'portrait',
    featured: true,
    width: 800,
    height: 1000
  },
  {
    id: '2',
    src: '/photos/IMG_7951.jpeg',
    alt: 'Golden hour mountain landscape photography',
    title: 'Golden Hour Mountains',
    category: 'landscape',
    featured: true,
    width: 1200,
    height: 800
  },
  {
    id: '3',
    src: '/photos/IMG_7952.jpeg',
    alt: 'Romantic wedding couple portrait',
    title: 'Wedding Bliss',
    category: 'wedding',
    featured: true,
    width: 800,
    height: 1000
  },
  {
    id: '4',
    src: '/photos/IMG_7953.jpeg',
    alt: 'Corporate event photography',
    title: 'Corporate Gathering',
    category: 'event',
    featured: true,
    width: 1000,
    height: 667
  },
  {
    id: '5',
    src: '/photos/IMG_7954.jpeg',
    alt: 'Commercial product photography',
    title: 'Product Showcase',
    category: 'commercial',
    featured: true,
    width: 800,
    height: 1000
  },
  {
    id: '6',
    src: '/photos/IMG_7955.jpeg',
    alt: 'Landscape nature photography',
    title: 'Nature Vista',
    category: 'landscape',
    featured: true,
    width: 1200,
    height: 800
  },
  
  // Remaining original IMG series
  {
    id: '7',
    src: '/photos/IMG_7934.jpeg',
    alt: 'Professional photography session',
    title: 'Studio Session',
    category: 'portrait',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '8',
    src: '/photos/IMG_7939.jpeg',
    alt: 'Event photography capture',
    title: 'Event Moment',
    category: 'event',
    featured: false,
    width: 1000,
    height: 667
  },
  {
    id: '9',
    src: '/photos/IMG_7940.jpeg',
    alt: 'Portrait photography session',
    title: 'Portrait Session',
    category: 'portrait',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '10',
    src: '/photos/IMG_7941.jpeg',
    alt: 'Landscape photography',
    title: 'Scenic View',
    category: 'landscape',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '11',
    src: '/photos/IMG_7945.jpeg',
    alt: 'Commercial photography',
    title: 'Commercial Work',
    category: 'commercial',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '12',
    src: '/photos/IMG_7946.jpeg',
    alt: 'Wedding photography',
    title: 'Wedding Ceremony',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '13',
    src: '/photos/IMG_7947.jpeg',
    alt: 'Event photography',
    title: 'Event Coverage',
    category: 'event',
    featured: false,
    width: 1000,
    height: 667
  },
  {
    id: '14',
    src: '/photos/IMG_7948.jpeg',
    alt: 'Portrait session',
    title: 'Portrait Study',
    category: 'portrait',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '15',
    src: '/photos/IMG_7956.jpeg',
    alt: 'Landscape photography',
    title: 'Natural Beauty',
    category: 'landscape',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '16',
    src: '/photos/IMG_7957.jpeg',
    alt: 'Commercial session',
    title: 'Business Portrait',
    category: 'commercial',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '17',
    src: '/photos/IMG_7958.jpeg',
    alt: 'Wedding photography',
    title: 'Wedding Day',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '18',
    src: '/photos/IMG_7959.jpeg',
    alt: 'Event capture',
    title: 'Event Photography',
    category: 'event',
    featured: false,
    width: 1000,
    height: 667
  },
  {
    id: '19',
    src: '/photos/IMG_7960.jpeg',
    alt: 'Portrait work',
    title: 'Professional Portrait',
    category: 'portrait',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '20',
    src: '/photos/IMG_7961.jpeg',
    alt: 'Landscape view',
    title: 'Landscape Shot',
    category: 'landscape',
    featured: false,
    width: 1200,
    height: 800
  },

  // Kelly Wedding Series - Featured selections
  {
    id: '21',
    src: '/photos/52-kellywedding2-0199.jpg',
    alt: 'Beautiful wedding ceremony moment',
    title: 'Wedding Ceremony',
    category: 'wedding',
    featured: true,
    width: 800,
    height: 1000
  },
  {
    id: '22',
    src: '/photos/84-kellywedding2-0333.jpg',
    alt: 'Wedding couple portrait',
    title: 'Couple Portrait',
    category: 'wedding',
    featured: true,
    width: 800,
    height: 1000
  },

  // Remaining Kelly Wedding Series
  {
    id: '23',
    src: '/photos/53-kellywedding2-0200.jpg',
    alt: 'Wedding photography',
    title: 'Wedding Moment',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '24',
    src: '/photos/54-kellywedding2-0201.jpg',
    alt: 'Wedding ceremony',
    title: 'Ceremony Moment',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '25',
    src: '/photos/55-kellywedding2-0202.jpg',
    alt: 'Wedding celebration',
    title: 'Wedding Joy',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '26',
    src: '/photos/56-kellywedding2-0204.jpg',
    alt: 'Wedding photography',
    title: 'Wedding Day',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '27',
    src: '/photos/57-kellywedding2-0205.jpg',
    alt: 'Wedding moment',
    title: 'Special Moment',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '28',
    src: '/photos/58-kellywedding2-0206.jpg',
    alt: 'Wedding ceremony',
    title: 'Ceremony',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '29',
    src: '/photos/59-kellywedding2-0207.jpg',
    alt: 'Wedding celebration',
    title: 'Celebration',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '30',
    src: '/photos/60-kellywedding2-0209.jpg',
    alt: 'Wedding photography',
    title: 'Wedding Shot',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '31',
    src: '/photos/76-kellywedding2-0283.jpg',
    alt: 'Wedding moment',
    title: 'Wedding Memory',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '32',
    src: '/photos/77-kellywedding2-0286.jpg',
    alt: 'Wedding photography',
    title: 'Wedding Photo',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '33',
    src: '/photos/78-kellywedding2-0287.jpg',
    alt: 'Wedding ceremony',
    title: 'Ceremony Shot',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '34',
    src: '/photos/79-kellywedding2-0296.jpg',
    alt: 'Wedding celebration',
    title: 'Wedding Fun',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '35',
    src: '/photos/80-kellywedding2-0298.jpg',
    alt: 'Wedding moment',
    title: 'Precious Moment',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '36',
    src: '/photos/81-kellywedding2-0302.jpg',
    alt: 'Wedding photography',
    title: 'Wedding Image',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '37',
    src: '/photos/82-kellywedding2-0303.jpg',
    alt: 'Wedding ceremony',
    title: 'Wedding Scene',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '38',
    src: '/photos/83-kellywedding2-0306.jpg',
    alt: 'Wedding celebration',
    title: 'Wedding Party',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '39',
    src: '/photos/85-kellywedding2-0357.jpg',
    alt: 'Wedding photography',
    title: 'Wedding Capture',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '40',
    src: '/photos/86-kellywedding2-0363.jpg',
    alt: 'Wedding moment',
    title: 'Wedding Time',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '41',
    src: '/photos/87-kellywedding2-0373.jpg',
    alt: 'Wedding ceremony',
    title: 'Sacred Moment',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '42',
    src: '/photos/88-kellywedding2-0375.jpg',
    alt: 'Wedding celebration',
    title: 'Wedding Bliss',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '43',
    src: '/photos/89-kellywedding2-0390.jpg',
    alt: 'Wedding photography',
    title: 'Wedding Story',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '44',
    src: '/photos/90-kellywedding2-0394.jpg',
    alt: 'Wedding moment',
    title: 'Perfect Moment',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '45',
    src: '/photos/91-kellywedding2-0396.jpg',
    alt: 'Wedding ceremony',
    title: 'Wedding Vows',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '46',
    src: '/photos/92-kellywedding2-0402.jpg',
    alt: 'Wedding celebration',
    title: 'Wedding Dance',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '47',
    src: '/photos/93-kellywedding2-0403.jpg',
    alt: 'Wedding photography',
    title: 'Wedding Love',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '48',
    src: '/photos/94-kellywedding2-0404.jpg',
    alt: 'Wedding moment',
    title: 'Wedding Kiss',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '49',
    src: '/photos/95-kellywedding2-0458.jpg',
    alt: 'Wedding ceremony',
    title: 'Wedding Unity',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '50',
    src: '/photos/96-kellywedding2-0499.jpg',
    alt: 'Wedding celebration',
    title: 'Wedding Finale',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },

  // DSC Series - Featured selections and portraits
  {
    id: '51',
    src: '/photos/126-DSC01296.jpg',
    alt: 'Professional portrait photography',
    title: 'Portrait Study',
    category: 'portrait',
    featured: true,
    width: 800,
    height: 1000
  },
  {
    id: '52',
    src: '/photos/165-DSC01547.jpg',
    alt: 'Landscape photography',
    title: 'Natural Landscape',
    category: 'landscape',
    featured: true,
    width: 1200,
    height: 800
  },

  // Remaining DSC Series
  {
    id: '53',
    src: '/photos/152-DSC01478.jpg',
    alt: 'Portrait session',
    title: 'Character Study',
    category: 'portrait',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '54',
    src: '/photos/153-DSC01479.jpg',
    alt: 'Portrait photography',
    title: 'Professional Portrait',
    category: 'portrait',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '55',
    src: '/photos/154-DSC01484.jpg',
    alt: 'Portrait session',
    title: 'Portrait Work',
    category: 'portrait',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '56',
    src: '/photos/155-DSC01495.jpg',
    alt: 'Portrait photography',
    title: 'Portrait Session',
    category: 'portrait',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '57',
    src: '/photos/156-DSC01499.jpg',
    alt: 'Portrait work',
    title: 'Portrait Capture',
    category: 'portrait',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '58',
    src: '/photos/157-DSC01502.jpg',
    alt: 'Portrait session',
    title: 'Portrait Art',
    category: 'portrait',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '59',
    src: '/photos/158-DSC01505.jpg',
    alt: 'Portrait photography',
    title: 'Portrait Style',
    category: 'portrait',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '60',
    src: '/photos/159-DSC01508.jpg',
    alt: 'Portrait work',
    title: 'Portrait Vision',
    category: 'portrait',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '61',
    src: '/photos/160-DSC01511.jpg',
    alt: 'Portrait session',
    title: 'Portrait Focus',
    category: 'portrait',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '62',
    src: '/photos/161-DSC01514.jpg',
    alt: 'Portrait photography',
    title: 'Portrait Light',
    category: 'portrait',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '63',
    src: '/photos/162-DSC01517.jpg',
    alt: 'Portrait work',
    title: 'Portrait Mood',
    category: 'portrait',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '64',
    src: '/photos/163-DSC01518.jpg',
    alt: 'Portrait session',
    title: 'Portrait Beauty',
    category: 'portrait',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '65',
    src: '/photos/164-DSC01523.jpg',
    alt: 'Portrait photography',
    title: 'Portrait Grace',
    category: 'portrait',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '66',
    src: '/photos/166-DSC01556.jpg',
    alt: 'Landscape photography',
    title: 'Scenic Beauty',
    category: 'landscape',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '67',
    src: '/photos/167-DSC01562.jpg',
    alt: 'Landscape view',
    title: 'Nature Scene',
    category: 'landscape',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '68',
    src: '/photos/168-DSC01579.jpg',
    alt: 'Landscape photography',
    title: 'Natural Vista',
    category: 'landscape',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '69',
    src: '/photos/169-DSC01582.jpg',
    alt: 'Landscape scene',
    title: 'Landscape Art',
    category: 'landscape',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '70',
    src: '/photos/170-DSC01586.jpg',
    alt: 'Landscape photography',
    title: 'Landscape Study',
    category: 'landscape',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '71',
    src: '/photos/171-DSC01592.jpg',
    alt: 'Landscape view',
    title: 'Outdoor Scene',
    category: 'landscape',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '72',
    src: '/photos/172-DSC01596.jpg',
    alt: 'Landscape photography',
    title: 'Nature Photography',
    category: 'landscape',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '73',
    src: '/photos/173-DSC01602.jpg',
    alt: 'Landscape scene',
    title: 'Landscape Capture',
    category: 'landscape',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '74',
    src: '/photos/174-DSC01605.jpg',
    alt: 'Landscape photography',
    title: 'Scenic View',
    category: 'landscape',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '75',
    src: '/photos/175-DSC01612.jpg',
    alt: 'Landscape view',
    title: 'Natural Wonder',
    category: 'landscape',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '76',
    src: '/photos/176-DSC01615.jpg',
    alt: 'Landscape photography',
    title: 'Landscape Beauty',
    category: 'landscape',
    featured: false,
    width: 1200,
    height: 800
  },

  // PNG category examples (keeping some for variety)
  {
    id: '77',
    src: '/photos/couple.png',
    alt: 'Couple portrait session',
    title: 'Couple Portrait',
    category: 'wedding',
    featured: false,
    width: 800,
    height: 1000
  },
  {
    id: '78',
    src: '/photos/nature1.png',
    alt: 'Nature landscape photography',
    title: 'Nature Beauty',
    category: 'landscape',
    featured: false,
    width: 1200,
    height: 800
  },

  // Missing PNG files
  {
    id: '79',
    src: '/photos/nature1.png',
    alt: 'Beautiful nature landscape scene',
    title: 'Nature Landscape',
    category: 'landscape',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '80',
    src: '/photos/nature2.png',
    alt: 'Scenic nature photography',
    title: 'Nature Scene',
    category: 'landscape',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '81',
    src: '/photos/nature3.png',
    alt: 'Natural landscape beauty',
    title: 'Natural Beauty',
    category: 'landscape',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '82',
    src: '/photos/couple.png',
    alt: 'Romantic couple portrait session',
    title: 'Couple Portrait',
    category: 'portrait',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '83',
    src: '/photos/couple2.png',
    alt: 'Intimate couple photography',
    title: 'Couple Session',
    category: 'portrait',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '84',
    src: '/photos/couple3.png',
    alt: 'Beautiful couple portraits',
    title: 'Couple Portraits',
    category: 'portrait',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '85',
    src: '/photos/dog1.png',
    alt: 'Adorable pet portrait photography',
    title: 'Pet Portrait',
    category: 'portrait',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '86',
    src: '/photos/dog2.png',
    alt: 'Professional pet photography',
    title: 'Pet Photography',
    category: 'portrait',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '87',
    src: '/photos/wedding.png',
    alt: 'Beautiful wedding ceremony moments',
    title: 'Wedding Ceremony',
    category: 'wedding',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '88',
    src: '/photos/wedding2.png',
    alt: 'Wedding celebration photography',
    title: 'Wedding Celebration',
    category: 'wedding',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '89',
    src: '/photos/beach.png',
    alt: 'Serene beach landscape photography',
    title: 'Beach Landscape',
    category: 'landscape',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '90',
    src: '/photos/concert.png',
    alt: 'Live concert event photography',
    title: 'Concert Event',
    category: 'event',
    featured: false,
    width: 1200,
    height: 800
  },
  {
    id: '91',
    src: '/photos/boxing.png',
    alt: 'Athletic sports event photography',
    title: 'Sports Event',
    category: 'event',
    featured: false,
    width: 1200,
    height: 800
  }
];

export const getFeaturedPhotos = () => photos.filter(photo => photo.featured);
export const getPhotosByCategory = (category: Photo['category']) => 
  photos.filter(photo => photo.category === category);
export const getPhotoById = (id: string) => photos.find(photo => photo.id === id); 