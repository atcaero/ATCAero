"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plane } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="relative min-h-screen w-full flex items-center justify-center px-6 lg:px-20 pt-24">

        {/* Background Glow */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C49A60] blur-[160px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2C3E91] blur-[180px] rounded-full" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-transparent bg-gold-radial bg-clip-border/40 bg-white/5"
          >
            <Plane className="text-gold" size={18} />
            <span className="text-sm tracking-[0.3em] uppercase text-white/80 font-montserrat">
              Under Development
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-10 text-4xl md:text-6xl font-cormorant leading-tight"
          >
            This Page is <span className="text-gold">Coming Soon</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-white/70 font-inter max-w-2xl mx-auto"
          >
            Currently boarding. We’ll be ready to fly soon.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/"
              className="px-8 py-3 rounded-xl bg-gold-radial text-black font-montserrat font-semibold hover:opacity-90 transition"
            >
              Back to Home
            </Link>

            <Link
              href="/contact"
              className="px-8 py-3 rounded-xl border border-white/20 text-white font-montserrat hover:border-gold hover:text-gold transition"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
