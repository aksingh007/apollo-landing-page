export interface Testimonial {
  id: string;
  name: string;
  country: string;
  flag: string;
  treatment: string;
  rating: number;
  testimonial: string;
  image: string;
  department: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jennifer Martinez',
    country: 'United States',
    flag: '🇺🇸',
    treatment: 'Cardiac Bypass Surgery',
    rating: 5,
    testimonial: 'The cardiac team at Apollo Hospital saved my life. The surgery was performed with utmost precision and the post-operative care was exceptional. I highly recommend Apollo for anyone seeking world-class cardiac treatment.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    department: 'Cardiology'
  },
  {
    id: '2',
    name: 'Adebayo Adeyemi',
    country: 'Nigeria',
    flag: '🇳🇬',
    treatment: 'Brain Tumor Surgery',
    rating: 5,
    testimonial: 'I traveled from Nigeria for my brain tumor surgery at Apollo. The neurosurgery team was incredibly skilled and compassionate. The entire experience exceeded my expectations and I am now completely recovered.',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    department: 'Neurology'
  },
  {
    id: '3',
    name: 'Robert Chen',
    country: 'Canada',
    flag: '🇨🇦',
    treatment: 'Knee Replacement Surgery',
    rating: 5,
    testimonial: 'The knee replacement surgery at Apollo was a game-changer for me. The precision of the surgery and the quick recovery time were remarkable. I can now walk pain-free and enjoy my daily activities.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    department: 'Orthopedic'
  },
  {
    id: '4',
    name: 'Fatima Asante',
    country: 'Ghana',
    flag: '🇬🇭',
    treatment: 'Cancer Treatment',
    rating: 5,
    testimonial: 'My cancer treatment journey at Apollo was handled with such care and professionalism. The oncology team provided personalized treatment that helped me beat cancer. I am forever grateful to the entire team.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    department: 'Oncology'
  },
  {
    id: '5',
    name: 'David Thompson',
    country: 'United Kingdom',
    flag: '🇬🇧',
    treatment: 'Liver Transplant',
    rating: 5,
    testimonial: 'The liver transplant team at Apollo gave me a second chance at life. The surgery was successful and the post-transplant care was outstanding. I highly recommend Apollo for complex transplant procedures.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    department: 'Transplant Surgery'
  },
  {
    id: '6',
    name: 'Lisa Anderson',
    country: 'United States',
    flag: '🇺🇸',
    treatment: 'IVF Treatment',
    rating: 5,
    testimonial: 'After years of trying to conceive, the IVF team at Apollo helped us achieve our dream of parenthood. The treatment was handled with such care and sensitivity. We now have a beautiful baby thanks to Apollo.',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    department: 'IVF'
  }
];