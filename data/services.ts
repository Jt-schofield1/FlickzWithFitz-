export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  icon: string;
  popular?: boolean;
}

export const services: Service[] = [
  // Wedding Packages
  {
    id: '1',
    title: 'Basic Wedding',
    description: 'Essential wedding day coverage to capture your special moments.',
    features: [
      'Wedding day coverage up to 8 hours',
      'Up to 100 edited pictures',
      'Online gallery delivery',
      'High-resolution downloads'
    ],
    price: '$1,000',
    duration: 'Up to 8 hours',
    icon: '💍',
    popular: false
  },
  {
    id: '2',
    title: 'Classic Wedding',
    description: 'Comprehensive wedding package with engagement session and rehearsal coverage.',
    features: [
      'Engagement session up to 30 minutes',
      'Rehearsal coverage up to 2 hours',
      'Wedding day coverage up to 8 hours',
      'Up to 200 edited pictures',
      'Preliminary consultation',
      'Personalized timeline customization'
    ],
    price: '$2,000',
    duration: 'Multi-day coverage',
    icon: '💍',
    popular: true
  },
  {
    id: '3',
    title: 'Signature Wedding',
    description: 'Premium wedding experience with extended coverage and consultation.',
    features: [
      'Engagement session up to 1 hour',
      'Rehearsal coverage up to 2 hours',
      'Wedding day coverage up to 10 hours',
      'Up to 300 edited pictures',
      'Preliminary consultation',
      'Personalized timeline customization'
    ],
    price: '$3,000',
    duration: 'Extended coverage',
    icon: '💍',
    popular: true
  },
  {
    id: '4',
    title: 'Full Story Wedding',
    description: 'Complete wedding documentation from start to finish with full gallery access.',
    features: [
      'Engagement session up to 1 hour',
      'Rehearsal coverage up to 3 hours',
      'Wedding day coverage up to 12 hours',
      '400+ edited pictures',
      'Access to full gallery',
      'Preliminary consultation',
      'Personalized timeline customization'
    ],
    price: '$4,000',
    duration: 'Complete coverage',
    icon: '💍',
    popular: false
  },
  // Portrait Packages
  {
    id: '5',
    title: 'Mini Portrait Session',
    description: 'Quick and affordable portrait session perfect for headshots and social media.',
    features: [
      'Up to 30 minutes session time',
      '1 outfit and 1 location',
      '5+ edited pictures delivered online',
      'Great for headshots and social media',
      'High-resolution downloads included'
    ],
    price: '$200',
    duration: '30 minutes',
    icon: '👤',
    popular: false
  },
  {
    id: '6',
    title: 'Standard Portrait Session',
    description: 'Professional portrait session ideal for couples and personal branding.',
    features: [
      'Up to 1 hour session time',
      '1 outfit and 1 location',
      '10+ edited pictures delivered online',
      'Ideal for couples and personal branding',
      'Online gallery with high-resolution downloads'
    ],
    price: '$300',
    duration: '1 hour',
    icon: '👤',
    popular: true
  },
  {
    id: '7',
    title: 'Premium Portrait Session',
    description: 'Comprehensive portrait experience with multiple options and full gallery access.',
    features: [
      'Up to 90 minutes session time',
      'Option of 2 outfits and 2 locations',
      '20+ edited pictures delivered',
      'Access to full gallery of all pictures',
      'Preliminary consultation included',
      'High-resolution downloads included'
    ],
    price: '$400',
    duration: '90 minutes',
    icon: '👤',
    popular: false
  }
];

export const getPopularServices = () => services.filter(service => service.popular);
export const getServiceById = (id: string) => services.find(service => service.id === id); 