"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaFacebookF, FaInstagram  } from "react-icons/fa";
import { FiMapPin  } from "react-icons/fi";


export default function Footer() {
  return (
    <footer className="w-full text-white">
      {/* TOP LINKS */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-monda">About</h3>
            <div className="space-y-3 text-white/90 font-inter">
              <Link href="/about" className="block hover transition">
                About ATC
              </Link>
              <Link href="/team" className="block hover transition">
                Our team
              </Link>
              <Link href="/gallery" className="block hover transition">
                Gallery
              </Link>
              <Link href="/advantages" className="block hover transition">
                Advantages of ATC
              </Link>
            </div>
          </div>

          {/* Facilities */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-monda">Facilities</h3>
            <div className="space-y-3 text-white/90 font-inter">
              <Link href="/fleet" className="block hover transition">
                Fleet
              </Link>
              <Link href="/campus" className="block hover transition">
                Campus
              </Link>
              <Link href="drome" className="block hover transition">
              drome
              </Link>
              <Link href="/statistics" className="block hover transition">
                Statistics
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-monda">Quick Links</h3>
            <div className="space-y-3 font-inter">
              <Link href="/brochure" className="block hover:opacity-90 transition">
                Download Brochure
              </Link>
              <Link href="/privacy" className="block hover transition text-white/90">
                Privacy Policy
              </Link>
              <Link href="/contact" className="block hover transition text-white/90">
                Contact us
              </Link>
              <Link href="/coming-soon" className="block hover:opacity-90 transition text-white/90">
                Careers
              </Link>
            </div>
          </div>

          {/* External Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-monda">External Links</h3>
            <div className="space-y-3 font-inter">
              <a
                href="https://dgca.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="block hover:opacity-90 transition"
              >
                DGCA
              </a>
              <a
                href="https://www.dgca.gov.in/digigov-portal/jsp/dgca/common/login.jsp"
                target="_blank"
                rel="noreferrer"
                className="block hover:opacity-90 transition"
              >
                eGCA
              </a>

              <a
                href="https://www.dgca.gov.in/digigov-portal/?baseLocale=en_US?page=jsp/dgca/InventoryList/personal/medical/class1/Class1.pdf"
                className="block hover:opacity-90 transition pt-3"
                target="_blank"
                rel="noreferrer"
              >
                Medical-Class 1
              </a>
              <a
                href="https://www.dgca.gov.in/digigov-portal/?baseLocale=en_US?page=jsp/dgca/InventoryList/personal/medical/class2/Class2.pdf"
                className="block hover:opacity-90 transition"
                target="_blank"
                rel="noreferrer"
              >
                Medical-Class 2
              </a>
            </div>
          </div>

          {/* Corporate Office */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-monda">Corporate Office</h3>

            <div className="text-white/90 font-inter space-y-4 leading-relaxed">
              Plot No. 16, Block H-1/A <br />
                  Sector-63, Noida, 161301<br />

              <p>   <br/>
                <h3 className="text-lg font-semibold font-monda">Contact Number:</h3> 
                +91 9355133316<br />
                  +91 9355277747
              </p>

              <p>
                <h3 className="text-lg font-semibold font-monda">Email:</h3>
                <span className="font-semibold">info.atcaviation@gmail.com</span>
              </p>
            </div>
          </div>

        </div>

        {/* CENTER LOGO + SOCIAL */}
        <div className="flex flex-col items-center justify-center pt-14 pb-10">
          {/* Logo */}
          <div className="opacity-90">
            <Image
              src="/logo.png"
              alt="ATC"
              width={116}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Social Icons */}
          {/* Social Icons */}
<div className="flex items-center gap-5 mt-6">
  <SocialIcon
    href="#"
    icon={<FaLinkedinIn size={16} />}
    bg="bg-[#0A66C2]/80"   // LinkedIn Blue
  />
  <SocialIcon
    href="#"
    icon={<FaInstagram size={16} />}
    bg="bg-[#E1306C]/80"   // Instagram Red/Pink
  />
  <SocialIcon
    href="#"
    icon={<FaFacebookF size={16} />}
    bg="bg-[#1877F2]/80"   // Facebook Blue
  />
  <SocialIcon
    href="#"
    icon={<FiMapPin   size={16} />}
    bg="bg-[#FF0000]/80"   // YouTube Red
  />
</div>

        </div>
      </div>
    </footer>
  );
}

/* ---------- Social Button ---------- */
function SocialIcon({
  href,
  icon,
  bg,
}: {
  href: string;
  icon: React.ReactNode;
  bg: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`
        w-8 h-8 rounded-full ${bg}
        flex items-center justify-center
        hover:scale-110 transition
        shadow-md
        text-white
      `}
    >
      {icon}
    </a>
  );
}
