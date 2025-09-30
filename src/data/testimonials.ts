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
    image: 'https://yapitahealth.com/static/images/Thabitha.webp',
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
    image: 'https://yapitahealth.com/static/images/Nyok.webp',
    department: 'Neurology'
  },
  {
    id: '3',
    name: 'Tuula Chen',
    country: 'Canada',
    flag: '🇨🇦',
    treatment: 'Knee Replacement Surgery',
    rating: 5,
    testimonial: 'The knee replacement surgery at Apollo was a game-changer for me. The precision of the surgery and the quick recovery time were remarkable. I can now walk pain-free and enjoy my daily activities.',
    image: 'https://yapitahealth.com/static/images/Tuula.webp',
    department: 'Orthopedic'
  },
  {
    id: '4',
    name: 'Grace Lewa',
    country: 'Ghana',
    flag: '🇬🇭',
    treatment: 'Cancer Treatment',
    rating: 5,
    testimonial: 'My cancer treatment journey at Apollo was handled with such care and professionalism. The oncology team provided personalized treatment that helped me beat cancer. I am forever grateful to the entire team.',
    image: 'https://yapitahealth.com/static/images/Grace.webp',
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
    image: 'https://yapitahealth.com/static/images/testimonial4.webp',
    department: 'Transplant Surgery'
  },
  {
    id: '6',
    name: 'Lisa Ibrahim',
    country: 'Uganda',
    flag: '🇺🇬',
    treatment: 'Spine Surgery',
    rating: 5,
    testimonial: 'I am 55-year-old and I was dealing with lumbar spine problems for many years. They facilitated video telehealth with Dr. S.K. Rajan. Armed with the knowledge from the two endoscopic spine surgeons here Dr. Rajan suggested the exact same surgery. Within two weeks I was on a plane to India. I am now out 4.5 months from surgery. The level of pain I was in prior to surgery was easily 8 to 9. Currently my pain is zero!!! ',
    image: 'https://yapitahealth.com/static/images/Armia.webp',
    department: 'Spine Surgery'
  },
  {
    id: '7',
    name: 'Joy',
    country: 'United Kingdom',
    flag: '🇬🇧',
    treatment: 'Hematology Treatment',
    rating: 5,
    testimonial: 'I was struggling with a complex blood disorder that left me feeling exhausted and worried. I had seen multiple doctors, but none could pinpoint the issue. From my very first appointment at Apollo Hospital, I am managing my condition and living without constant anxiety.',
    image: 'https://yapitahealth.com/static/images/Joy.webp',
    department: 'hematology Treatment'
  },
  {
    id: '8',
    name: 'Grace Lewa',
    country: 'Ghana',
    flag: '🇬🇭',
    treatment: 'IVF',
    rating: 5,
    testimonial: 'My cancer treatment journey at Apollo was handled with such care and professionalism. The oncology team provided personalized treatment that helped me beat cancer. I am forever grateful to the entire team.',
    image: 'https://yapitahealth.com/static/images/Grace.webp',
    department: 'IVF'
  },
  {
    id: '9',
    name: 'Jennifer Martinez',
    country: 'United States',
    flag: '🇺🇸',
    treatment: 'Pediatric Surgery',
    rating: 5,
    testimonial: 'The pediatric team at Apollo Hospital saved my child\'s life. The surgery was performed with utmost precision and the post-operative care was exceptional. I highly recommend Apollo for anyone seeking world-class pediatric treatment.',
    image: 'https://yapitahealth.com/static/images/MatthewBoucher.png',
    department: 'Pediatric Surgery'
  }
];