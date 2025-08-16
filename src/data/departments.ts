import { Heart, Brain, Bone, Activity, Spline as Spine, Baby, Users, Scissors, Droplets } from 'lucide-react';

export interface Department {
  id: string;
  name: string;
  title: string;
  icon: any;
  heroTitle: string;
  description: string;
  features: string[];
  stats: {
    successRate: string;
    patientsCount: string;
  };
  treatments: string[];
  whyChoose: string[];
}

export const departments: Department[] = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    title: 'Cardiology Treatment',
    icon: Heart,
    heroTitle: 'Advanced Cardiology Treatment at Apollo Hospital',
    description: 'Our world-class cardiology department offers comprehensive heart care with cutting-edge technology, minimally invasive procedures, and personalized treatment plans for optimal cardiac health.',
    features: [
      'Advanced cardiac catheterization',
      'Minimally invasive heart surgery',
      'Electrophysiology procedures',
      '24/7 cardiac emergency care'
    ],
    stats: {
      successRate: '98%',
      patientsCount: '5000+'
    },
    treatments: [
      'Coronary Angioplasty',
      'Bypass Surgery',
      'Valve Replacement',
      'Pacemaker Implantation',
      'Heart Transplant'
    ],
    whyChoose: [
      'Leading cardiac surgeons with 20+ years experience',
      'State-of-the-art cardiac catheterization labs',
      'Comprehensive cardiac rehabilitation programs',
      'International quality standards and protocols'
    ]
  },
  {
    id: 'neurology',
    name: 'Neurology',
    title: 'Neurology Treatment',
    icon: Brain,
    heroTitle: 'Expert Neurology Treatment at Apollo Hospital',
    description: 'Our neurology department provides comprehensive care for brain, spine, and nervous system disorders using advanced diagnostic tools and innovative treatment approaches.',
    features: [
      'Advanced neuroimaging and diagnostics',
      'Minimally invasive neurosurgery',
      'Stroke care and rehabilitation',
      'Epilepsy management programs'
    ],
    stats: {
      successRate: '96%',
      patientsCount: '3500+'
    },
    treatments: [
      'Brain Tumor Surgery',
      'Stroke Treatment',
      'Epilepsy Surgery',
      'Deep Brain Stimulation',
      'Spinal Cord Surgery'
    ],
    whyChoose: [
      'Renowned neurologists and neurosurgeons',
      'Advanced neuro-navigation systems',
      'Comprehensive stroke unit',
      'Multidisciplinary approach to neurological care'
    ]
  },
  {
    id: 'orthopedic-treatment',
    name: 'Orthopedic',
    title: 'Orthopedic Treatment',
    icon: Bone,
    heroTitle: 'Advanced Orthopedic Treatment at Apollo Hospital',
    description: 'Comprehensive orthopedic care with cutting-edge technology, minimally invasive procedures, and world-class joint replacement surgery.',
    features: [
      'Advanced joint replacement surgery',
      'Minimally invasive spine surgery',
      'Sports medicine and rehabilitation',
      'Advanced trauma care'
    ],
    stats: {
      successRate: '99%',
      patientsCount: '8000+'
    },
    treatments: [
      'Joint Replacement Surgery',
      'Arthroscopic Surgery',
      'Spine Surgery',
      'Sports Injury Treatment',
      'Fracture Management'
    ],
    whyChoose: [
      'Advanced joint replacement techniques',
      'Internationally trained orthopedic surgeons',
      'Advanced rehabilitation facilities',
      'Minimally invasive surgical techniques'
    ]
  },
  {
    id: 'oncology',
    name: 'Oncology',
    title: 'Cancer Treatment',
    icon: Activity,
    heroTitle: 'Comprehensive Cancer Treatment at Apollo Hospital',
    description: 'Our comprehensive cancer care program combines cutting-edge technology, personalized treatment plans, and compassionate care to provide the best possible outcomes for cancer patients.',
    features: [
      'Multidisciplinary team approach',
      'Latest chemotherapy and radiation therapy',
      'Minimally invasive surgical procedures',
      'Comprehensive support services'
    ],
    stats: {
      successRate: '95%',
      patientsCount: '1000+'
    },
    treatments: [
      'Chemotherapy',
      'Radiation Therapy',
      'Surgical Oncology',
      'Immunotherapy',
      'Bone Marrow Transplant'
    ],
    whyChoose: [
      'Multidisciplinary cancer care team',
      'Latest cancer treatment technologies',
      'Personalized treatment protocols',
      'Comprehensive patient support services'
    ]
  },
  {
    id: 'spine-surgery',
    name: 'Spine Surgery',
    title: 'Spine Surgery',
    icon: Spine,
    heroTitle: 'Advanced Spine Surgery at Apollo Hospital',
    description: 'Our spine surgery department offers comprehensive treatment for spinal disorders using minimally invasive techniques and advanced surgical procedures.',
    features: [
      'Minimally invasive spine surgery',
      'Computer-assisted navigation',
      'Comprehensive spine rehabilitation',
      'Pain management programs'
    ],
    stats: {
      successRate: '97%',
      patientsCount: '2500+'
    },
    treatments: [
      'Spinal Fusion Surgery',
      'Disc Replacement',
      'Scoliosis Correction',
      'Spinal Tumor Surgery',
      'Minimally Invasive Procedures'
    ],
    whyChoose: [
      'Expert spine surgeons',
      'Advanced surgical navigation systems',
      'Minimally invasive techniques',
      'Comprehensive rehabilitation programs'
    ]
  },
  {
    id: 'pediatric-surgery',
    name: 'Pediatric Surgery',
    title: 'Pediatric Surgery',
    icon: Baby,
    heroTitle: 'Specialized Pediatric Surgery at Apollo Hospital',
    description: 'Our pediatric surgery department provides comprehensive surgical care for children with specialized equipment, child-friendly environment, and expert pediatric surgeons.',
    features: [
      'Child-friendly surgical environment',
      'Specialized pediatric equipment',
      'Family-centered care approach',
      'Comprehensive pediatric support'
    ],
    stats: {
      successRate: '98%',
      patientsCount: '1500+'
    },
    treatments: [
      'Congenital Surgery',
      'Pediatric Trauma Care',
      'Minimally Invasive Procedures',
      'Neonatal Surgery',
      'Pediatric Oncology Surgery'
    ],
    whyChoose: [
      'Specialized pediatric surgeons',
      'Child-friendly hospital environment',
      'Advanced pediatric equipment',
      'Family-centered care approach'
    ]
  },
  {
    id: 'ivf',
    name: 'IVF',
    title: 'IVF Treatment',
    icon: Users,
    heroTitle: 'Advanced IVF Treatment at Apollo Hospital',
    description: 'Our fertility center offers comprehensive IVF and reproductive health services with state-of-the-art technology and personalized treatment plans.',
    features: [
      'Advanced IVF laboratory',
      'Personalized fertility treatments',
      'Comprehensive fertility assessment',
      'Emotional support and counseling'
    ],
    stats: {
      successRate: '65%',
      patientsCount: '800+'
    },
    treatments: [
      'In Vitro Fertilization (IVF)',
      'Intrauterine Insemination (IUI)',
      'Egg Freezing',
      'Fertility Preservation',
      'Male Infertility Treatment'
    ],
    whyChoose: [
      'High success rates in IVF',
      'Advanced embryology laboratory',
      'Personalized treatment protocols',
      'Comprehensive fertility services'
    ]
  },
  {
    id: 'transplant-surgery',
    name: 'Transplant Surgery',
    title: 'Transplant Surgery',
    icon: Scissors,
    heroTitle: 'Life-Saving Transplant Surgery at Apollo Hospital',
    description: 'Our transplant surgery department offers comprehensive organ transplant services with experienced surgeons and advanced post-transplant care.',
    features: [
      'Multi-organ transplant capability',
      'Advanced transplant ICU',
      'Comprehensive donor programs',
      'Long-term follow-up care'
    ],
    stats: {
      successRate: '94%',
      patientsCount: '500+'
    },
    treatments: [
      'Liver Transplant',
      'Kidney Transplant',
      'Heart Transplant',
      'Bone Marrow Transplant',
      'Corneal Transplant'
    ],
    whyChoose: [
      'Experienced transplant surgeons',
      'Comprehensive transplant programs',
      'Advanced post-transplant care',
      'High success rates in transplantation'
    ]
  },
  {
    id: 'hematology',
    name: 'Hematology',
    title: 'Hematology Treatment',
    icon: Droplets,
    heroTitle: 'Expert Hematology Treatment at Apollo Hospital',
    description: 'Our hematology department provides comprehensive care for blood disorders with advanced diagnostic capabilities and specialized treatment protocols.',
    features: [
      'Advanced blood disorder diagnostics',
      'Specialized hematology treatments',
      'Bone marrow transplant facility',
      'Comprehensive blood cancer care'
    ],
    stats: {
      successRate: '92%',
      patientsCount: '600+'
    },
    treatments: [
      'Leukemia Treatment',
      'Lymphoma Treatment',
      'Bone Marrow Transplant',
      'Blood Disorder Management',
      'Hemophilia Treatment'
    ],
    whyChoose: [
      'Expert hematologists',
      'Advanced blood testing facilities',
      'Specialized treatment protocols',
      'Comprehensive blood disorder care'
    ]
  }
];

export const getDepartmentBySlug = (slug: string): Department | undefined => {
  return departments.find(dept => dept.id === slug);
};