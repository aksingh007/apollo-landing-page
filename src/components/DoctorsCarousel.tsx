import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const DoctorsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is a common breakpoint for mobile
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper function to calculate years of experience
function calculateExperience(startDate) {
  const today = new Date();
  let years = today.getFullYear() - startDate.getFullYear();
  const monthDiff = today.getMonth() - startDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < startDate.getDate())) {
    years--;
  }
  
  return years + "+";
}

const doctors = [
    {
      name: "Dr. K. K. Saxena",
      specialty: "Interventional Cardiologist",
      experience: calculateExperience(new Date(1987, 7, 17)) + " Years Experience",
      achievements: "Cardiology Pioneer",
      rating: 4.9,
      image: "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/771b2b48-cd26-4d34-a2bb-39dbe74da050/61ec1f8d-fd7d-400a-8cbd-f7601bdb09a4.jpg"
    },
    {
      name: "Dr Bhaba Nanda Das",
      specialty: "Cardiac Surgeon",
      experience: calculateExperience(new Date(1986, 7, 14)) + " Years Experience",
      achievements: "Heart Surgery Specialist",
      rating: 4.8,
      image: "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/ac15f17a-e77c-4962-906b-38f97d204240/consult-dr-bhaba-nanda-das-best-cardiothoracic-surgeon-apollo-hospital-delhi.jpg"
    },
    {
      name: "Dr. Anoop K.Ganjoo",
      specialty: "Cardiac Surgeon",
      experience: calculateExperience(new Date(1996, 4, 6)) + " Years Experience",
      achievements: "Cardiothoracic Surgery Expert",
      rating: 4.7,
      image: "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/955006f2-c2ff-487c-a206-9e674a1b7f52/dr-anoop-k-ganjoo-cardiothoracic-and-vascular-surgery-in-delhi.jpg"
    },
    {
      name: "Dr. Sandeep Guleria",
      specialty: "Transplant Surgery",
      experience: calculateExperience(new Date(1990, 7, 14)) + " Years Experience",
      achievements: "Transplant Surgery Specialist",
      rating: 4.9,
      image: "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/b6724b48-db5c-4629-9f88-54ba3f34b9cb/file.png"
    },
    {
      name: "Dr. Rajagopalan Krishnan",
      specialty: "Spine Surgery",
      experience: calculateExperience(new Date(2000, 0, 2)) + " Years Experience",
      achievements: "Spine Surgery Expert",
      rating: 4.8,
      image: "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/1d6524bf-7f7f-4450-8600-d531f39d9073/file.webp"
    },
    {
      name: "Dr. Rajendra Prasad",
      specialty: "Spine Surgery",
      experience: calculateExperience(new Date(1988, 0, 2)) + " Years Experience",
      achievements: "Spinal Disorder Specialist",
      rating: 4.7,
      image: "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/22a5e7c2-678b-4c33-92aa-998b3d62ba22/file.webp"
    },
    {
      name: "Dr. Ravi Bhatia",
      specialty: "Spine Surgery",
      experience: calculateExperience(new Date(1975, 0, 2)) + " Years Experience",
      achievements: "Spinal Reconstruction Expert",
      rating: 4.9,
      image: "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/4138bdf7-ec3d-4c6a-b762-dde74bbc3752/file.webp"
    },
    {
      name: "Dr. Chander Shekar",
      specialty: "Orthopedics Surgery",
      experience: calculateExperience(new Date(1998, 11, 13)) + " Years Experience",
      achievements: "Joint Replacement Specialist",
      rating: 4.8,
      image: "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/f89b8982-02b8-43dd-958a-fa167b59d580/file.webp"
    },
    {
      name: "Dr Harsh Rastogi",
      specialty: "Radiology Department",
      experience: calculateExperience(new Date(1994, 11, 29)) + " Years Experience",
      achievements: "Diagnostic Imaging Expert",
      rating: 4.7,
      image: "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/82cd691c-d18e-484f-8a65-e190bcfcb500/file.jpeg"
    },
    {
      name: "Dr. Anshuman Agarwal",
      specialty: "Urology",
      experience: calculateExperience(new Date(2002, 0, 15)) + " Years Experience",
      achievements: "Urological Surgery Specialist",
      rating: 4.9,
      image: "https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/doctor/image/a92b1821-60dc-4f50-a4e7-f7d880dfecdf/file.webp"
    }
  ];
  
  const nextSlide = () => {
    if (isMobile) {
      setCurrentIndex((prevIndex) => 
        prevIndex === doctors.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentIndex((prevIndex) => 
        prevIndex === doctors.length - 3 ? 0 : prevIndex + 1
      );
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? doctors.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? doctors.length - 3 : prevIndex - 1
      );
    }
  };

  const slidesToShow = isMobile ? 1 : 3;

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` 
          }}
        >
          {doctors.map((doctor, index) => (
            <div 
              key={index} 
              className={`${isMobile ? 'w-full' : 'w-1/3'} flex-shrink-0 px-4`}
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                <div className="text-center">
                  <div className="relative mb-6">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-fortis-100"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-fortis-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {doctor.rating} ⭐
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-fortis-600 font-semibold mb-2">{doctor.specialty}</p>
                  <p className="text-gray-600 mb-2 text-sm">{doctor.experience}</p>
                  <p className="text-secondary-600 text-sm font-medium">{doctor.achievements}</p>
                  
                  <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(doctor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-fortis-50"
      >
        <ChevronLeft className="w-6 h-6 text-fortis-600" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:bg-fortis-50"
      >
        <ChevronRight className="w-6 h-6 text-fortis-600" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: isMobile ? doctors.length : doctors.length - 2 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-fortis-600' : 'bg-gray-300 hover:bg-fortis-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorsCarousel;