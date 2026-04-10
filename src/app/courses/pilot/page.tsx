"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlaneDeparture } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const courses = [
  {
    id: 1,
    title: "Commercial Pilot License",
    number: "01",
    description:
      "A Commercial Pilot License (CPL) allows you to serve as the pilot-in-command (PIC) of an aircraft for commercial operations, including airlines and charter companies.",

    requirements: [
      { label: "Age :", value: "At least 17 years old." },
      {
        label: "Education Qualifications :",
        value:
          "10+2 (or equivalent) with a minimum of 55% aggregate marks in Physics and Mathematics.",
      },
      {
        label: "Medical Fitness :",
        value:
          "Class 1 Medical Examination conducted by a DGCA-approved medical examiner.",
      },
    ],

    about: {
      description: `A Commercial Pilot License is a professional pilot license that allows
      you to act as the pilot-in-command (PIC) of an aircraft for commercial
      operations, such as working as a pilot for airlines, charter companies,
      or other commercial aviation organizations.`,

      components: [
        {
          title: "Ground School",
          text: "Theoretical classroom instruction of 500 hours.",
        },
        {
          title: "Flight Training",
          text: "Practical flight training of more than 200 hours.",
        },
        {
          title: "Instrument Rating (IR)",
          text: "Simulator training and flight hours under IMC.",
        },
        {
          title: "Cross-Country Navigation",
          text: "Route planning, navigation techniques, and flight planning.",
        },
        {
          title: "Flight Operations",
          text: "Crew resource management and operational procedures.",
        },
      ],
    },

    documents: [
      {
        title: "Logbook Record",
        text: "Pilot logbook pages reflecting flight experience.",
      },
      {
        title: "Educational Qualifications",
        text: "High school or college certificates/transcripts.",
      },
      {
        title: "Identification Documents",
        text: "Passport or government-issued ID.",
      },
    ],
  },

  {
    id: 2,
    title: "Private Pilot License",
    number: "02",
    description:
      "The Private Pilot License (PPL) allows individuals to fly aircraft for personal purposes and recreational flying. It is the perfect entry point into aviation for those who want to fly purely for passion.",

    requirements: [
      { label: "Age :", value: "At least 16 years old." },
      {
        label: "Education Qualifications :",
        value:
          "Class 10th (or equivalent) with a minimum of 55% aggregate marks.",
      },
      {
        label: "Medical Fitness :",
        value:
          "Class 2 Medical Examination conducted by a DGCA-approved medical examiner.",
      },
    ],

    about: {
      description: `The Private Pilot License training program is designed for aviation enthusiasts who wish to experience the joy of flying. This program focuses on developing strong flying fundamentals, navigation skills, and communication abilities while ensuring international aviation standards are met.`,

      components: [
        {
          title: "Flight Training",
          text: "Minimum of 40 hours of flight training including dual instruction and solo flying.",
        },
        {
          title: "Theory Examinations",
          text: "Subjects include Air Regulations, Meteorology, Navigation, Aircraft Systems, and Flight Planning.",
        },
        {
          title: "Cross-Country Flying",
          text: "Planned and executed flights beyond a specified distance to build navigation skills.",
        },
        {
          title: "Radio Telephony Communication",
          text: "Training for effective air-ground communication and obtaining RTR license.",
        },
        {
          title: "ICAO Language Proficiency",
          text: "Demonstration of ICAO English language proficiency at an operational level.",
        },
      ],
    },

    documents: [
      {
        title: "Educational Qualifications",
        text: "High school or college certificates or academic transcripts.",
      },
      {
        title: "Identification Documents",
        text: "Valid passport or other government-issued identification document.",
      },
    ],
  },
  {
    id: 3,
    title: "Flight Instructor’s Rating",
    number: "03",
    description:
      "A Flight Instructor Rating (FIR) qualifies a pilot to train aspiring pilots. It marks a key milestone in a pilot’s career by allowing them to pass on expertise while strengthening aviation safety standards.",

    requirements: [
      {
        label: "Commercial Pilot License (CPL) :",
        value: "Must hold a valid CPL issued by the DGCA.",
      },
      {
        label: "Medical Fitness :",
        value:
          "Class 1 Medical Examination conducted by a DGCA-approved medical examiner.",
      },
      {
        label: "Flight Experience :",
        value:
          "Minimum of 200 flight hours including 100 hours as Pilot-in-Command (PIC) and 25 hours of cross-country flying.",
      },
    ],

    about: {
      description: `A Flight Instructor Rating (FIR) enables licensed pilots to provide flight training to aspiring aviators. It is a crucial career progression step that focuses on developing instructional skills, leadership, and decision-making while contributing to safe and structured pilot training.`,

      components: [
        {
          title: "Training Program",
          text: "Focuses on teaching methodologies, instructional techniques, flight training procedures, and aviation safety.",
        },
        {
          title: "Knowledge Requirements",
          text: "Covers aerodynamics, flight operations, human factors, teaching methods, and student evaluation techniques.",
        },
        {
          title: "Practical Training",
          text: "Hands-on experience in delivering flight instruction, conducting ground briefings, and assessing student performance.",
        },
        {
          title: "Examinations",
          text: "Includes written exams on aviation theory and instruction methods, along with practical flight and teaching assessments.",
        },
      ],
    },

    documents: [
      {
        title: "Logbook Records",
        text: "Logbook entries reflecting total flight hours, PIC hours, cross-country experience, and relevant flight details.",
      },
      {
        title: "Educational Qualifications",
        text: "High school or college certificates or academic transcripts.",
      },
      {
        title: "Identification Documents",
        text: "Valid passport or other government-issued identification document.",
      },
    ],
  },
  {
    id: 4,
    title: "Multi-Engine Rating",
    number: "04",
    description:
      "Multi-Engine Rating qualifies a pilot to operate aircraft with more than one engine. It is typically pursued after obtaining a Private or Commercial Pilot License to advance flying skills and operational capability.",

    requirements: [
      {
        label: "Pilot License :",
        value:
          "Hold a valid Commercial Pilot License (CPL) or Private Pilot License (PPL) issued by the DGCA or an equivalent aviation authority.",
      },
      {
        label: "Total Flight Experience :",
        value:
          "Minimum flight experience of approximately 185 total flight hours.",
      },
      {
        label: "Medical Certificate :",
        value:
          "Valid medical certificate appropriate for the category of aircraft being operated.",
      },
    ],

    about: {
      description: `Multi-Engine Rating is an advanced qualification that allows pilots to fly aircraft equipped with more than one engine. This training enhances technical knowledge, decision-making skills, and safety awareness required for complex aircraft operations.`,

      components: [
        {
          title: "Ground Training",
          text: "Covers multi-engine aircraft systems, aerodynamics, performance calculations, emergency procedures, and operational considerations specific to multi-engine aircraft.",
        },
        {
          title: "Flight Training",
          text: "Includes practical instruction on normal operations, engine failure procedures, single-engine operations, and asymmetric flight handling techniques.",
        },
      ],
    },

    documents: [
      {
        title: "Logbook Records",
        text: "Logbook entries showing total flight hours, PIC hours, cross-country experience, and relevant multi-engine flight details.",
      },
      {
        title: "Educational Qualifications",
        text: "High school or college certificates or academic transcripts.",
      },
      {
        title: "Identification Documents",
        text: "Valid passport or other government-issued identification document.",
      },
    ],
  }

];


export default function PilotTrainingPage() {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen w-full overflow-hidden bg-black">

        {/* Background Image */}
        <Image
          src="/pilots.jpg"
          alt="Pilot Training"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay (IMPORTANT) */}
        <div className="absolute inset-0 bg-black/60" />

        <Navbar />

        {/* MAIN GRID */}
        <div className="relative z-10 pt-32 grid grid-cols-1 lg:grid-cols-[30%_70%] min-h-screen">

          {/* LEFT MENU */}
          <div className="flex flex-col justify-center pl-12 space-y-14">
            {courses.map((item, idx) => {
              const isActive = active === idx;

              return (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className="group flex items-center gap-6 text-left"
                >
                  <motion.span
                    animate={{
                      rotate: isActive ? -45 : 0,
                      opacity: isActive ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.25 }}
                    className="text-3xl text-white"
                  >
                    <FiArrowRight />
                  </motion.span>

                  <span
                    className={`text-[22px] font-inter transition-colors
                      ${isActive ? "text-white" : "text-white/70 group-hover:text-white"}
                    `}
                  >
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex items-end justify-end pr-0 pl-6 lg:pl-10 h-full">

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="
  bg-white text-black 
  rounded-tl-[60px] 
  shadow-xl
  p-16 
  pt-24
  overflow-y-auto
  w-full lg:w-[95%]
"


              >
                <h1 className="text-[100px] font-montserrat font-bold leading-none">
                  {courses[active].number}
                </h1>

                <div className="mt-4 mb-10 border-t-2 border-dashed border-gray-400 w-[85%]" />

                <h2 className="text-3xl font-monda font-semibold flex items-center gap-3">
                  {courses[active].title}
                  <FaPlaneDeparture className="text-[#C49A60]" />
                </h2>

                <p className="mt-5 text-lg text-[#444] font-inter leading-relaxed">
                  {courses[active].description}
                </p>

                <h3 className="mt-10 text-2xl font-monda font-semibold">
                  Basic Requirement
                </h3>

                <div className="mt-6 space-y-6 text-lg font-inter">
                  {courses[active].requirements.map((req, i) => (
                    <p key={i}>
                      <strong>{req.label}</strong> {req.value}
                    </p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ABOUT PROGRAM SECTION */}
      <section className="relative bg-white text-black py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[65%_35%] gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Pill */}
            <div className="inline-block mb-8 px-6 py-2 border-2 border-dashed border-transparent bg-gold-radial bg-clip-border rounded-full">
              <span className="font-monda text-sm tracking-wide bg-gold-radial text-white bg-clip-text">
                ABOUT PROGRAM
              </span>
            </div>

            <p className="font-inter text-lg text-[#333] leading-relaxed max-w-3xl">
              {courses[active].about.description}
            </p>

            <h3 className="mt-10 mb-6 font-monda text-xl font-semibold">
              Program Components
            </h3>

            <ul className="space-y-6 font-inter text-lg text-[#333]">
              {courses[active].about.components.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="mt-2 w-2 h-2 bg-black rounded-full" />
                  <p>
                    <strong>{item.title} :</strong> {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            key={`docs-${active}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="hidden lg:block absolute -left-8 top-0 h-full border-l-2 border-dotted border-transparent bg-gold-radial bg-clip-border" />

            <div className="bg-gold-radial text-black text-white rounded-lg p-10 h-full">
              <h3 className="font-monda text-2xl mb-10">
                Document Required
              </h3>

              <ul className="space-y-8 font-inter text-lg">
                {courses[active].documents.map((doc, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-2 w-2 h-2 bg-white rounded-full" />
                    <p>
                      <strong>{doc.title} :</strong> {doc.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>



      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919355277747"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center hover:scale-110 transition">
          <i className="ri-whatsapp-line text-white text-3xl" />
        </div>
      </a>
    </>
  );
}
