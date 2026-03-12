"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Course = () => {
  const [openCard, setOpenCard] = useState("pilot");

  const cards = [
    {
      id: "pilot",
      title: "Pilot Training",
      desc: "Comprehensive training for aspiring pilots, including DGCA subjects, flying experience, and foreign license conversion for global opportunities.",
      bg: "bg-black",
      text: "text-white",
    },
    {
      id: "cabin",
      title: "Cabin Crew & Hospitality",
      desc: "Equip yourself with essential skills in grooming, safety, and customer service.",
      bg: "bg-gold",
      text: "text-black",
    },
    {
      id: "drone",
      title: "Drone Pilot Training",
      desc: "Learn to operate drones with hands-on training focusing on safety and regulations.",
      bg: "bg-black",
      text: "text-white",
    },
    {
      id: "travel",
      title: "Travel & Tourism",
      desc: "Master e-ticketing, airside operations, and terminal management.",
      bg: "bg-gold",
      text: "text-black",
    },
    {
      id: "airport",
      title: "Airport Operations Courses",
      desc: "Specialized training in fire fighting, cargo handling, & aviation security.",
      bg: "bg-black",
      text: "text-white",
    },
  ];

  const [collapsedHeight, setCollapsedHeight] = useState(70);
  const [openHeight, setOpenHeight] = useState(320);

  // ✅ Fix resize logic properly
  useEffect(() => {
    const updateHeights = () => {
      if (window.innerWidth < 640) {
        setCollapsedHeight(60); // mobile
        setOpenHeight(280);
      } else if (window.innerWidth < 768) {
        setCollapsedHeight(65); // small tablet
        setOpenHeight(300);
      } else {
        setCollapsedHeight(70); // desktop
        setOpenHeight(320);
      }
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);

    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  return (
    <section id="red-bg" className="bg-red w-full grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="px-6 sm:px-8 md:px-16 lg:px-20 xl:px-20 py-12 sm:py-16 md:py-20 flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold leading-tight text-white">
          Explore Our <br /> Aviation Courses
        </h2>

        <p className="mt-4 sm:mt-5 md:mt-6 text-white leading-relaxed font-inter text-sm sm:text-base md:text-lg max-w-lg">
          Discover a wide range of professional aviation courses including Pilot Training, Cabin
          Crew, Drone Operations, and Airport Management designed to build a successful career in
          aviation.
        </p>

<<<<<<< Updated upstream
        <button className="px-8 sm:px-10 py-3 sm:py-4 mt-8 sm:mt-12 md:mt-16 bg-gold w-full sm:w-64 text-white font-bold font-monda text-xs sm:text-sm uppercase tracking-widest rounded-full shadow-[0_0_25px_rgba(217,167,74,0.4)] hover:scale-105 transition-all duration-300">
          CONTACT US
        </button>
=======
        <Link href="/contact">
          <button className="px-8 sm:px-10 py-3 sm:py-4 mt-8 sm:mt-12 md:mt-16 bg-gold-gradient w-full sm:w-64 text-white font-bold font-monda text-xs sm:text-sm uppercase tracking-widest rounded-full shadow-[0_0_25px_rgba(217,167,74,0.4)] hover:scale-105 transition-all duration-300">
            CONTACT US
          </button>
        </Link>
>>>>>>> Stashed changes
      </div>

      {/* RIGHT SIDE — Tight Accordion Stack */}
      <div className="px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 text-white flex flex-col items-center lg:items-start">
        {/* ✅ wrapper to make STACK PERFECT */}
        <div className="w-full sm:w-[85%] md:w-[80%] flex flex-col gap-0">
          {cards.map((card) => {
            const isOpen = openCard === card.id;

            return (
              <div
  key={card.id}
  onMouseEnter={() => setOpenCard(card.id)} // desktop hover
  onClick={() => setOpenCard(card.id)}      // ✅ mobile + click
  className={`
    ${card.bg} ${card.text}
    rounded-2xl sm:rounded-3xl
    shadow-xl transition-all duration-500 cursor-pointer
    w-full overflow-hidden select-none
    ${isOpen ? "flex flex-col justify-start" : "flex items-center justify-center"}
  `}
  style={{
    height: isOpen ? openHeight : collapsedHeight,
    padding: isOpen ? "20px" : "0px",
    transition: "all 0.4s ease",
    boxShadow: isOpen
      ? "0 20px 40px rgba(0,0,0,0.35)"
      : "0 4px 12px rgba(0,0,0,0.15)",
    zIndex: isOpen ? 20 : 1,
    position: "relative",
  }}
>
  <p
    className={`
      text-center transition-all duration-300
      ${isOpen ? "text-xl sm:text-2xl font-semibold" : "text-sm sm:text-base font-bold"}
    `}
  >
    {card.title}
  </p>

  {isOpen && (
    <p className="mt-2 sm:mt-3 opacity-90 leading-relaxed text-xs sm:text-sm">
      {card.desc}
    </p>
  )}
</div>

            );
          })}
        </div>
      </div>
    </section>
  );
};
