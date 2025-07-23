export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  service: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Kelly Krysiak',
    location: 'Erie, PA',
    quote: 'Cameron captured our wedding day beautifully! Every photo tells a story, and we couldn\'t be happier with the results. His professionalism and artistic eye made our special day even more memorable.',
    rating: 5,
    service: 'Wedding Photography'
  },
  {
    id: '2',
    name: 'James Schofield',
    location: 'Erie, PA',
    quote: 'Working with Cameron for our corporate event was fantastic. He was unobtrusive yet captured all the important moments. The photos exceeded our expectations and really showcased our company culture.',
    rating: 5,
    service: 'Event Photography'
  },
  {
    id: '3',
    name: 'Ryan Rosiethall',
    location: 'Erie, PA',
    quote: 'Cameron knocked it out of the park with my business headshots. The guy knows what he\'s doing behind the camera. Photos came out sharp and professional - exactly what I needed for my company website.',
    rating: 5,
    service: 'Portrait Photography'
  },
  {
    id: '4',
    name: 'David Thompson',
    location: 'Berkeley, CA',
    quote: 'Cameron\'s commercial photography work for our product launch was exceptional. His attention to detail and creative approach helped showcase our products in the best possible light.',
    rating: 5,
    service: 'Commercial Photography',
    avatar: '/avatars/david.jpg'
  },
  {
    id: '5',
    name: 'Lisa Park',
    location: 'San Jose, CA',
    quote: 'The landscape photos Cameron took during our family vacation are breathtaking. He captured the beauty of the location perfectly and gave us memories we\'ll treasure forever.',
    rating: 5,
    service: 'Landscape Photography',
    avatar: '/avatars/lisa.jpg'
  },
  {
    id: '6',
    name: 'Robert Williams',
    location: 'Marin County, CA',
    quote: 'Professional, creative, and reliable. Cameron delivered exactly what we needed for our marketing campaign. His photos helped increase our engagement by 40%!',
    rating: 5,
    service: 'Commercial Photography',
    avatar: '/avatars/robert.jpg'
  }
];

export const getFeaturedTestimonials = () => testimonials.slice(0, 3);
export const getTestimonialsByService = (service: string) => 
  testimonials.filter(testimonial => testimonial.service === service); 