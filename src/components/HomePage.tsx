import React from "react";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Heart,
  Brain,
  Bone,
  Eye,
  Activity,
  Users,
  Award,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Calendar,
  CreditCard,
  Plane,
  Building2,
  Stethoscope,
  Bed,
  Wifi,
  Car,
  Coffee,
  Clock,
  UserCheck,
  ChevronDown,
} from "lucide-react";

import Navbar from "./Navbar";
import FormSection from "./FormSection";
import DoctorsCarousel from "./DoctorsCarousel";
import FloatingButtons from "./FloatingButtons";
import TestimonialsSection from "./TestimonialsSection";
import TestimonialBanner from "./TestimonialBanner";
import FormPopup from "./FormPopup";
import FAQSection from "./FAQSection";
import { generalFAQs } from "../data/FAQ";

function HomePage() {
  const [showFormPopup, setShowFormPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupSubtitle, setPopupSubtitle] = useState("");
  const [expandedTreatment, setExpandedTreatment] = useState<number | null>(
    null
  );

  React.useEffect(() => {
    const handleDoctorConsultation = (event: any) => {
      setPopupTitle(event.detail.title);
      setPopupSubtitle(event.detail.subtitle);
      setShowFormPopup(true);
    };

    window.addEventListener("openDoctorConsultation", handleDoctorConsultation);
    return () => {
      window.removeEventListener(
        "openDoctorConsultation",
        handleDoctorConsultation
      );
    };
  }, []);

  React.useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    scrollToSection();
    window.addEventListener('hashchange', scrollToSection);

    return () => {
      window.removeEventListener('hashchange', scrollToSection);
    };
  }, []);

  const specialties = [
    {
      icon: Heart,
      name: "Cardiology",
      description: "World-class heart care with advanced procedures",
      subheading:
        "Our cardiology department offers comprehensive heart care with cutting-edge technology, minimally invasive procedures, and personalized treatment plans. We specialize in coronary interventions, cardiac surgery, and advanced diagnostic procedures with a 98% success rate.",
    },
    {
      icon: Brain,
      name: "Neurology",
      description: "Comprehensive brain and spine treatments",
      subheading:
        "Advanced neurological care using state-of-the-art imaging, minimally invasive neurosurgery, and comprehensive rehabilitation programs. Our expert team treats brain tumors, stroke, epilepsy, and complex neurological disorders with precision and compassion.",
    },
    {
      icon: Bone,
      name: "Orthopedics",
      description: "Robot-assisted joint replacement surgery",
      subheading:
        "India's first robot-assisted joint replacement center offering comprehensive orthopedic care. We specialize in knee and hip replacements, arthroscopic surgery, spine treatments, and sports medicine with advanced rehabilitation facilities.",
    },
    {
      icon: Eye,
      name: "Ophthalmology",
      description: "Advanced eye care and vision correction",
      subheading:
        "Comprehensive eye care services including cataract surgery, retinal treatments, LASIK, and complex ophthalmological procedures. Our advanced surgical suites and experienced surgeons ensure optimal vision outcomes for all patients.",
    },
    {
      icon: Activity,
      name: "Oncology",
      description: "Comprehensive cancer treatment programs",
      subheading:
        "Multidisciplinary cancer care combining surgery, chemotherapy, radiation therapy, and immunotherapy. Our comprehensive program includes precision medicine, clinical trials, and supportive care services with a 95% success rate.",
    },
    {
      icon: Users,
      name: "Pediatrics",
      description: "Specialized care for children and infants",
      subheading:
        "Child-friendly healthcare services with specialized pediatric equipment and expert care teams. We provide comprehensive medical and surgical care for children, including neonatal intensive care, pediatric surgery, and developmental support programs.",
    },
  ];

  const amenities = [
    {
      icon: Bed,
      title: "500+ Beds",
      description: "Comfortable private rooms with modern amenities",
    },
    {
      icon: Wifi,
      title: "Online Consultation",
      description: "Connect for online consultation with Top Doctors",
    },
    {
      icon: Car,
      title: "Free Transfer",
      description: "Free Airport Pick up and drop.",
    },
    {
      icon: Coffee,
      title: "Muliple Food Options",
      description: "Multi-cuisine restaurant and coffee shop",
    },
    {
      icon: Clock,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency medical services",
    },
    {
      icon: UserCheck,
      title: "Patient Care",
      description: "Dedicated patient care coordinators",
    },
  ];

  const processSteps = [
    {
      icon: Calendar,
      title: "Book Appointment",
      description:
        "Schedule your consultation with our medical experts through our easy online booking system",
      color: "from-fortis-500 to-fortis-600",
    },
    {
      icon: CreditCard,
      title: "Get Quote for Treatment",
      description:
        "Receive detailed treatment plan and transparent cost estimate within 24 hours",
      color: "from-secondary-500 to-secondary-600",
    },
    {
      icon: Plane,
      title: "Visa/Travel Process",
      description:
        "We assist with visa applications, travel arrangements, and airport transfers",
      color: "from-accent-500 to-accent-600",
    },
    {
      icon: Building2,
      title: "Treatment at Hospital",
      description:
        "Receive world-class treatment at our state-of-the-art facility with personalized care",
      color: "from-fortis-600 to-secondary-600",
    },
  ];

  const openFormPopup = (title: string, subtitle: string) => {
    setPopupTitle(title);
    setPopupSubtitle(subtitle);
    setShowFormPopup(true);
  };

  const toggleTreatment = (index: number) => {
    setExpandedTreatment(expandedTreatment === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <FloatingButtons />

      {/* Hero Section */}
      <div className="relative text-white overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://yapita-production.s3.ap-south-1.amazonaws.com/uploads/facility_photo/photo/3677ebcc-f7d7-4c29-9220-00948c5875af/file.webp"
            alt="Hospital Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-fortis-900 via-fortis-800 to-secondary-700 opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-fortis-600 bg-opacity-30 rounded-full px-4 py-2 mb-6">
                <Globe className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">
                  Medical Treatment in India
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                World-Class Healthcare at
                <span className="text-secondary-300"> Apollo Hospital</span>
              </h1>

              <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                Experience India's premier healthcare with international
                standards, advanced technology, and compassionate care.
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

            <div id="consult">
              <FormSection
                id="contact-form"
                title="Book Your Consultation"
                subtitle="Get personalized treatment plan from our experts"
                className="bg-white text-gray-900"
              />
            </div>
          </div>
        </div>
      </div>

      <TestimonialBanner />

      {/* Hospital Infrastructure Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                State-of-the-Art Hospital in India
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Whether you are seeking preventive care or advanced medical
                treatments, our specialised centres of excellence ensure
                top-tier care across multiple specialities.
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
        <div className="block md:hidden mt-12 text-center">
          <button
            onClick={() =>
              openFormPopup(
                `Get Your Treatment Plan`,
                `Connect with our specialists for personalized care`
              )
            }
            className="bg-gradient-to-r from-fortis-600 to-secondary-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-fortis-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Treatment Plan
          </button>
        </div>
      </section>

      {/* Cancer Treatment Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-900 to-fortis-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Advanced Treatment at Apollo
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Our comprehensive treatment care program combines cutting-edge
                technology, personalized treatment plans, and compassionate care
                to provide the best possible outcomes for our patients.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-secondary-300 mr-3" />
                  <span>Multidisciplinary team approach</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-secondary-300 mr-3" />
                  <span>Latest chemotherapy and radiation therapy</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-secondary-300 mr-3" />
                  <span>Minimally invasive surgical procedures</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-secondary-300 mr-3" />
                  <span>Comprehensive support services</span>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="text-center mb-6">
                <Activity className="w-16 h-16 mx-auto text-secondary-300 mb-4" />
                <h3 className="text-2xl font-bold mb-2">
                  Medical Care Excellence
                </h3>
                <p className="text-gray-200">
                  Comprehensive treatment programs tailored to each patient's
                  needs
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg">
                  <div className="text-2xl font-bold text-secondary-300">
                    95%
                  </div>
                  <div className="text-sm text-gray-200">Success Rate</div>
                </div>
                <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg">
                  <div className="text-2xl font-bold text-secondary-300">
                    1000+
                  </div>
                  <div className="text-sm text-gray-200">Patients Treated</div>
                </div>
              </div>

              <button
                onClick={() =>
                  openFormPopup(
                    "Get Cancer Treatment Quote",
                    "Receive personalized cancer treatment plan"
                  )
                }
                className="w-full mt-6 bg-secondary-300 text-fortis-900 py-3 px-6 rounded-lg font-semibold hover:bg-secondary-200 transition-all duration-300"
              >
                Get Treatment Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fortis Hospital */}
      <section id="Why" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Apollo Hospital?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by patients worldwide for exceptional healthcare services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-fortis-50 to-secondary-50 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-fortis-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ranked Excellence
              </h3>
              <p className="text-gray-600 mb-4">
                Ranked among India's top hospitals with over 10,000 beds across
                70+ hospitals
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-secondary-50 to-fortis-50 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Advanced Technology
              </h3>
              <p className="text-gray-600 mb-4">
                Pioneering healthcare with cutting-edge medical technology and
                innovative treatment protocols
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-accent-50 to-secondary-50 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                International Standards
              </h3>
              <p className="text-gray-600 mb-4">
                JCI Accredited Hospital ensuring world-class quality and safety
                standards across all specialties
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Medical Specialties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare services across multiple specialties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105"
              >
                <div
                  className="p-8 cursor-pointer"
                  onClick={() => toggleTreatment(index)}
                >
                  <div className="w-12 h-12 bg-fortis-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary-600 transition-colors">
                    <specialty.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {specialty.name}
                  </h3>
                  <p className="text-gray-600">{specialty.description}</p>

                  <div className="flex justify-center mt-4">
                    <ChevronDown
                      className={`w-5 h-5 text-fortis-600 transition-transform duration-300 ${
                        expandedTreatment === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                {expandedTreatment === index && (
                  <div className="px-8 pb-8 border-t border-gray-100">
                    <div className="pt-6">
                      <p className="text-gray-600 leading-relaxed">
                        {specialty.subheading}
                      </p>
                      <button
                        onClick={() =>
                          openFormPopup(
                            `Book ${specialty.name} Consultation`,
                            `Get personalized ${specialty.name.toLowerCase()} treatment plan`
                          )
                        }
                        className="w-full mt-4 bg-fortis-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-fortis-700 transition-all duration-300"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Doctors */}
      <section id="doctors" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Top Doctors at Apollo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our renowned medical experts with decades of experience
            </p>
          </div>

          <DoctorsCarousel department="default" />
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
              Simple 4-step process to get world-class medical treatment
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-fortis-200 via-secondary-200 to-accent-200 transform -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:scale-105 relative overflow-hidden">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>

                    {/* Step Number */}
                    <div className="absolute -top-1 -left-1 w-12 h-12 bg-gradient-to-br from-fortis-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>

                    {/* Icon */}
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

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-fortis-200 transition-colors duration-300"></div>
                  </div>

                  {/* Arrow for larger screens */}
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
          <div className="text-center mt-12">
            <button
              onClick={() =>
                openFormPopup(
                  "Consult Top Doctors",
                  "Book consultation with our expert doctors"
                )
              }
              className="bg-gradient-to-r from-fortis-600 to-secondary-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-fortis-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Doctor Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <div id="reviews">
        <TestimonialsSection />
      </div>

      {/* Special Offer Section */}
      <section id="offer" className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <Star className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="font-semibold">Limited Time Offer</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Save 20% on All Treatments
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Take advantage of our special offer for international patients.
              Book your consultation today and save on world-class medical
              treatment.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <FormSection
              title="Claim Your 20% Discount"
              subtitle="Limited time offer for new patients"
              className="bg-white text-gray-900"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={generalFAQs} />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Apollo Hospital</h3>
              <p className="text-gray-400 mb-4">
                World-class healthcare with international standards, advanced
                technology, and compassionate care.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">
                Contact Information
              </h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                  <span className="text-gray-300">Delhi, India</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-gray-400" />
                  <span className="text-gray-300">+91 9599 8181 71</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-gray-400" />
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
              world-class healthcare to international patients.
            </p>
          </div>
        </div>
      </footer>

      <FormPopup
        isOpen={showFormPopup}
        onClose={() => setShowFormPopup(false)}
        title={popupTitle}
        subtitle={popupSubtitle}
      />
    </div>
  );
}

export default HomePage;
