"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", phone: "", email: "", course: "", message: "" }); // Reset form
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending form:", error);
      alert("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full relative bg-black text-white font-inter">
      {/* 1. BACKGROUND IMAGE & OVERLAY */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/testimonials.jpg"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* 2. PAGE CONTENT */}
      <div className="relative z-10">
        <Navbar />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-44 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT SIDE — FORM */}
          <div>
            <h1 className="text-5xl font-cormorant font-semibold">
              Get in <span className="text-gold">Touch Now!</span>
            </h1>

            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              {/* ROW 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input
                  name="firstName"
                  placeholder="Enter Your First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Input
                  name="lastName"
                  placeholder="Enter Your Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>


              {/* ROW 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* ROW 4 - Course Selection */}
              <div className="w-full">
                <Select
                  name="course"
                  placeholder="Select Course Type"
                  value={formData.course}
                  onChange={handleChange}
                  options={[
                    "Pilot Training",
                    "Cabin Crew",
                    "Drone Training",
                    "Airport Operations",
                  ]}
                />
              </div>
              {/* MESSAGE BOX */}
              <textarea
                name="message"
                rows={6}
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#111]/80 backdrop-blur-sm border border-[#333] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
              />

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="
                  w-full bg-gold
                  text-black font-monda text-lg py-4 rounded-xl shadow 
                  hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* RIGHT SIDE — CONTACT INFO */}
          <div className="pt-4">
            <div className="inline-flex items-center gap-2 border border-[#333] bg-black/30 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gold">
              <span className="text-lg font-bold">✦</span> Contact
            </div>

            <h2 className="text-4xl lg:text-5xl font-cormorant font-semibold mt-6 leading-tight">
              Get In Touch <br />
              <span className="text-gold">With ATC</span>
            </h2>

            {/* PHONE */}
            <div className="mt-10 space-y-3">
              <p className="text-xl font-semibold">Contact Us</p>
              <div className="flex items-center gap-4 text-gray-300">
                <Phone className="text-gold" size={28} />
                <div className="leading-relaxed text-lg">
                  +91 9355133320 <br />
                  +91 9355277747
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="mt-10 space-y-3">
              <p className="text-xl font-semibold">Email Us At</p>
              <div className="flex items-center gap-4">
                <Mail className="text-gold" size={28} />
                <p className="text-lg font-semibold text-white">
                  info.atcaviation@atcaero.in
                </p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="mt-10 space-y-3">
              <p className="text-xl font-semibold">Location</p>
              <div className="flex items-start gap-4">
                <MapPin className="text-gold" size={28} />
                <p className="text-lg leading-relaxed text-gray-300">
                  Plot No. 20, Block H-1/A <br />
                  Sector-63, Noida, 201301
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

/* ---------- HELPER COMPONENTS ---------- */

interface InputProps {
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ placeholder, name, value, onChange }: InputProps) {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        w-full bg-[#111]/80 backdrop-blur-sm border border-[#333] rounded-xl px-4 py-3 
        text-white placeholder-gray-500
        focus:border-gold focus:ring-1 focus:ring-gold outline-none
      "
    />
  );
}

interface SelectProps {
  placeholder: string;
  options: string[];
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Select({ placeholder, options, name, value, onChange }: SelectProps) {
  return (
    <div className="relative w-full">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="
          w-full bg-[#111]/80 backdrop-blur-sm border border-[#333] rounded-xl px-4 py-3
          text-white placeholder-gray-500 appearance-none cursor-pointer
          focus:border-gold focus:ring-1 focus:ring-gold outline-none
        "
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt} className="bg-[#111] text-white">
            {opt}
          </option>
        ))}
      </select>

      {/* Custom Arrow Icon */}
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gold">
        <ChevronDown size={20} />
      </div>
    </div>
  );
}
