"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  // New state to track if we are over a red background
  const [isRedBg, setIsRedBg] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  /* ---- Handle Scroll for Logo Change ---- */
  useEffect(() => {
    const handleScroll = () => {
      // Select all sections that have the red background. 
      // (Note: Ideally, change id="red-bg" to className="red-bg-section" in your components for better HTML validity)
      const redSections = document.querySelectorAll('[id="red-bg"]');
      const navbarHeight = 80; // Approximate height of your navbar in pixels

      let isOverRed = false;

      redSections.forEach((section) => {
        if (section instanceof HTMLElement) {
          const rect = section.getBoundingClientRect();

          // Check if the navbar overlaps with the section
          // rect.top < navbarHeight: Section top is above the navbar bottom
          // rect.bottom > 0: Section bottom is below the viewport top
          if (rect.top <= navbarHeight && rect.bottom >= 0) {
            isOverRed = true;
          }
        }
      });

      setIsRedBg(isOverRed);
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---- Close dropdown on outside click ---- */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-6 lg:px-8 py-3 md:py-4"
      >
        {/* Logo - Switch based on isRedBg state */}
        <Link href="/" className="flex-shrink-0">
          <img
            // CHANGE THIS: Replace '/logo-gold.png' with the specific logo file you want on red backgrounds
            src={isRedBg ? "/logo-gold.png" : "/logo.png"}
            className="h-10 md:h-12 w-auto transition-all duration-300"
            alt="Logo"
          />
        </Link>

        {/* DESKTOP NAV — FIXED for md screens */}
        <div
          className="
            hidden md:flex absolute left-1/2 -translate-x-1/2
            px-4 md:px-6 lg:px-8 xl:px-10
            py-3 md:py-3 lg:py-4
            rounded-3xl shadow-xl border border-gold
            bg-black/40 font-montserrat
            items-center 
            space-x-4 md:space-x-4 lg:space-x-7 xl:space-x-8
            max-w-[90%]
          "
        >
          <NavItem label="HOME" href="/" />

          {/* Courses Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onMouseEnter={() => setOpen(true)}
              className="text-white hover:text-gold flex items-center gap-1 text-sm whitespace-nowrap"
            >
              COURSES
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChevronDown size={16} className="text-gold" />
              </motion.div>
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-0 top-full mt-2 w-72 bg-black border border-gold rounded-xl shadow-xl p-5 text-white space-y-4 z-50"
                >
                  <DropItem label="Pilot Training" href="/courses/pilot" />
                  <DropItem label="Cabin Crew & Hospitality" href="/courses/cabinCrew" />
                  <DropItem label="Drone Pilot Training" href="/courses/Drone" />
                  <DropItem label="Travel & Tourism" href="/coming-soon" />
                  <DropItem label="Airport Operation Courses" href="/courses/airport" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavItem label="ABOUT" href="/coming-soon" />
          <NavItem label="GALLERY" href="/coming-soon" />
          <NavItem label="CAREER" href="/coming-soon" />
          <NavItem label="CONTACT" href="/contact" />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(prev => !prev)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-4/5 max-w-sm h-screen bg-black/95 backdrop-blur-xl z-40 pt-20 px-6 flex flex-col space-y-5 md:hidden"
          >
            <MobileNavItem label="HOME" href="/" onClick={() => setMobileMenuOpen(false)} />

            {/* MOBILE COURSES TOGGLE */}
            <div>
              <button
                onClick={() => setMobileCoursesOpen(prev => !prev)}
                className="w-full flex items-center justify-between text-white text-lg border-b border-white/10 pb-3"
              >
                COURSES
                <ChevronDown
                  size={22}
                  className={`text-gold transition-transform ${mobileCoursesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {mobileCoursesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col pl-4 mt-3 space-y-3 border-l-2 border-gold/30"
                  >
                    <MobileCourseLink href="/courses/pilot" label="Pilot Training" closeMenu={() => setMobileMenuOpen(false)} />
                    <MobileCourseLink href="/courses/cabinCrew" label="Cabin Crew & Hospitality" closeMenu={() => setMobileMenuOpen(false)} />
                    <MobileCourseLink href="/courses/Drone" label="Drone Pilot Training" closeMenu={() => setMobileMenuOpen(false)} />
                    <MobileCourseLink href="/coming-soon" label="Travel & Tourism" closeMenu={() => setMobileMenuOpen(false)} />
                    <MobileCourseLink href="/courses/airport" label="Airport Operation Courses" closeMenu={() => setMobileMenuOpen(false)} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <MobileNavItem label="ABOUT" href="/coming-soon" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavItem label="GALLERY" href="/coming-soon" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavItem label="CAREER" href="/coming-soon" onClick={() => setMobileMenuOpen(false)} />
            <MobileNavItem label="CONTACT" href="/contact" onClick={() => setMobileMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* --- SUB COMPONENTS --- */

const NavItem = ({ label, href }: { label: string; href: string }) => (
  <Link href={href}>
    <span className="text-white hover:text-gold transition text-sm cursor-pointer">
      {label}
    </span>
  </Link>
);

const MobileNavItem = ({
  label,
  href,
  onClick
}: {
  label: string;
  href: string;
  onClick: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="block text-white text-lg border-b border-white/10 pb-3 hover:text-gold"
  >
    {label}
  </Link>
);

const DropItem = ({ label, href }: { label: string; href: string }) => (
  <Link href={href} className="block w-full">
    <motion.div
      whileHover={{ x: 6 }}
      className="text-white/90 hover:text-gold cursor-pointer transition-colors"
    >
      {label}
    </motion.div>
  </Link>
);

const MobileCourseLink = ({ label, href, closeMenu }: { label: string; href: string, closeMenu: () => void }) => (
  <Link href={href} onClick={closeMenu} className="block text-white/70 hover:text-gold text-base">
    {label}
  </Link>
);
