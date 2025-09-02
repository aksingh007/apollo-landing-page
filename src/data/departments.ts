import { Heart, Brain, Bone, Activity, Spline as Spine, Baby, Users, Scissors, Droplets } from 'lucide-react';

export interface Department {
  id: string;
  name: string;
  title: string;
  icon: unknown;
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
    description: 'Best hospital for CABG in India with comprehensive heart care with cutting-edge technology, minimally invasive procedures, and personalized treatment plans for optimal cardiac health.',
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
      'Heart Bypass Surgery',
      'Double Valve Replacement',
      'Pacemaker Implantation',
      'Heart Transplant in India'
    ],
    whyChoose: [
      'Best CABG surgeons in India with 20+ years experience',
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
    description: 'The best neuro rehabilitation centre in India with comprehensive care for brain, spine, and nervous system disorders using advanced diagnostic tools and innovative treatment approaches.',
    features: [
      'Advanced Cyberknife treatment',
      'Minimally invasive neurosurgery',
      'Stroke care and rehabilitation',
      'Epilepsy management programs'
    ],
    stats: {
      successRate: '96%',
      patientsCount: '3500+'
    },
    treatments: [
      'Brain Tumor Treatment',
      'Stroke Treatment',
      'Epilepsy Surgery',
      'Deep Brain Stimulation',
      'Spinal Cord Surgery'
    ],
    whyChoose: [
      'Best neurosurgeon in India',
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
    heroTitle: 'Advanced Joint Replacement in India at Apollo Hospital',
    description: 'India\'s first robotic knee replacement surgery center offering comprehensive orthopedic care with cutting-edge technology and minimally invasive procedures.',
    features: [
      'Bilateral knee replacement',
      'Minimally invasive spine surgery',
      'ACL reconstruction surgery',
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
      'India\'s first robot-assisted joint replacement',
      'Internationaly-trained best doctor for knee replacement surgery',
      'Advanced rehabilitation facilities',
      'Minimally invasive surgical techniques'
    ]
  },
  {
    id: 'oncology',
    name: 'Oncology',
    title: 'Cancer Treatment',
    icon: Activity,
    heroTitle: 'Comprehensive Cancer Treatment in India at Apollo Hospital',
    description: 'No. 1 Cancer Treatment Hospital in India - our comprehensive cancer care program combines cutting-edge technology, personalized treatment plans, and compassionate care to provide the best possible outcomes for cancer patients.',
    features: [
      'Best doctor for cancer treatment in India',
      'Latest chemotherapy and radiation therapy for cancer treatment',
      'Minimally invasive surgical procedures',
      'Comprehensive support services'
    ],
    stats: {
      successRate: '95%',
      patientsCount: '1000+'
    },
    treatments: [
      'Chemotherapy for bladder cancer treatment',
      'Radiation Therapy',
      'Surgical Oncology for breast cancer treatment',
      'Immunotherapy for prostate cancer treatment',
      'Bone Marrow Transplant'
    ],
    whyChoose: [
      'Best hospital for cancer treatment with expert multidisciplinary team',
      'Latest cancer treatment technologies for ovarian cancer treatment',
      'Personalized treatment protocols',
      'Comprehensive patient support services'
    ]
  },
  {
    id: 'spine-surgery',
    name: 'Spine Surgery',
    title: 'Spine Surgery',
    icon: Spine,
    heroTitle: 'Advanced Spine Surgery in India at Apollo Hospital',
    description: 'No. 1 Spine surgery hospital in India offers  with comprehensive treatment for spinal disorders using minimally invasive techniques and advanced surgical procedures.',
    features: [
      'Minimally invasive spine surgery',
      'Best robotic spine surgery in India',
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
      'Minimally Invasive Spine Surgery in India'
    ],
    whyChoose: [
      'Best doctor for spine surgery',
      'Advanced surgical navigation systems',
      'Comprehensive rehabilitation programs',
      'Lazer spine surgery and other advanced techniques'
    ]
  },
   {
    id: 'pediatric-surgery',
    name: 'Pediatric Surgery',
    title: 'Pediatric Surgery',
    icon: Baby,
    heroTitle: 'Specialized Pediatric Surgery at Apollo Hospital',
    description: 'Best hospital for pediatric surgery in India with comprehensive surgical care for children with specialized equipment, child-friendly environment, and expert pediatric surgeons.',
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
    heroTitle: 'Advanced IVF Treatment in India at Apollo Hospital',
    description: 'Best fertility clinic in India with comprehensive IVF and reproductive health services with state-of-the-art technology and personalized treatment plans.',
    features: [
      'Best IVF treatment hospital in India',
      'Personalized fertility treatments',
      'Comprehensive fertility assessment',
      'Emotional support and counseling'
    ],
    stats: {
      successRate: '75%',
      patientsCount: '800+'
    },
    treatments: [
      'IVF Treatment in India',
      'Intrauterine Insemination (IUI)',
      'Egg Freezing',
      'Fertility Preservation',
      'Male Infertility Treatment'
    ],
    whyChoose: [
      'High success rates in IVF with best doctors in India',
      'Advanced embryology laboratory',
      'Personalized treatment protocols',
      'Comprehensive fertility services with best IVF treatment cost in India'
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
      'Liver Transplant in India',
      'Kidney Transplant Surgery Hospital',
      'Heart Transplant',
      'Bone Marrow Transplant',
      'Corneal Transplant'
    ],
    whyChoose: [
      'Best kidney transplant surgeons',
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
      'Best Bone marrow transplant doctor in India',
      'Comprehensive leukemia cancer treatment'
    ],
    stats: {
      successRate: '92%',
      patientsCount: '600+'
    },
    treatments: [
      'Leukemia Treatment',
      'Lymphoma Cancer Treatment in India',
      'Bone Marrow Transplant',
      'Blood Disorder Management',
      'Hemophilia Treatment'
    ],
    whyChoose: [
      'Best bone marrow transplant doctor in India',
      'Advanced blood testing facilities',
      'Specialized treatment protocols',
      'Comprehensive blood disorder care'
    ]
  }
];

export const getDepartmentBySlug = (slug: string): Department | undefined => {
  return departments.find(dept => dept.id === slug);
};