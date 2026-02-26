"use client";

import PeelCard from "./PeelCard";

export const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#F7F5F0] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-10">

        {/* LEFT SECTION - Full width on mobile, 30% on desktop */}
        <div className="w-full lg:w-[30%] text-center lg:text-left">
          <p className="text-[#C49A60] tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] font-monda text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6">
            WHY CHOOSE US
          </p>

          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-[1.15] text-[#1A1A1A] mb-6 sm:mb-8 md:mb-10">
            Choose ATC <br />
            for
            Your Aviation <br />
            Success
          </h2>

          <p className="font-cormorant text-gray-600 text-base sm:text-lg leading-relaxed mx-auto lg:mx-0 max-w-md lg:max-w-none">
            ATC offers expert training, global exposure,
            and complete placement support to help you build
            a successful career in the aviation industry.
          </p>
        </div>

        {/* RIGHT SECTION - Grid items */}
        <div className="w-full lg:w-[70%]">

          {/* GRID - Responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md: lg:gap-x-16 xl:gap-x-8 lg:gap-y-16 xl:gap-y-20">

            <PeelCard
              front={
                <div className="text-center">
                  <h3 className="text-4xl text-black font-cormorant">01</h3>
                  <h4 className="text-2xl text-black font-cormorant">DGCA-Approved Training</h4>
                </div>
              }
              back={
                <p className="text-white font-cormorant text-sm sm:text-base leading-relaxed">
                  We provide courses that meet DGCA standards for top-notch aviation education.
                </p>
              }
            />

            <PeelCard
              front={
                <div className="text-center">
                  <h3 className="text-4xl text-black font-cormorant">02</h3>
                  <h4 className="text-2xl text-black font-cormorant">Industry-Relevant Curriculum</h4>
                </div>
              }
              back={
                <p className="text-white font-cormorant text-sm sm:text-base leading-relaxed">
                  Stay ahead with courses designed around aviation industry trends.
                </p>
              }
            />

            <PeelCard
              front={
                <div className="text-center">
                  <h3 className="text-4xl text-black font-cormorant">03</h3>
                  <h4 className="text-2xl text-black font-cormorant">Global Opportunities</h4>
                </div>
              }
              back={
                <p className="text-white font-cormorant text-sm sm:text-base leading-relaxed">
                  Gain opportunities through worldwide aviation partnerships.
                </p>
              }
            />

            <PeelCard
              front={
                <div className="text-center">
                  <h3 className="text-4xl text-black font-cormorant">04</h3>
                  <h4 className="text-2xl text-black font-cormorant">Hands-On Training</h4>
                </div>
              }
              back={
                <p className="text-white font-cormorant text-sm sm:text-base leading-relaxed">
                  Experience real-time flying and practical operations.
                </p>
              }
            />

            <PeelCard
              front={
                <div className="text-center">
                  <h3 className="text-4xl text-black font-cormorant">05</h3>
                  <h4 className="text-2xl text-black font-cormorant">Comprehensive Support</h4>
                </div>
              }
              back={
                <p className="text-white font-cormorant text-sm sm:text-base leading-relaxed">
                  From interview prep to full guidance — we support your journey.
                </p>
              }
            />

            <PeelCard
              front={
                <div className="text-center">
                  <h3 className="text-4xl text-black font-cormorant">06</h3>
                  <h4 className="text-2xl text-black font-cormorant">Personalized Learning</h4>
                </div>
              }
              back={
                <p className="text-white font-cormorant text-sm sm:text-base leading-relaxed">
                  Customized training programs tailored to your aviation goals.
                </p>
              }
            />



          </div>

        </div>

      </div>
    </section>
  );
};