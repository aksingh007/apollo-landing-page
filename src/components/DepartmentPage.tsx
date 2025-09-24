import React from "react";
import { useParams } from "react-router-dom";
import {
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Shield,
  Stethoscope,
} from "lucide-react";

import Navbar from "./Navbar";

import FloatingButtons from "./FloatingButtons";

import { departmentFAQs } from "../data/FAQ";
import { getDepartmentBySlug } from "../data/departments";

// Lazy load heavy components
const FormSection = React.lazy(() => import("./FormSection"));
const DoctorsCarousel = React.lazy(() => import("./DoctorsCarousel"));
const TestimonialsSection = React.lazy(() => import("./TestimonialsSection"));
const FAQSection = React.lazy(() => import("./FAQSection"));

// Loading component for lazy loaded sections
const SectionLoader = () => (
  <div className="flex justify-center items-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-fortis-600"></div>
  </div>
);

const DepartmentPage = () => {
  const { department } = useParams<{ department: string }>();
  const departmentData = getDepartmentBySlug(department || "");

  if (!departmentData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Department Not Found
          </h1>
          <p className="text-xl text-gray-600">
            The requested department page could not be found.
          </p>
        </div>
      </div>
    );
  }

  const Icon = departmentData.icon;

  const amenities = [
    {
      icon: Stethoscope,
      title: "Expert Specialists",
      description: "Board-certified specialists with international training",
    },
    {
      icon: Award,
      title: "Advanced Technology",
      description: "State-of-the-art medical equipment and facilities",
    },
    {
      icon: Shield,
      title: "Quality Care",
      description: "JCI & NABH accredited quality standards",
    },
    {
      icon: CheckCircle,
      title: "Personalized Treatment",
      description: "Customized treatment plans for each patient",
    },
  ];

  const processSteps = [
    {
      icon: CheckCircle,
      title: "Book Appointment",
      description: "Schedule your consultation with our medical experts",
      color: "from-fortis-500 to-fortis-600",
    },
    {
      icon: Star,
      title: "Get Quote for Treatment",
      description: "Receive detailed treatment plan and cost estimate",
      color: "from-secondary-500 to-secondary-600",
    },
    {
      icon: ArrowRight,
      title: "Visa/Travel Process",
      description: "We assist with visa applications and travel arrangements",
      color: "from-accent-500 to-accent-600",
    },
    {
      icon: Award,
      title: "Treatment at Hospital",
      description: "Receive world-class treatment at our facility",
      color: "from-fortis-600 to-secondary-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <FloatingButtons />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-fortis-900 via-fortis-800 to-secondary-700 text-white overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-fortis-600 bg-opacity-30 rounded-full px-4 py-2 mb-6">
                <Icon className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">
                  {departmentData.name} Treatment in India
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                {departmentData.heroTitle}
              </h1>

              <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                {departmentData.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white bg-opacity-10 rounded-lg px-4 py-2">
                  <Award className="w-5 h-5 mr-2 text-secondary-300" />
                  <span className="text-sm">Ranked #1 in Delhi, India</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-10 rounded-lg px-4 py-2">
                  <Shield className="w-5 h-5 mr-2 text-secondary-300" />
                  <span className="text-sm">JCI & NABH Accredited</span>
                </div>
              </div>
            </div>

            <div>
              <React.Suspense fallback={<SectionLoader />}>
                <FormSection
                  id="contact-form"
                  title={`Book Your ${departmentData.name} Consultation`}
                  subtitle="Get personalized treatment plan from our experts"
                  className="bg-white text-gray-900"
                />
              </React.Suspense>
            </div>
          </div>
        </div>
      </div>

      {/* Hospital Infrastructure Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                State-of-the-Art Hospital in India
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our world-class facility combines cutting-edge medical
                technology with patient-centered design to provide the best
                possible healthcare experience.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-fortis-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <amenity.icon className="w-5 h-5 text-fortis-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {amenity.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {amenity.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/facility_photo/photo/3677ebcc-f7d7-4c29-9220-00948c5875af/file.webp"
                  alt="Apollo Hospital Infrastructure"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-fortis-600">500+</div>
                  <div className="text-sm text-gray-600">Beds Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Specific Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-900 to-fortis-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                {departmentData.heroTitle}
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                {departmentData.description}
              </p>

              <div className="space-y-4">
                {departmentData.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-secondary-300 mr-3" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="text-center mb-6">
                <Icon className="w-16 h-16 mx-auto text-secondary-300 mb-4" />
                <h3 className="text-2xl font-bold mb-2">
                  {departmentData.name} Excellence
                </h3>
                <p className="text-gray-200">
                  Comprehensive treatment programs tailored to each patient's
                  needs
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg">
                  <div className="text-2xl font-bold text-secondary-300">
                    {departmentData.stats.successRate}
                  </div>
                  <div className="text-sm text-gray-200">Success Rate</div>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg">
                  <div className="text-2xl font-bold text-secondary-300">
                    {departmentData.stats.patientsCount}
                  </div>
                  <div className="text-sm text-gray-200">Patients Treated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our {departmentData.name} Treatments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of treatments and procedures available
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departmentData.treatments.map((treatment, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105"
              >
                <div className="w-12 h-12 bg-fortis-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary-600 transition-colors">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {treatment}
                </h3>
                <p className="text-gray-600">
                  Advanced {treatment.toLowerCase()} with international quality
                  standards
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our {departmentData.name} Department?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Excellence in {departmentData.name.toLowerCase()} care with
              international standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {departmentData.whyChoose.map((reason, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="w-8 h-8 bg-fortis-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {departmentData.name} Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities designed for optimal patient care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-fortis-50 to-secondary-50 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-fortis-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Doctors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Top Doctors at Apollo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our renowned {departmentData.name.toLowerCase()} specialists
              with decades of experience
            </p>
          </div>

          <React.Suspense fallback={<SectionLoader />}>
            <DoctorsCarousel />
          </React.Suspense>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 4-step process to get world-class{" "}
              {departmentData.name.toLowerCase()} treatment
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-fortis-200 via-secondary-200 to-accent-200 transform -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:scale-105 relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>

                    <div className="absolute -top-1 -left-1 w-12 h-12 bg-gradient-to-br from-fortis-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>

                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-fortis-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-fortis-200 transition-colors duration-300"></div>
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-fortis-200">
                        <ArrowRight className="w-4 h-4 text-fortis-600" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <React.Suspense fallback={<SectionLoader />}>
        <TestimonialsSection />
      </React.Suspense>

      {/* Special Offer Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <Star className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="font-semibold">Limited Time Offer</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Save 20% on {departmentData.name} Treatments
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Take advantage of our special offer for international patients
              seeking {departmentData.name.toLowerCase()} treatment. Book your
              consultation today and save on world-class medical care.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <FormSection
              title="Claim Your 20% Discount"
              subtitle={`Limited time offer for ${departmentData.name.toLowerCase()} patients`}
              className="bg-white text-gray-900"
            />
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <React.Suspense fallback={<SectionLoader />}>
        <FAQSection
          title={`${departmentData.name} FAQs`}
          subtitle={`Common questions about ${departmentData.name.toLowerCase()} treatment at Apollo Hospital`}
          faqs={departmentFAQs[departmentData.id] || []}
        />
      </React.Suspense>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Apollo Hospital</h3>
              <p className="text-gray-400 mb-4">
                World-class {departmentData.name.toLowerCase()} care with
                international standards, advanced technology, and compassionate
                treatment.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                Contact Information
              </h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-gray-300">Delhi, India</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-300">+91 9599 8181 71</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-300">
                    info@apollohospitals.com
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Accreditations</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-3 text-secondary-400" />
                  <span className="text-gray-300">JCI Accredited</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-3 text-secondary-400" />
                  <span className="text-gray-300">NABH Accredited</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Apollo Hospital. All rights reserved. | Providing
              world-class {departmentData.name.toLowerCase()} care to
              international patients.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DepartmentPage;
