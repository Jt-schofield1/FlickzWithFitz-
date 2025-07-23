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
  {
    id: '1',
    title: 'Portrait Photography',
    description: 'Professional portrait sessions that capture your unique personality and style in stunning detail.',
    features: [
      'Professional studio or outdoor setting',
      '60-90 minute photo session',
      '20+ edited high-resolution images',
      'Personal style consultation',
      'Online gallery for easy sharing'
    ],
    price: 'Contact for pricing',
    duration: '1.5 hours',
    icon: '👤',
    popular: true
  },
  {
    id: '2',
    title: 'Wedding Photography',
    description: 'Complete wedding day coverage to preserve every precious moment of your special day.',
    features: [
      'Full day wedding coverage (8-10 hours)',
      'Engagement session included',
      '500+ edited high-resolution images',
      'Online gallery with download rights',
      'USB drive with all photos',
      'Timeline planning consultation'
    ],
    price: 'Contact for pricing',
    duration: 'Full day',
    icon: '💍',
    popular: true
  },
  {
    id: '3',
    title: 'Event Photography',
    description: 'Professional coverage of corporate events, parties, and special celebrations.',
    features: [
      'Event coverage (2-6 hours)',
      '100+ edited high-resolution images',
      'Quick turnaround (24-48 hours)',
      'Online gallery for attendees',
      'Social media ready formats'
    ],
    price: 'Contact for pricing',
    duration: '2-6 hours',
    icon: '🎉',
    popular: true
  },
  {
    id: '4',
    title: 'Commercial Photography',
    description: 'Professional imagery for businesses, products, and marketing materials.',
    features: [
      'Product or business photography',
      'Multiple setup variations',
      '50+ edited high-resolution images',
      'Commercial usage rights',
      'Various formats and sizes',
      'Brand consultation included'
    ],
    price: 'Starting at $799',
    duration: '2-4 hours',
    icon: '💼'
  },
  {
    id: '5',
    title: 'Landscape Photography',
    description: 'Stunning landscape and nature photography for personal or commercial use.',
    features: [
      'Location scouting included',
      'Golden hour shooting',
      '30+ edited high-resolution images',
      'Print-ready formats',
      'Weather contingency planning'
    ],
    price: 'Starting at $399',
    duration: '2-3 hours',
    icon: '🏔️'
  },
  {
    id: '6',
    title: 'Photo Editing Services',
    description: 'Professional post-processing and retouching for your existing photos.',
    features: [
      'Color correction and enhancement',
      'Professional retouching',
      'Background removal/replacement',
      'Batch processing available',
      '48-hour turnaround'
    ],
    price: 'Starting at $25/photo',
    duration: '1-2 days',
    icon: '🎨'
  }
];

export const getPopularServices = () => services.filter(service => service.popular);
export const getServiceById = (id: string) => services.find(service => service.id === id); 