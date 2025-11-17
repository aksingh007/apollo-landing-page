function calculateExperience(startDate: Date) {
  const today = new Date();
  let years = today.getFullYear() - startDate.getFullYear();
  const monthDiff = today.getMonth() - startDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < startDate.getDate())
  ) {
    years--;
  }

  return years + "+";
}

export interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  achievements: string;
  rating: number;
  image: string;
}

export const cardiologyDoctors: Doctor[] = [
  {
    name: "Dr. K. K. Saxena",
    specialty: "Interventional Cardiologist",
    experience: "38+ Years Experience",
    achievements: "Cardiology Pioneer",
    rating: 4.9,
    image:
      "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/771b2b48-cd26-4d34-a2bb-39dbe74da050/61ec1f8d-fd7d-400a-8cbd-f7601bdb09a4.jpg",
  },
  {
    name: "Dr Bhaba Nanda Das",
    specialty: "Cardiac Surgeon",
    experience: "39+ Years Experience",
    achievements: "Heart Surgery Specialist",
    rating: 4.8,
    image:
      "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/ac15f17a-e77c-4962-906b-38f97d204240/consult-dr-bhaba-nanda-das-best-cardiothoracic-surgeon-apollo-hospital-delhi.jpg",
  },
  {
    name: "Dr. Anoop K.Ganjoo",
    specialty: "Cardiac Surgeon",
    experience: "29+ Years Experience",
    achievements: "Cardiothoracic Surgery Expert",
    rating: 4.7,
    image:
      "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/955006f2-c2ff-487c-a206-9e674a1b7f52/dr-anoop-k-ganjoo-cardiothoracic-and-vascular-surgery-in-delhi.jpg",
  },
  {
    name: "Dr N Sastri",
    specialty: "Cardiac Surgeon",
    experience: "47+ Years experience",
    achievements: "Cardiothoracic and Vascular Surgeon",
    rating: 4.9,
    image: "/dr-n-sastri_0.png",
  },
  {
    name: "Dr. Prof Sanjay Tyagi",
    specialty: "Cardiac Surgeon",
    experience: "40+ Years experience",
    achievements: "Angioplasty & Stenting, Pacemaker Implantation",
    rating: 4.9,
    image: "/dr-prof-sanjay-tyagi.png",
  },
  {
    name: "Dr Sunil Modi",
    specialty: "Cardiologist",
    experience: "38+ Years experience",
    achievements: "Cardiovascular Medicine",
    rating: 4.8,
    image: "/dr-sunil-modi.png",
  },
  {
    name: "Dr S K Gupta",
    specialty: "Cardiologist",
    experience: "38+ Years experience",
    achievements: "Cardiovascular Medicine",
    rating: 4.8,
    image: "/dr-s-k-gupta.png",
  },
  {
    name: "Dr Vipul Narain Roy",
    specialty: "Cardiac Surgeon",
    experience: "30+ Years experience",
    achievements: "Cardiothoracic Surgery Expert",
    rating: 4.7,
    image: "/dr-vipul-narain-roy-cardiology-in-delhi.png",
  },
];

export const hematologyDoctors: Doctor[] = [
  {
    name: "Dr. Rahul Bhargava",
    specialty: "Hematologist",
    experience:
      calculateExperience(new Date(1998, 0, 1)) + " Years Experience",
    achievements: "Bone Marrow Transplant Specialist",
    rating: 4.9,
    image:
      "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/b6724b48-db5c-4629-9f88-54ba3f34b9cb/file.png",
  },
  {
    name: "Dr. Suresh Kumar",
    specialty: "Hematologist",
    experience:
      calculateExperience(new Date(1995, 0, 1)) + " Years Experience",
    achievements: "Blood Disorder Expert",
    rating: 4.8,
    image:
      "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/f89b8982-02b8-43dd-958a-fa167b59d580/file.webp",
  },
  {
    name: "Dr. Anita Sharma",
    specialty: "Hematologist",
    experience:
      calculateExperience(new Date(2000, 0, 1)) + " Years Experience",
    achievements: "Leukemia Treatment Specialist",
    rating: 4.7,
    image:
      "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/82cd691c-d18e-484f-8a65-e190bcfcb500/file.jpeg",
  },
];

export const neurologyDoctors: Doctor[] = [
  {
    name: "Dr. P.N. Renjen",
    specialty: "Neurologist",
    experience:
      calculateExperience(new Date(1985, 0, 1)) + " Years Experience",
    achievements: "Neurology Pioneer",
    rating: 4.9,
    image:
      "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/1d6524bf-7f7f-4450-8600-d531f39d9073/file.webp",
  },
  {
    name: "Dr. Rajendra Prasad",
    specialty: "Neurosurgeon",
    experience:
      calculateExperience(new Date(1988, 0, 2)) + " Years Experience",
    achievements: "Brain Tumor Specialist",
    rating: 4.8,
    image:
      "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/22a5e7c2-678b-4c33-92aa-998b3d62ba22/file.webp",
  },
  {
    name: "Dr. Ravi Bhatia",
    specialty: "Neurosurgeon",
    experience:
      calculateExperience(new Date(1975, 0, 2)) + " Years Experience",
    achievements: "Stroke Treatment Expert",
    rating: 4.9,
    image:
      "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/4138bdf7-ec3d-4c6a-b762-dde74bbc3752/file.webp",
  },
];

export const oncologyDoctors: Doctor[] = [
  {
    name: "Dr. Vinod Raina",
    specialty: "Medical Oncologist",
    experience:
      calculateExperience(new Date(1988, 0, 1)) + " Years Experience",
    achievements: "Cancer Treatment Pioneer",
    rating: 4.9,
    image:
      "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/a92b1821-60dc-4f50-a4e7-f7d880dfecdf/file.webp",
  },
  {
    name: "Dr. Harit Chaturvedi",
    specialty: "Surgical Oncologist",
    experience:
      calculateExperience(new Date(1990, 0, 1)) + " Years Experience",
    achievements: "Surgical Oncology Expert",
    rating: 4.8,
    image:
      "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/f89b8982-02b8-43dd-958a-fa167b59d580/file.webp",
  },
  {
    name: "Dr. Sameer Kaul",
    specialty: "Surgical Oncologist",
    experience:
      calculateExperience(new Date(1995, 0, 1)) + " Years Experience",
    achievements: "Minimally Invasive Cancer Surgery",
    rating: 4.7,
    image:
      "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/82cd691c-d18e-484f-8a65-e190bcfcb500/file.jpeg",
  },
];

export const defaultDoctors: Doctor[] = [
  {
    name: "Dr. K. K. Saxena",
    specialty: "Interventional Cardiologist",
    experience:
      calculateExperience(new Date(1987, 7, 17)) + " Years Experience",
    achievements: "Cardiology Pioneer",
    rating: 4.9,
    image:
      "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/771b2b48-cd26-4d34-a2bb-39dbe74da050/61ec1f8d-fd7d-400a-8cbd-f7601bdb09a4.jpg",
  },
  {
    name: "Dr Bhaba Nanda Das",
    specialty: "Cardiac Surgeon",
    experience:
      calculateExperience(new Date(1986, 7, 14)) + " Years Experience",
    achievements: "Heart Surgery Specialist",
    rating: 4.8,
    image:
      "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/ac15f17a-e77c-4962-906b-38f97d204240/consult-dr-bhaba-nanda-das-best-cardiothoracic-surgeon-apollo-hospital-delhi.jpg",
  },
  {
    name: "Dr. Anoop K.Ganjoo",
    specialty: "Cardiac Surgeon",
    experience:
      calculateExperience(new Date(1996, 4, 6)) + " Years Experience",
    achievements: "Cardiothoracic Surgery Expert",
    rating: 4.7,
    image:
      "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/955006f2-c2ff-487c-a206-9e674a1b7f52/dr-anoop-k-ganjoo-cardiothoracic-and-vascular-surgery-in-delhi.jpg",
  },
  {
    name: "Dr. Sandeep Guleria",
    specialty: "Transplant Surgery",
    experience:
      calculateExperience(new Date(1990, 7, 14)) + " Years Experience",
    achievements: "Transplant Surgery Specialist",
    rating: 4.9,
    image:
      "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/b6724b48-db5c-4629-9f88-54ba3f34b9cb/file.png",
  },
  {
    name: "Dr. Rajagopalan Krishnan",
    specialty: "Spine Surgery",
    experience:
      calculateExperience(new Date(2000, 0, 2)) + " Years Experience",
    achievements: "Spine Surgery Expert",
    rating: 4.8,
    image:
      "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/1d6524bf-7f7f-4450-8600-d531f39d9073/file.webp",
  },
  {
    name: "Dr. Rajendra Prasad",
    specialty: "Spine Surgery",
    experience:
      calculateExperience(new Date(1988, 0, 2)) + " Years Experience",
    achievements: "Spinal Disorder Specialist",
    rating: 4.7,
    image:
      "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/22a5e7c2-678b-4c33-92aa-998b3d62ba22/file.webp",
  },
  {
    name: "Dr. Ravi Bhatia",
    specialty: "Spine Surgery",
    experience:
      calculateExperience(new Date(1975, 0, 2)) + " Years Experience",
    achievements: "Spinal Reconstruction Expert",
    rating: 4.9,
    image:
      "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/4138bdf7-ec3d-4c6a-b762-dde74bbc3752/file.webp",
  },
  {
    name: "Dr. Chander Shekar",
    specialty: "Orthopedics Surgery",
    experience:
      calculateExperience(new Date(1998, 11, 13)) + " Years Experience",
    achievements: "Joint Replacement Specialist",
    rating: 4.8,
    image:
      "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/f89b8982-02b8-43dd-958a-fa167b59d580/file.webp",
  },
  {
    name: "Dr Harsh Rastogi",
    specialty: "Radiology Department",
    experience:
      calculateExperience(new Date(1994, 11, 29)) + " Years Experience",
    achievements: "Diagnostic Imaging Expert",
    rating: 4.7,
    image:
      "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/82cd691c-d18e-484f-8a65-e190bcfcb500/file.jpeg",
  },
  {
    name: "Dr. Anshuman Agarwal",
    specialty: "Urology",
    experience:
      calculateExperience(new Date(2002, 0, 15)) + " Years Experience",
    achievements: "Urological Surgery Specialist",
    rating: 4.9,
    image:
      "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/a92b1821-60dc-4f50-a4e7-f7d880dfecdf/file.webp",
  },
];

export const getDoctorsByDepartment = (department?: string): Doctor[] => {
  switch (department) {
    case "cardiology":
      return cardiologyDoctors;
    case "hematology":
      return hematologyDoctors;
    case "neurology":
      return neurologyDoctors;
    case "oncology":
      return oncologyDoctors;
    default:
      return defaultDoctors;
  }
};
