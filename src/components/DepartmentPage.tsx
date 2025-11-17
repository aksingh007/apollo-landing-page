import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Shield,
  Stethoscope,
  ChevronDown,
} from "lucide-react";

import Navbar from "./Navbar";

import FloatingButtons from "./FloatingButtons";

import FormPopup from "./FormPopup";
import { departmentFAQs } from "../data/FAQ";
import { getDepartmentBySlug } from "../data/departments";
import TestimonialBanner from "./TestimonialBanner";

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
  const [showFormPopup, setShowFormPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupSubtitle, setPopupSubtitle] = useState("");
  const [expandedTreatment, setExpandedTreatment] = useState<number | null>(
    null
  );

  // Clean the department parameter (remove trailing slash if present)
  const cleanDepartment = department?.replace(/\/$/, "") || "";
  const departmentData = getDepartmentBySlug(cleanDepartment);

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
          <p className="text-lg text-gray-500 mt-4">
            Looking for: {department}
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="text-apollo-600 hover:text-apollo-700 underline"
            >
              Return to Homepage
            </a>
          </div>
        </div>
      </div>
    );
  }

  const Icon = departmentData.icon;

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

  const openFormPopup = (title: string, subtitle: string) => {
    setPopupTitle(title);
    setPopupSubtitle(subtitle);
    setShowFormPopup(true);
  };

  const toggleTreatment = (index: number) => {
    setExpandedTreatment(expandedTreatment === index ? null : index);
  };

  // Enhanced treatment data with descriptions
  const treatmentDescriptions = {
    cardiology: [
      {
        name: "Coronary Angioplasty",
        description:
          "Minimally invasive procedure to open blocked coronary arteries using balloon catheters and stents, restoring blood flow to the heart muscle.",
      },
      {
        name: "Heart Bypass Surgery",
        description:
          "Advanced surgical procedure creating alternate pathways around blocked coronary arteries using grafts from other blood vessels.",
      },
      {
        name: "Double Valve Replacement",
        description:
          "Comprehensive cardiac surgery replacing two heart valves simultaneously with mechanical or biological prosthetic valves.",
      },
      {
        name: "Pacemaker Implantation",
        description:
          "Minimally invasive procedure to implant electronic devices that regulate heart rhythm and prevent dangerous arrhythmias.",
      },
      {
        name: "Heart Transplant in India",
        description:
          "Life-saving procedure replacing a diseased heart with a healthy donor heart, performed by expert cardiac transplant surgeons.",
      },
    ],
    neurology: [
      {
        name: "Brain Tumor Treatment",
        description:
          "Comprehensive treatment using advanced imaging, precision surgery, Gamma Knife radiosurgery, and targeted therapies for brain tumors.",
      },
      {
        name: "Stroke Treatment",
        description:
          "Emergency stroke care with rapid intervention, thrombolytic therapy, mechanical thrombectomy, and comprehensive rehabilitation programs.",
      },
      {
        name: "Epilepsy Surgery",
        description:
          "Advanced surgical procedures including temporal lobectomy, corpus callosotomy, and deep brain stimulation for drug-resistant epilepsy.",
      },
      {
        name: "Deep Brain Stimulation",
        description:
          "Minimally invasive neurosurgical procedure implanting electrodes to treat movement disorders like Parkinson's disease and essential tremor.",
      },
      {
        name: "Spinal Cord Surgery",
        description:
          "Complex spinal surgeries for tumors, trauma, and degenerative conditions using microsurgical techniques and advanced navigation systems.",
      },
    ],
    "orthopedic-treatment": [
      {
        name: "Joint Replacement Surgery",
        description:
          "Robot-assisted knee and hip replacement surgeries using advanced prosthetics and minimally invasive techniques for optimal outcomes.",
      },
      {
        name: "Arthroscopic Surgery",
        description:
          "Minimally invasive joint surgery using small incisions and specialized cameras to repair ligaments, cartilage, and joint structures.",
      },
      {
        name: "Spine Surgery",
        description:
          "Advanced spinal procedures including fusion, disc replacement, and deformity correction using navigation-guided surgical techniques.",
      },
      {
        name: "Sports Injury Treatment",
        description:
          "Comprehensive treatment for athletic injuries including ACL reconstruction, rotator cuff repair, and advanced rehabilitation programs.",
      },
      {
        name: "Fracture Management",
        description:
          "Expert treatment of complex fractures using internal fixation, external fixation, and bone grafting techniques for optimal healing.",
      },
    ],
    oncology: [
      {
        name: "Chemotherapy for bladder cancer treatment",
        description:
          "Personalized chemotherapy protocols using latest drugs and targeted therapies tailored to specific cancer types and patient conditions.",
      },
      {
        name: "Radiation Therapy",
        description:
          "Precision radiation treatment using IMRT, IGRT, and stereotactic techniques to target tumors while sparing healthy tissue.",
      },
      {
        name: "Surgical Oncology for breast cancer treatment",
        description:
          "Advanced cancer surgery including minimally invasive techniques, robotic surgery, and organ-preserving procedures.",
      },
      {
        name: "Immunotherapy for prostate cancer treatment",
        description:
          "Cutting-edge immunotherapy treatments that harness the body's immune system to fight cancer cells effectively.",
      },
      {
        name: "Bone Marrow Transplant",
        description:
          "Comprehensive BMT program including autologous and allogeneic transplants for blood cancers and immune system disorders.",
      },
    ],
    "spine-surgery": [
      {
        name: "Spinal Fusion Surgery",
        description:
          "Advanced surgical technique joining vertebrae to treat spinal instability, deformities, and degenerative conditions with high success rates.",
      },
      {
        name: "Disc Replacement",
        description:
          "Artificial disc replacement surgery preserving spinal motion while treating degenerative disc disease and chronic back pain.",
      },
      {
        name: "Scoliosis Correction",
        description:
          "Comprehensive spinal deformity correction using advanced instrumentation and techniques to restore spinal alignment and function.",
      },
      {
        name: "Spinal Tumor Surgery",
        description:
          "Complex tumor removal procedures using intraoperative monitoring and advanced imaging to preserve neurological function.",
      },
      {
        name: "Minimally Invasive Spine Surgery in India",
        description:
          "Advanced endoscopic and microscopic techniques reducing tissue damage, pain, and recovery time for spinal conditions.",
      },
    ],
    "pediatric-surgery": [
      {
        name: "Congenital Surgery",
        description:
          "Specialized surgical correction of birth defects and congenital anomalies using child-friendly techniques and equipment.",
      },
      {
        name: "Pediatric Trauma Care",
        description:
          "Emergency surgical care for injured children with specialized pediatric trauma protocols and child life support services.",
      },
      {
        name: "Minimally Invasive Procedures",
        description:
          "Advanced laparoscopic and thoracoscopic surgeries for children reducing pain, scarring, and recovery time.",
      },
      {
        name: "Neonatal Surgery",
        description:
          "Highly specialized surgery for newborns and premature infants with dedicated NICU support and expert neonatal care.",
      },
      {
        name: "Pediatric Oncology Surgery",
        description:
          "Comprehensive cancer surgery for children combining advanced surgical techniques with child-centered care approaches.",
      },
    ],
    ivf: [
      {
        name: "IVF Treatment in India",
        description:
          "Advanced in vitro fertilization using latest laboratory techniques, genetic testing, and personalized treatment protocols.",
      },
      {
        name: "Intrauterine Insemination (IUI)",
        description:
          "Less invasive fertility treatment placing prepared sperm directly into the uterus during ovulation for enhanced conception chances.",
      },
      {
        name: "Egg Freezing",
        description:
          "Advanced cryopreservation techniques allowing women to preserve fertility for future family planning with high success rates.",
      },
      {
        name: "Fertility Preservation",
        description:
          "Comprehensive fertility preservation options for cancer patients and others facing treatments that may affect reproductive health.",
      },
      {
        name: "Male Infertility Treatment",
        description:
          "Specialized treatments for male fertility issues including surgical sperm retrieval, hormone therapy, and assisted reproduction techniques.",
      },
    ],
    "transplant-surgery": [
      {
        name: "Liver Transplant in India",
        description:
          "Comprehensive liver transplant program including living donor and deceased donor transplants with excellent survival rates.",
      },
      {
        name: "Kidney Transplant Surgery Hospital",
        description:
          "Advanced kidney transplant procedures with comprehensive pre and post-transplant care and immunosuppressive management.",
      },
      {
        name: "Heart Transplant",
        description:
          "Life-saving heart transplant surgery performed by expert cardiac surgeons with advanced post-transplant monitoring and care.",
      },
      {
        name: "Bone Marrow Transplant",
        description:
          "Comprehensive BMT program treating blood cancers and immune disorders with autologous and allogeneic transplant options.",
      },
      {
        name: "Corneal Transplant",
        description:
          "Advanced corneal transplant procedures restoring vision using latest microsurgical techniques and donor tissue preservation.",
      },
    ],
    hematology: [
      {
        name: "Leukemia Treatment",
        description:
          "Comprehensive leukemia care using latest chemotherapy protocols, targeted therapy, and bone marrow transplantation options.",
      },
      {
        name: "Lymphoma Cancer Treatment in India",
        description:
          "Advanced lymphoma treatment combining chemotherapy, radiation therapy, immunotherapy, and stem cell transplantation.",
      },
      {
        name: "Bone Marrow Transplant",
        description:
          "Expert BMT procedures for blood disorders using advanced conditioning regimens and post-transplant supportive care.",
      },
      {
        name: "Blood Disorder Management",
        description:
          "Comprehensive care for various blood disorders including anemia, bleeding disorders, and clotting abnormalities.",
      },
      {
        name: "Hemophilia Treatment",
        description:
          "Specialized hemophilia care including factor replacement therapy, prophylaxis programs, and comprehensive bleeding disorder management.",
      },
    ],
  };

  const currentTreatments =
    treatmentDescriptions[
      departmentData.id as keyof typeof treatmentDescriptions
    ] ||
    departmentData.treatments.map((treatment) => ({
      name: treatment,
      description: `Advanced ${treatment} with international quality standards and expert medical care.`,
    }));

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

            <div id="consult">
              <FormSection
                id="contact-form"
                title={`Book Your ${departmentData.name} Consultation`}
                subtitle="Get personalized treatment plan from our experts"
                className="bg-white text-gray-900"
              />
            </div>
          </div>
        </div>
      </div>

      <TestimonialBanner department={departmentData.name} />
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

        <div className="block md:hidden mt-12 text-center">
          <button
            onClick={() =>
              openFormPopup(
                `Get ${departmentData.name} Treatment Plan`,
                `Connect with our ${departmentData.name.toLowerCase()} specialists for personalized care`
              )
            }
            className="bg-gradient-to-r from-fortis-600 to-secondary-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-fortis-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Treatment Plan
          </button>
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
              <button
                onClick={() =>
                  openFormPopup(
                    `Get ${departmentData.name} Treatment Quote`,
                    `Receive personalized ${departmentData.name.toLowerCase()} treatment plan`
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
            {currentTreatments.map((treatment, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105"
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => toggleTreatment(index)}
                >
                  <div className="w-12 h-12 bg-fortis-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary-600 transition-colors">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {treatment.name}
                  </h3>

                  <div className="flex justify-center">
                    <ChevronDown
                      className={`w-5 h-5 text-fortis-600 transition-transform duration-300 ${
                        expandedTreatment === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                {expandedTreatment === index && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {treatment.description}
                      </p>
                      <button
                        onClick={() =>
                          openFormPopup(
                            `Book ${treatment.name} Consultation`,
                            `Get personalized ${treatment.name.toLowerCase()} treatment plan`
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

      {/* Why Choose Section */}
      <section id="Why" className="py-20 bg-gray-50">
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
            {departmentData.whyChoose.map((reason, index) => {
              // Split reason into heading and subheading
              const parts = reason.split(/[:•]/);
              const heading = parts[0].trim();
              const subheading = parts.slice(1).join("").trim();

              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg"
                >
                  <div className="w-8 h-8 bg-fortis-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {heading}
                    </h3>
                    {subheading && (
                      <p className="text-gray-600 leading-relaxed">
                        {subheading}
                      </p>
                    )}
                    {!subheading && (
                      <p className="text-gray-600 leading-relaxed">{reason}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cardiology-specific SEO sections */}
      {departmentData.id === 'cardiology' && (
        <>
          {/* Heart Bypass Surgery Cost in India */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Heart Bypass Surgery Cost in India
                  </h2>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    Apollo Hospital offers world-class heart bypass surgery (CABG) at a fraction of the cost compared to Western countries. Our transparent pricing includes comprehensive pre-operative assessment, surgery, post-operative care, and rehabilitation programs.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-fortis-600 mr-3" />
                      <span className="text-gray-700">Transparent, all-inclusive pricing with no hidden costs</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-fortis-600 mr-3" />
                      <span className="text-gray-700">Up to 70% savings compared to US and UK prices</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-fortis-600 mr-3" />
                      <span className="text-gray-700">International insurance accepted for CABG surgery</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-fortis-600 mr-3" />
                      <span className="text-gray-700">Flexible payment plans available for heart surgery</span>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      openFormPopup(
                        "Get Heart Bypass Surgery Cost Estimate",
                        "Receive detailed cost breakdown for CABG surgery in India"
                      )
                    }
                    className="mt-8 bg-fortis-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-fortis-700 transition-all duration-300"
                  >
                    Get Cost Estimate
                  </button>
                </div>
                <div className="bg-gradient-to-br from-fortis-50 to-secondary-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Why Choose India for Heart Surgery?
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-3xl font-bold text-fortis-600 mb-2">70%</div>
                      <p className="text-gray-600">Cost Savings vs Western Countries</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-3xl font-bold text-fortis-600 mb-2">98%</div>
                      <p className="text-gray-600">Success Rate for CABG Surgery</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-3xl font-bold text-fortis-600 mb-2">JCI</div>
                      <p className="text-gray-600">International Accreditation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best Heart Surgeon in India */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Best Heart Surgeon in India
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our cardiothoracic surgeons are internationally trained with decades of experience performing complex heart surgeries. They have successfully completed thousands of procedures with excellent outcomes.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-fortis-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Credentials</h3>
                  </div>
                  <p className="text-gray-600 text-center">
                    Board-certified cardiac surgeons with fellowships from top institutions in USA, UK, and Europe
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-fortis-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Stethoscope className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">5000+ Surgeries</h3>
                  </div>
                  <p className="text-gray-600 text-center">
                    Extensive experience in performing complex cardiac procedures including CABG, valve replacements, and transplants
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-fortis-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">98% Success Rate</h3>
                  </div>
                  <p className="text-gray-600 text-center">
                    Outstanding surgical outcomes with minimal complications and high patient satisfaction rates
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Heart Treatment in India & Heart Hospital in India */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Heart Treatment in India
                  </h2>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    India has become a global destination for advanced heart treatment, offering world-class cardiac care with cutting-edge technology and experienced specialists. Apollo Hospital leads in providing comprehensive cardiovascular services.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-fortis-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Advanced Diagnostics</h4>
                        <p className="text-gray-600">Cardiac CT, MRI, nuclear imaging, and stress testing</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-fortis-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Minimally Invasive Procedures</h4>
                        <p className="text-gray-600">Angioplasty, stenting, and catheter-based interventions</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-fortis-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Complex Cardiac Surgery</h4>
                        <p className="text-gray-600">CABG, valve replacement, and heart transplantation</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Heart Hospital in India
                  </h2>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    Apollo Hospital is recognized as one of India's premier cardiac care centers, equipped with state-of-the-art facilities and a dedicated team of cardiovascular specialists committed to excellence.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-fortis-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">JCI & NABH Accredited</h4>
                        <p className="text-gray-600">International quality and safety standards certification</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-fortis-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">24/7 Cardiac Emergency</h4>
                        <p className="text-gray-600">Round-the-clock emergency cardiac care and intensive monitoring</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-fortis-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Dedicated Cardiac Cath Labs</h4>
                        <p className="text-gray-600">Multiple state-of-the-art catheterization laboratories</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cardiac Treatment in India & Heart Bypass Surgery in India */}
          <section className="py-20 bg-gradient-to-br from-fortis-50 to-secondary-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Cardiac Treatment in India
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Comprehensive cardiac treatment programs at Apollo Hospital include preventive cardiology, interventional procedures, cardiac surgery, and rehabilitation services tailored to each patient's unique needs.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-fortis-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Coronary artery disease management</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-fortis-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Heart valve repair and replacement</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-fortis-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Arrhythmia treatment and pacemaker implantation</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-fortis-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Heart failure management programs</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-fortis-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Preventive cardiology and risk assessment</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Heart Bypass Surgery in India
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    CABG (Coronary Artery Bypass Grafting) surgery at Apollo Hospital uses advanced techniques including off-pump and minimally invasive approaches, performed by India's most experienced cardiac surgeons.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-fortis-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Traditional CABG with heart-lung machine</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-fortis-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Off-pump (beating heart) bypass surgery</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-fortis-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Minimally invasive direct coronary artery bypass</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-fortis-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Robotic-assisted bypass procedures</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-fortis-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Combined valve and bypass operations</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <button
                  onClick={() =>
                    openFormPopup(
                      "Get Heart Surgery Consultation",
                      "Connect with our cardiac surgery experts"
                    )
                  }
                  className="bg-gradient-to-r from-fortis-600 to-secondary-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-fortis-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </section>

          {/* Cost of Heart Surgery in India */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Cost of Heart Surgery in India
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                  Apollo Hospital provides transparent, affordable pricing for all cardiac procedures without compromising on quality. Our comprehensive packages include pre-operative tests, surgery, hospital stay, medications, and follow-up care.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-fortis-50 to-white p-6 rounded-2xl border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Angioplasty</h3>
                  <p className="text-sm text-gray-600 mb-3">Single vessel stenting with drug-eluting stent</p>
                  <div className="text-2xl font-bold text-fortis-600">$3,500+</div>
                </div>
                <div className="bg-gradient-to-br from-fortis-50 to-white p-6 rounded-2xl border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">CABG Surgery</h3>
                  <p className="text-sm text-gray-600 mb-3">Multiple vessel bypass surgery</p>
                  <div className="text-2xl font-bold text-fortis-600">$6,500+</div>
                </div>
                <div className="bg-gradient-to-br from-fortis-50 to-white p-6 rounded-2xl border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Valve Replacement</h3>
                  <p className="text-sm text-gray-600 mb-3">Single or double valve replacement</p>
                  <div className="text-2xl font-bold text-fortis-600">$7,000+</div>
                </div>
                <div className="bg-gradient-to-br from-fortis-50 to-white p-6 rounded-2xl border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Pacemaker</h3>
                  <p className="text-sm text-gray-600 mb-3">Pacemaker implantation procedure</p>
                  <div className="text-2xl font-bold text-fortis-600">$4,000+</div>
                </div>
              </div>
              <div className="mt-12 bg-secondary-50 p-8 rounded-2xl border border-secondary-200">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-fortis-600 mb-2">70%</div>
                    <p className="text-gray-700 font-semibold">Lower than Western Countries</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-fortis-600 mb-2">100%</div>
                    <p className="text-gray-700 font-semibold">Transparent Pricing</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-fortis-600 mb-2">0</div>
                    <p className="text-gray-700 font-semibold">Hidden Costs</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

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
      <section id="doctors" className="py-20 bg-gray-50">
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
            <DoctorsCarousel department={departmentData.id} />
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
        <TestimonialsSection department={departmentData.id} />
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

      <FormPopup
        isOpen={showFormPopup}
        onClose={() => setShowFormPopup(false)}
        title={popupTitle}
        subtitle={popupSubtitle}
      />
    </div>
  );
};

export default DepartmentPage;
