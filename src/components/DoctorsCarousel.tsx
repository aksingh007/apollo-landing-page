import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { getDoctorsByDepartment } from "../data/doctors";

interface DoctorsCarouselProps {
  department?: string;
}

const DoctorsCarousel = React.memo(({ department }: DoctorsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const doctors = getDoctorsByDepartment(department);

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
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
          }}
        >
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className={`${isMobile ? "w-full" : "w-1/3"} flex-shrink-0 px-4`}
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

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-fortis-600 font-semibold mb-2">
                    {doctor.specialty}
                  </p>
                  <p className="text-gray-600 mb-2 text-sm">
                    {doctor.experience}
                  </p>
                  <p className="text-secondary-600 text-sm font-medium">
                    {doctor.achievements}
                  </p>

                  <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(doctor.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      // Get the openFormPopup function from parent component
                      const event = new CustomEvent("openDoctorConsultation", {
                        detail: {
                          title: `Consult ${doctor.name}`,
                          subtitle: `Book consultation with ${doctor.specialty} specialist`,
                        },
                      });
                      window.dispatchEvent(event);
                    }}
                    className="w-full mt-4 bg-fortis-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-fortis-700 transition-all duration-300 text-sm"
                  >
                    Book Now
                  </button>
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
        {Array.from({
          length: isMobile ? doctors.length : doctors.length - 2,
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-fortis-600"
                : "bg-gray-300 hover:bg-fortis-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
});

export default DoctorsCarousel;
