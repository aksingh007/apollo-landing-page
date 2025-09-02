export interface FAQ {
  question: string;
  answer: string;
}

// General FAQs for HomePage
export const generalFAQs: FAQ[] = [
  {
    question: "Why should I choose Apollo Hospital for medical treatment?",
    answer: "Apollo Hospital is India's leading healthcare provider with over 70 hospitals and 10,000+ beds across the country. We are JCI and NABH accredited, ensuring international quality standards. Our hospital features state-of-the-art medical technology, world-class infrastructure, and a team of highly experienced doctors and medical professionals. We have successfully treated over 200 million patients and are trusted by patients from over 120 countries worldwide."
  },
  {
    question: "What makes Apollo Hospital different from other hospitals in India?",
    answer: "Apollo Hospital stands out due to our:\n• JCI and NABH international accreditations\n• Advanced medical technology and equipment\n• Team of 11,000+ doctors across specialties\n• Comprehensive range of medical services under one roof\n• Dedicated international patient services\n• Transparent pricing with no hidden costs\n• 24/7 emergency services\n• Multi-language support for international patients"
  },
  {
    question: "How can international patients get treatment at Apollo Hospital?",
    answer: "International patients can easily access our services through our dedicated international patient services team. The process includes:\n1. Submit your medical reports through our online consultation form\n2. Receive a detailed treatment plan and cost estimate within 24-48 hours\n3. Get assistance with visa applications and travel arrangements\n4. Enjoy complimentary airport transfers and accommodation assistance\n5. Receive personalized care throughout your treatment journey\n\nWe also provide medical visa invitation letters and coordinate with embassies for visa processing."
  },
  {
    question: "What are the costs of treatment at Apollo Hospital compared to other countries?",
    answer: "Apollo Hospital offers world-class medical treatment at significantly lower costs compared to Western countries:\n• Cardiac procedures: 60-80% less expensive than US/UK\n• Orthopedic surgeries: 70-85% cost savings\n• Cancer treatments: 65-75% more affordable\n• Cosmetic surgeries: 50-70% lower costs\n\nDespite the lower costs, we maintain the same international quality standards and use the latest medical technology. We provide transparent pricing with detailed cost estimates upfront, so there are no surprises."
  },
  {
    question: "What support services are available for international patients?",
    answer: "Apollo Hospital provides comprehensive support services for international patients:\n• Dedicated international patient coordinators\n• Multi-language interpretation services\n• Visa assistance and medical visa invitation letters\n• Airport pickup and drop-off services\n• Accommodation arrangements for patients and families\n• Currency exchange and banking assistance\n• Local SIM cards and communication support\n• Cultural and dietary preferences accommodation\n• Post-treatment follow-up care\n• Telemedicine consultations after returning home"
  },
  {
    question: "How do I get a second opinion from Apollo Hospital doctors?",
    answer: "Getting a second opinion from our expert doctors is simple:\n1. Upload your medical reports, test results, and imaging studies through our online portal\n2. Our medical team will review your case within 24-48 hours\n3. You'll receive a detailed second opinion report from our specialist doctors\n4. If needed, we can arrange a video consultation with the concerned specialist\n5. The second opinion includes treatment recommendations, prognosis, and alternative treatment options\n\nThis service is available for patients worldwide and helps you make informed decisions about your healthcare."
  },
  {
    question: "What insurance and payment options are accepted at Apollo Hospital?",
    answer: "Apollo Hospital accepts various payment methods and insurance options:\n• International insurance plans from major providers\n• Direct billing arrangements with insurance companies\n• Credit cards (Visa, MasterCard, American Express)\n• Wire transfers and international banking\n• Cash payments in multiple currencies\n• Medical loan facilities through partner banks\n• Flexible payment plans for expensive treatments\n\nOur international patient services team can help coordinate with your insurance provider for pre-authorization and direct billing arrangements."
  },
  {
    question: "How long do I need to stay in India for different treatments?",
    answer: "The duration of stay varies depending on the type of treatment:\n• Cardiac procedures: 7-14 days\n• Orthopedic surgeries: 10-21 days\n• Cancer treatments: 2-8 weeks (depending on treatment protocol)\n• Organ transplants: 4-8 weeks\n• Cosmetic surgeries: 7-14 days\n• Diagnostic procedures: 2-5 days\n\nThese timeframes include pre-treatment evaluation, the procedure itself, recovery, and post-operative care. Our team will provide you with a detailed timeline based on your specific treatment plan."
  }
];

// Department-specific FAQs
export const departmentFAQs: { [key: string]: FAQ[] } = {
 cardiology: [
    {
      question: "What cardiac procedures are available at Apollo Hospital?",
      answer: "Apollo Hospital offers comprehensive cardiac care including:\n• Coronary Angioplasty and Stenting\n• Bypass Surgery (CABG)\n• Heart Valve Replacement and Repair\n• Pacemaker and Defibrillator Implantation\n• Heart Transplantation\n• Minimally Invasive Cardiac Surgery\n• Electrophysiology Procedures\n• Pediatric Cardiac Surgery\n• Aortic Aneurysm Repair\n• Congenital Heart Disease Treatment"
    },
    {
      question: "What is the success rate of cardiac surgeries at Apollo Hospital?",
      answer: "Apollo Hospital maintains excellent success rates for cardiac procedures:\n• Coronary Angioplasty: 98% success rate\n• Bypass Surgery: 97% success rate\n• Heart Valve Surgery: 96% success rate\n• Heart Transplant: 94% success rate\n\nOur cardiac team has performed over 200,000 cardiac procedures with outcomes comparable to the best international centers. We follow international protocols and maintain detailed outcome statistics."
    },
    {
      question: "How long is the recovery time for cardiac procedures?",
      answer: "Recovery times vary by procedure:\n• Angioplasty: 1-2 days hospital stay, 1 week full recovery\n• Bypass Surgery: 5-7 days hospital stay, 6-8 weeks full recovery\n• Heart Valve Surgery: 7-10 days hospital stay, 8-12 weeks full recovery\n• Pacemaker Implantation: 1-2 days hospital stay, 2-4 weeks full recovery\n\nOur cardiac rehabilitation program helps patients recover faster and return to normal activities safely."
    },
    {
      question: "What is the CABG Cost in India?",
      answer: "The cost of CABG in India depends on the city, hospital and complexity of the procedure. Having said that, at Apollo hospital you can get the best CABG surgery in India which ranges from $6,500-$9,000. Apollo Hospitals also provides minimally invasive alternatives."
    },
    {
      question: "What is the Angioplasty Cost in India?",
      answer: "The cost of Angioplasty in India starts from $1,800 and increases, depending on the city, hospital and complexity of the procedure. That said, at Apollo hospital, Angioplasty ranges from $1,800-$3,600."
    },
    {
      question: "How experienced are the doctors at Apollo?",
      answer: "At Apollo Hospitals, we are proud to have experts who are considered the best in their field. From the best CABG surgeons in India to the best cardiac surgeons, our doctors are trained for excellence. Some of our experts include Dr. Pramod Kumar who is heralded as the best cardiologist."
    },
{
      question: "How much is the Double valve replacement cost in India?",
      answer: "The cost of double valve replacement in India ranges from $3,500 to $6,500, depending on the city, hospital and complexity of the procedure. At Apollo Hospitals, you can get the surgery at $3,500-$4,500 (for Indian patients) and within $6,500 for foreign patients."
    } 
  ],


  neurology: [
    {
      question: "What neurological conditions are treated at Apollo Hospital?",
      answer: "Apollo Hospital's neurology department treats a wide range of conditions:\n• Brain Tumors (benign and malignant)\n• Stroke and Cerebrovascular Diseases\n• Epilepsy and Seizure Disorders\n• Parkinson's Disease and Movement Disorders\n• Multiple Sclerosis\n• Spinal Cord Injuries and Disorders\n• Peripheral Nerve Disorders\n• Headaches and Migraines\n• Memory Disorders and Dementia\n• Pediatric Neurological Conditions"
    },
    {
      question: "What advanced neurosurgical procedures are available?",
      answer: "Our neurosurgery department offers cutting-edge procedures:\n• Minimally Invasive Brain Surgery\n• Gamma Knife Treatment in India)\n• Deep Brain Stimulation (DBS)\n• Endoscopic Brain Surgery\n• Awake Craniotomy\n• Spinal Fusion and Disc Replacement\n• Tumor Resection with Intraoperative Monitoring\n• Vascular Neurosurgery\n• Pediatric Neurosurgery\n• Functional Neurosurgery"
    },
    {
      question: "How is stroke treated at Apollo Hospital?",
      answer: "Apollo Hospital has a comprehensive stroke program:\n• 24/7 Stroke Emergency Services\n• Advanced imaging (CT, MRI, Angiography)\n• Thrombolytic therapy (clot-busting drugs)\n• Mechanical thrombectomy for large vessel occlusions\n• Carotid endarterectomy and stenting\n• Comprehensive stroke rehabilitation\n• Multidisciplinary stroke team approach\n\nOur stroke unit follows international protocols and has achieved excellent outcomes with minimal disability rates."
    },
    {
      question: "What is the success rate of brain tumor surgeries?",
      answer: "Apollo Hospital is the best hospital in India for brain tumor treatment. Here’s how we ensure the highest success rate:\n• Benign tumor removal: 98% success rate\n• Malignant tumor resection: 95% success rate with minimal complications\n• Functional preservation: 97% of patients maintain neurological function\n• Low infection rates: <1% surgical site infections\n\nWe use advanced techniques like intraoperative MRI, awake craniotomy, and neurophysiological monitoring to maximize tumor removal while preserving brain function."
    }
  ],


  'orthopedic-treatment': [
    {
      question: "What orthopedic procedures are performed at Apollo Hospital?",
      answer: "Apollo Hospital offers comprehensive orthopedic services:\n• Joint Replacement Surgery (Hip, Knee, Shoulder)\n• Arthroscopic Surgery\n• Spine Surgery and Spinal Fusion\n• Sports Medicine and Injury Treatment\n• Trauma and Fracture Management\n• Pediatric Orthopedics\n• Hand and Microsurgery\n• Foot and Ankle Surgery\n• Bone Tumor Treatment\n• Revision Joint Surgery"
    },
    {
      question: "What is the success rate of joint replacement surgeries?",
      answer: "Apollo Hospital has exceptional success rates for joint replacements, being the best hospital for knee replacement surgery in India, it offers:\n• Hip Replacement: 99% success rate\n• Best knee replacement surgery in India: 98% success rate\n• Shoulder Replacement: 97% success rate\n• Revision Surgery: 95% success rate\n\nOur joint replacement surgeries have a longevity of 15-20 years, and we use the latest implants from leading international manufacturers. Postoperative infection rates are less than 1%."
    },
    {
      question: "How long is the recovery after joint replacement surgery?",
      answer: "Recovery timeline for joint replacement:\n• Hospital stay: 3-5 days\n• Walking with support: 1-2 days after surgery\n• Return to normal activities: 6-8 weeks\n• Full recovery: 3-6 months\n• Sports activities: 6-12 months (depending on the sport)\n\nOur comprehensive rehabilitation program includes physiotherapy, occupational therapy, and patient education to ensure optimal recovery and long-term success."
    },
    {
      question: "Do you offer minimally invasive orthopedic procedures?",
      answer: "Yes, Apollo Hospital specializes in minimally invasive orthopedic procedures. A great alternative for knee replacement surgery in India:\n• Arthroscopic joint surgery\n• Minimally invasive spine surgery\n• Computer-assisted joint replacement\n• Robotic-assisted orthopedic surgery\n• Percutaneous fracture fixation\n• Endoscopic spine surgery\n\nThese techniques result in smaller incisions, less pain, reduced blood loss, shorter hospital stays, and faster recovery compared to traditional open surgery."
    },
    {
      question: "What is the total hip replacement cost in india?",
      answer: "Yes, Apollo Hospital offers hip replacement at the best cost in India. They offer the treatment at $6,000 to $8,500 USD. The competitive pricing is the best in the country and brings expertise of internationally-trained, experienced doctors with high success rates."
    },
    {
      question: "What is the total hip replacement cost in india?",
      answer: "Yes, Apollo Hospital offers hip replacement at the best cost in India. They offer the treatment at $6,000 to $8,500 USD. The competitive pricing is the best in the country and brings expertise of internationally-trained, experienced doctors with high success rates."
    },
{
      question: "What is the bilateral hip replacement surgery cost in India?",
      answer: "Yes, Apollo Hospital offers bilateral hip replacement at the best cost in India. They offer the treatment at $8,500 to $13,500, this is dependent on the option such as cemented, uncemented or hybrid replacements. The competitive pricing is the best in the country and brings expertise of internationally-trained, experienced doctors with high success rates."
    }


  ],


  oncology: [
    {
      question: "What types of cancer are treated at Apollo Hospital?",
      answer: "Apollo Hospital treats all types of cancers:\n• Breast Cancer\n• Best Lung Cancer treatment in India\n• Colorectal Cancer\n• Prostate Cancer Treatment\n• Blood Cancers (Leukemia, Lymphoma)\n• Brain and CNS Tumors\n• Liver Cancer\n• Pancreatic Cancer\n• Gynecological Cancers\n• Head and Neck Cancers\n• Bone and Soft Tissue Sarcomas\n• Pediatric Cancers"
    },
    {
      question: "What Cancer treatment options are available?",
      answer: "Apollo Hospital offers comprehensive cancer treatment:\n• Advanced Chemotherapy protocols\n• Precision Radiation Therapy (IMRT, IGRT, Stereotactic)\n• Surgical Oncology with minimally invasive techniques\n• Immunotherapy and Targeted Therapy\n• Bone Marrow and Stem Cell Transplantation\n• Robotic Cancer Surgery\n• Interventional Oncology\n• Palliative Care Services\n• Clinical Trials for latest treatments\n• Multidisciplinary tumor board approach"
    },
    {
      question: "What is the success rate of cancer treatment at Apollo Hospital?",
      answer: "Apollo Hospital has excellent cancer treatment outcomes:\n• Overall 5-year survival rate: 85-90% for early-stage cancers\n• Breast Cancer: 95% survival rate for early stages\n• Colorectal Cancer: 90% survival rate for localized disease\n• Blood Cancers: 80-85% remission rates\n• Pediatric Cancers: 85% cure rates\n\nOur outcomes are comparable to the best international cancer centers, and we follow evidence-based treatment protocols."
    },
    {
      question: "Do you offer second opinions for cancer patients?",
      answer: "Yes, Apollo Hospital provides comprehensive second opinion services for cancer patients:\n• Expert review of pathology reports and imaging studies\n• Treatment plan evaluation by multidisciplinary team\n• Alternative treatment options discussion\n• Prognosis assessment\n• Clinical trial eligibility evaluation\n• Video consultations with oncology specialists\n\nOur second opinion service helps patients make informed decisions about their cancer treatment and explore all available options."
    },
    {
      question: "What is the Cancer Treatment Cost in India?",
      answer: "The cost of cancer treatment depends on the type of cancer (including the stage), treatment protocol, choice of hospital and the city. For example, the cost of breast cancer in Delhi can range between $4,500 to $9,000. Similarly, the cost can vary depending on the factors above."
    }


  ],


  'spine-surgery': [
    {
      question: "What spine conditions are treated at Apollo Hospital?",
      answer: "Apollo Hospital treats all spine-related conditions:\n• Herniated Disc Disease\n• Spinal Stenosis\n• Scoliosis and Spinal Deformities\n• Spinal Fractures and Trauma\n• Spinal Tumors\n• Degenerative Disc Disease\n• Spondylolisthesis\n• Spinal Infections\n• Failed Back Surgery Syndrome\n• Cervical and Lumbar Radiculopathy"
    },
    {
      question: "What minimally invasive spine procedures are available?",
      answer: "Apollo Hospital offers advanced minimally invasive spine surgery:\n• Endoscopic Discectomy\n• Minimally Invasive Spinal Fusion\n• Percutaneous Screw Fixation\n• Balloon Kyphoplasty\n• Artificial Disc Replacement\n• Laser Spine Surgery\n• Microscopic Spine Surgery\n• Navigation-guided Spine Surgery\n\nThese procedures result in smaller incisions, less muscle damage, reduced pain, shorter hospital stays, and faster recovery."
    },
    {
      question: "What is the success rate of spine surgeries?",
      answer: "One of the best hospitals for spine surgery in India, Apollo Hospital has excellent spine surgery outcomes:\n• Discectomy: 95-98% success rate for leg pain relief\n• Spinal Fusion: 90-95% fusion rates\n• Artificial Disc Replacement: 90% good to excellent outcomes\n• Scoliosis Correction: 95% successful curve correction\n• Spinal Tumor Surgery: 90% successful tumor removal\n\nOur complication rates are among the lowest internationally, with infection rates less than 1%."
    },
    {
      question: "How long is recovery after spine surgery?",
      answer: "Recovery varies by procedure type:\n• Minimally Invasive Discectomy: 2-4 weeks\n• Spinal Fusion: 3-6 months\n• Artificial Disc Replacement: 6-12 weeks\n• Scoliosis Surgery: 6-12 months\n• Tumor Removal: 4-8 weeks\n\nOur comprehensive rehabilitation program includes physiotherapy, pain management, and gradual activity progression to ensure optimal recovery."
    },
    {
      question: "How much does Kyphosis Surgery Cost in India?",
      answer: "The cost of Kyphosis surgery depends on a few factors such as severity of the spine curve, city and the procedure, and number of vertebrae requiring correction. The average cost is between $10,000 to $14,500. At Apollo Hospitals, you can get the treatment within this range with a slight variation depending on individual factors and complexity."
    },
    {
      question: "How much does Spinal Decompression Surgery Cost in India?",
      answer: "The cost of spinal decompression surgery depends on a few factors such as severity of the issue, city, procedure and the pre-and post-surgery care cost. The average cost is between $3,000 to $5,500. At Apollo Hospitals, you can get the treatment within this range with a slight variation depending on individual factors and complexity."
    },
    {
      question: "How Much Does Spinal Fusion Surgery Cost in India?",
      answer: "The cost of spinal fusion surgery depends on a few factors such as type of surgery, city, procedure and the pre-and post-surgery care cost. The average cost for one-level spinal fusion is between $5,500 to $7,500. Minimally invasive surgery costs a little more. At Apollo, you can get the treatment within this range with a slight variation depending on individual factors and complexity."
    },
    {
      question: "How Much Does Scoliosis Surgery Cost in India?",
      answer: "The cost of spinal fusion surgery depends on a few factors such as procedure type, city, complexity and the pre-and post-surgery care cost. The average cost is between $8,500 to $12,500. At Apollo, you can get the treatment within this range with a slight variation depending on individual factors and complexity."
    },
    {
      question: "How Much Does Endoscopic Spine Surgery Cost in India?",
      answer: "The cost of endoscopic spine surgery depends on a few factors such as procedure cost, city, the technology used and the pre- and post-surgery expenses. The average cost is between $3,500 to $6,500. At Apollo, you can get the treatment within this range with a slight variation depending on individual factors and complexity."
    }
  ],


  'pediatric-surgery': [
    {
      question: "What pediatric surgical procedures are performed at Apollo Hospital?",
      answer: "Apollo Hospital offers comprehensive pediatric surgery services:\n• Congenital Anomaly Corrections\n• Pediatric Cardiac Surgery (Apollo is the no. 1 pediatric heart surgery in india)\n• Neonatal Surgery\n• Pediatric Neurosurgery\n• Pediatric Orthopedic Surgery\n• Pediatric Urology\n• Pediatric Oncology Surgery (best for pediatric cancer treatment in India)\n• Minimally Invasive Pediatric Surgery\n• Pediatric Heart Transplant Surgery (among other organs)\n• Emergency Pediatric Surgery\n• Pediatric Bone Marrow Transplant in India"
    },
    {
      question: "What makes Apollo Hospital suitable for pediatric patients?",
      answer: "Apollo Hospital provides specialized pediatric care:\n• Dedicated Pediatric ICU and NICU\n• Child-friendly hospital environment\n• Specialized pediatric anesthesia\n• Family-centered care approach\n• Play therapy and child life specialists\n• Pediatric-trained nursing staff\n• Age-appropriate medical equipment\n• Separate pediatric operation theaters\n• 24/7 pediatric emergency services\n• Multidisciplinary pediatric teams with the best pediatric heart transplant surgeon in India."
    },
    {
      question: "What is the success rate of pediatric surgeries?",
      answer: "Apollo Hospital has excellent pediatric surgery outcomes:\n• Congenital Heart Surgery: 96% success rate\n• Neonatal Surgery: 94% survival rate\n• Pediatric Cancer Surgery: 90% success rate\n• Congenital Anomaly Corrections: 98% success rate\n• Pediatric Trauma Surgery: 97% good outcomes\n\nOur pediatric surgical team has extensive experience and follows international pediatric surgery protocols."
    },
    {
      question: "How do you ensure child comfort during treatment?",
      answer: "Apollo Hospital prioritizes child comfort and family support:\n• Child life specialists to reduce anxiety\n• Play therapy and entertainment facilities\n• Parent accommodation in patient rooms\n• Colorful, child-friendly hospital decor\n• Specialized pediatric pain management\n• Age-appropriate communication techniques\n• Flexible visiting hours for families\n• Educational support during long stays\n• Psychological support services\n• Sibling support programs"
    }
  ],


  ivf: [
    {
      question: "What fertility treatments are available at Apollo Hospital?",
      answer: "Apollo Hospital offers comprehensive fertility services:\n• In Vitro Fertilization (IVF)\n• Intrauterine Insemination (IUI)\n• Intracytoplasmic Sperm Injection (ICSI)\n• Egg and Sperm Donation Programs\n• Embryo Freezing and Storage\n• Preimplantation Genetic Testing (PGT)\n• Fertility Preservation\n• Male Infertility Treatment\n• Recurrent Pregnancy Loss Management\n• Surrogacy Programs"
    },
    {
      question: "What are the success rates of IVF at Apollo Hospital?",
      answer: "Apollo Hospital has excellent IVF success rates:\n• Overall IVF success rate: 65-70%\n• Success rate for women under 35: 75-80%\n• Success rate for women 35-40: 60-65%\n• Success rate for women over 40: 40-45%\n• Frozen embryo transfer success: 70-75%\n\nOur success rates are among the highest in India and comparable to leading international fertility centers."
    },
    {
      question: "How many IVF cycles might be needed?",
      answer: "The number of IVF cycles varies by individual factors:\n• Most patients achieve pregnancy within 2-3 cycles\n• Success rates are highest in the first 3 attempts\n• Factors affecting success: age, cause of infertility, previous pregnancies\n• Some patients may need 4-6 cycles\n• Our fertility specialists provide personalized treatment plans\n\nWe offer comprehensive evaluation to optimize success rates and minimize the number of cycles needed."
    },
    {
      question: "What support services are available for fertility patients?",
      answer: "Apollo Hospital provides comprehensive fertility support:\n• Fertility counseling and psychological support\n• Nutritional guidance for fertility optimization\n• Stress management programs\n• Support groups for couples\n• Financial counseling and payment plans\n• Coordination with international patients\n• Post-treatment pregnancy monitoring\n• Fertility preservation consultations\n• Male fertility specialist consultations\n• Alternative medicine integration (yoga, acupuncture)"
    }
  ],


  'transplant-surgery': [
    {
      question: "What organ transplants are performed at Apollo Hospital?",
      answer: "Apollo Hospital performs various organ transplants:\n• Liver Transplantation (Living and Deceased Donor)\n• Kidney Transplantation (Living and Deceased Donor)\n• Heart Transplantation\n• Bone Marrow Transplantation\n• Corneal Transplantation\n• Pancreas Transplantation\n• Multi-organ Transplantation\n• Pediatric Organ Transplantation\n• ABO Incompatible Transplants\n• High-risk Transplant Procedures"
    },
    {
      question: "What are the success rates of organ transplants?",
      answer: "Apollo Hospital has excellent transplant success rates, while being the best kidney transplant surgery hospital, it provides:\n• Liver Transplant: 95% one-year survival, 85% five-year survival\n• Kidney Transplant: 98% one-year survival, 90% five-year survival\n• Heart Transplant: 90% one-year survival, 75% five-year survival\n• Bone Marrow Transplant: 85% success rate\n• Corneal Transplant: 95% success rate\n\nOur outcomes are among the best internationally, with low rejection rates and excellent long-term survival."
    },
    {
      question: "How long is the waiting time for organ transplants?",
      answer: "Waiting times vary by organ type and availability:\n• Living Donor Transplants: 4-8 weeks (after donor evaluation)\n• Deceased Donor Liver: 3-12 months\n• Deceased Donor Renal Transplant in India: 6-24 months\n• Heart Transplant: 6-18 months\n• Corneal Transplant: 2-4 weeks\n\nWe work with national organ sharing networks and have one of the most active transplant programs in India, which helps reduce waiting times."
    },
    {
      question: "What post-transplant care is provided?",
      answer: "Apollo Hospital provides comprehensive post-transplant care:\n• Intensive post-operative monitoring\n• Immunosuppressive medication management\n• Regular follow-up appointments and testing\n• Infection prevention protocols\n• Rejection monitoring and treatment\n• Long-term survival optimization\n• Lifestyle and dietary counseling\n• Psychological support services\n• 24/7 transplant emergency services\n• Telemedicine follow-up for distant patients"
    },
{
      question: "What is the Bone Marrow Transplant Cost in India?",
      answer: "The cost of BMT in India varies depending on the donor type, type of transplant, city and the complexity. Generally, the cost is between $10,000 to $50,000+ depending on the above factors. For example, allogeneic stem cell transplant cost in India can be around $25,000 to $45,000. There may be additional costs due to post-transplant requirements."
    }
  ],


  hematology: [
    {
      question: "What blood disorders are treated at Apollo Hospital?",
      answer: "Apollo Hospital treats comprehensive blood disorders:\n• Leukemia (ALL, AML, CLL, CML)\n• Lymphomas (Hodgkin's and Non-Hodgkin's)\n• Multiple Myeloma\n• Aplastic Anemia\n• Sickle Cell Disease\n• Thalassemia\n• Hemophilia and Bleeding Disorders\n• Thrombotic Disorders\n• Bone Marrow Failure Syndromes\n• Myelodysplastic Syndromes"
    },
    {
      question: "What advanced treatments are available for blood cancers?",
      answer: "Apollo Hospital offers cutting-edge blood cancer treatments:\n• Chemotherapy with latest protocols\n• Targeted Therapy (Tyrosine Kinase Inhibitors)\n• Immunotherapy (CAR-T Cell Therapy)\n• Monoclonal Antibody Therapy\n• Bone Marrow Transplantation (Apollo is the no. 1 bone marrow transplant hospital in India)\n• Stem Cell Transplantation\n• Radiation Therapy\n• Clinical Trials for new treatments\n• Supportive Care Services\n• Precision Medicine approaches"
    },
    {
      question: "What is the success rate of blood cancer treatment?",
      answer: "Apollo Hospital has excellent blood cancer treatment outcomes:\n• Acute Lymphoblastic Leukemia (pediatric): 85-90% cure rate\n• Acute Myeloid Leukemia: 70-75% remission rate\n• Chronic Myeloid Leukemia: 95% long-term survival\n• Hodgkin's Lymphoma: 90-95% cure rate\n• Non-Hodgkin's Lymphoma: 70-80% cure rate\n• Multiple Myeloma: 80% response rate\n\nOur outcomes are comparable to the best international hematology centers."
    },
    {
      question: "What support services are available for blood disorder patients?",
      answer: "Apollo Hospital provides comprehensive support for blood disorder patients:\n• Specialized hematology nursing care\n• Infection prevention protocols\n• Blood product transfusion services\n• Nutritional support and counseling\n• Psychological support and counseling\n• Social work services\n• Financial counseling and assistance\n• Patient and family education programs\n• Support groups and peer counseling\n• Home care coordination\n• 24/7 hematology emergency services"
    }
  ]
};