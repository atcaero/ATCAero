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
    title: "Cabin Crew Training Program",
    number: "05",
    description:
      "A premium cabin crew training program designed to prepare aspiring aviation professionals for global airline careers through safety mastery, refined hospitality, and elite personal presentation.",

    requirements: [
      { label: "Age :", value: "18 – 27 years." },
      {
        label: "Educational Qualification :",
        value: "Minimum 10+2 in any discipline.",
      },
      {
        label: "Height Requirements :",
        value:
          "Female: Minimum 155 cm | Male: Minimum 170 cm.",
      },
      {
        label: "Arm Reach :",
        value: "210 cm (on tiptoes).",
      },
      {
        label: "Vision :",
        value: "As per airline medical standards.",
      },
      {
        label: "Marital Status :",
        value: "Unmarried as per prevailing airline norms.",
      },
      {
        label: "Languages :",
        value:
          "Proficiency in English and Hindi (additional languages preferred).",
      },
    ],

    about: {
      description: `The Cabin Crew Training Program is curated for individuals who aspire to represent leading airlines with confidence, elegance, and professionalism. The curriculum blends international aviation standards with hospitality excellence, ensuring graduates are industry-ready from day one.`,

      components: [
        {
          title: "International Cabin Crew Curriculum",
          text: "Training aligned with global airline service and safety standards.",
        },
        {
          title: "Aircraft Safety & Emergency Procedures",
          text: "Hands-on drills and real-world aviation safety scenarios.",
        },
        {
          title: "Passenger Service Excellence",
          text: "World-class inflight etiquette and luxury hospitality training.",
        },
        {
          title: "Aviation Communication",
          text: "Announcement delivery, voice clarity, and professional communication mastery.",
        },
        {
          title: "Grooming & Image Enhancement",
          text: "Styling, personal presentation, posture, and commanding body language.",
        },
        {
          title: "Interview Preparation",
          text: "Mock airline assessments and one-on-one coaching sessions.",
        },
        {
          title: "Personality Development",
          text: "Confidence building, leadership presence, and professional refinement.",
        },
      ],
    },

    documents: [
      {
        title: "Educational Certificates",
        text: "10+2 or equivalent academic qualification documents.",
      },
      {
        title: "Identification Documents",
        text: "Valid passport or government-issued ID proof.",
      },
      {
        title: "Medical Fitness Record",
        text: "Medical clearance meeting airline health standards.",
      },
    ],
  },
];



export default function PilotTrainingPage() {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen w-full overflow-hidden bg-black">

        {/* Background Image */}
        <Image
          src="/cabin-crew.jpg"
          alt="Cabin Crew Training"
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
                  {courses[active].id}
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
              <span className="font-monda text-sm tracking-wide bg-gold-radial text-white bg-clip-text ">
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
