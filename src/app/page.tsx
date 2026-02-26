import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { Course } from "../components/Course";
import { AboutSection } from "../components/AboutSection";
import { StatsSection } from "../components/StatsSection";
import FAQ from "../components/FAQ"
import { WhyChooseUs } from "../components/WhyChooseUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-white font-sans bg-black">

      <Navbar />

      <HeroSection />
      <div
        className="
    bg-red 
    rounded-t-[90px] 
    mt-[-40px] 
    pt-24 
    pb-10
    relative z-20
  "
      >
        <Course />
      </div>

      <AboutSection />
      <WhyChooseUs />
      <FAQ />


      <Footer />
    </div>
  );
}
