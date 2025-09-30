import React from "react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";

interface TestimonialBannerProps {
  department?: string;
}

const TestimonialBanner: React.FC<TestimonialBannerProps> = ({
  department,
}) => {
  // Find a testimonial that matches the department, or use the first one as fallback
  const relevantTestimonial = department
    ? testimonials.find((t) =>
        t.department.toLowerCase().includes(department.toLowerCase())
      ) || testimonials[0]
    : testimonials[0];

  return (
    <section className="py-16 bg-gradient-to-r from-fortis-50 via-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center relative">
              {/* Background Pattern */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-fortis-100 to-secondary-100 rounded-full -translate-y-12 -translate-x-12 opacity-30"></div>

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
                <Quote className="w-8 h-8 lg:w-12 lg:h-12 text-fortis-200" />
              </div>

              <div className="relative z-10">
                {/* Department Badge */}
                <div className="inline-flex items-center bg-fortis-100 text-fortis-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  {relevantTestimonial.department} Success Story
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "{relevantTestimonial.testimonial}"
                </blockquote>

                {/* Patient Info */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-fortis-100 flex items-center justify-center">
                      <span className="text-xl">
                        {relevantTestimonial.flag}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {relevantTestimonial.name}
                    </h3>
                    <p className="text-fortis-600 font-medium text-sm">
                      {relevantTestimonial.country} •{" "}
                      {relevantTestimonial.treatment}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mt-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < relevantTestimonial.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600 font-medium">
                    {relevantTestimonial.rating}/5 Rating
                  </span>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative lg:min-h-[400px] min-h-[300px]">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-fortis-500 to-secondary-600 opacity-10"></div>

              {/* Patient Image */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative">
                  <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                    <img
                      src={relevantTestimonial.image}
                      alt={relevantTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Success Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm font-semibold">Success</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-white bg-opacity-20 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-white bg-opacity-15 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialBanner;
