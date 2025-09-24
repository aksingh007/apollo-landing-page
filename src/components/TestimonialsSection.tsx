import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";

const TestimonialsSection = React.memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our International Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from patients around the world who chose Apollo Hospital for
            their medical treatment
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-fortis-100 to-secondary-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

            {/* Quote Icon */}
            <div className="absolute top-8 left-8">
              <Quote className="w-12 h-12 text-fortis-200" />
            </div>

            <div className="relative z-10">
              {/* Patient Info */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                <div className="relative">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-fortis-200"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-lg">
                    <span className="text-2xl">{currentTestimonial.flag}</span>
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-fortis-600 font-semibold mb-1">
                    {currentTestimonial.country}
                  </p>
                  <p className="text-gray-600 mb-3">
                    {currentTestimonial.treatment}
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < currentTestimonial.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-6">
                "{currentTestimonial.testimonial}"
              </blockquote>

              {/* Department Badge */}
              <div className="inline-flex items-center bg-fortis-100 text-fortis-700 px-4 py-2 rounded-full text-sm font-semibold">
                {currentTestimonial.department} Department
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:bg-fortis-50"
          >
            <ChevronLeft className="w-6 h-6 text-fortis-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:bg-fortis-50"
          >
            <ChevronRight className="w-6 h-6 text-fortis-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-fortis-600 w-8"
                    : "bg-gray-300 hover:bg-fortis-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-fortis-600 mb-2">50+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-fortis-600 mb-2">
              10,000+
            </div>
            <div className="text-gray-600">International Patients</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-fortis-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default TestimonialsSection;
