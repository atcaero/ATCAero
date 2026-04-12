"use client";

import Image from "next/image";
import FlipCard from "./FlipCard";
import { StatsSection } from "./StatsSection";

export const AboutSection = () => {
  return (
    <section
      id="black-bg"
      className="
        w-full 
        bg-fixed bg-center bg-cover
        py-16 sm:py-20 md:py-24 lg:py-32 
        relative
      "
      style={{ backgroundImage: "url('/pilots.jpg')" }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-center">
          
          {/* LEFT TEXT CONTENT */}
          <div className="text-white order-1 text-center lg:text-left">
            <p className="text-gold font-bold tracking-[0.2em] sm:tracking-[0.25em] font-montserrat text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6">
              ABOUT ATC
            </p>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-[1.1] font-semibold mb-6 sm:mb-8 md:mb-10">
              Your Trusted <br />
              Partner in <br />
              Aviation Training
            </h2>

            <p className="font-inter text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Aviation Trainings Center is a premier aviation training institute offering
              expert-led programs in Pilot Training, Cabin Crew, Drone Operations,
              and Airport Management with DGCA-approved curriculum and global
              affiliations.
            </p>

            <button
              className="
                mt-8 sm:mt-10 md:mt-12 px-6 sm:px-8 py-3 sm:py-4 
                font-montserrat text-sm sm:text-base md:text-lg
                border border-gold text-gold rounded-md
                hover:bg-gold-radial hover:text-black transition
                w-full sm:w-auto
              "
            >
              READ MORE
            </button>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="relative flex justify-center lg:justify-end order-2">
            <div className="relative w-full max-w-[500px] lg:max-w-none">
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 z-20">

                {/* BOX 1 */}
                <FlipCard>
                  <div
                    className="
                      bg-gold-radial text-black
                      w-full lg:w-[380px] xl:w-[440px]
                      min-h-[110px] sm:min-h-[120px] md:min-h-[130px]
                      rounded-2xl sm:rounded-3xl shadow-xl
                      px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6
                      flex flex-col justify-center
                    "
                  >
                    <h3 className="text-lg sm:text-xl md:text-2xl font-montserrat font-semibold">
                      <span className="text-red text-base sm:text-lg md:text-xl p-1 sm:p-2">
                        ✔
                      </span>
                      Expertise
                    </h3>
                    <p className="pl-6 sm:pl-7 md:pl-8 text-black/70 font-inter leading-relaxed text-xs sm:text-sm md:text-[15px] mt-1">
                      Learn from certified and experienced instructors.
                    </p>
                  </div>
                </FlipCard>

                {/* BOX 2 */}
                <FlipCard>
                  <div
                    className="
                      bg-gold-radial text-black
                      w-full lg:w-[380px] xl:w-[440px]
                      min-h-[110px] sm:min-h-[120px] md:min-h-[130px]
                      rounded-2xl sm:rounded-3xl shadow-xl
                      px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6
                      flex flex-col justify-center
                    "
                  >
                    <h3 className="text-lg sm:text-xl md:text-2xl font-montserrat font-semibold">
                      <span className="text-red text-base sm:text-lg md:text-xl p-1 sm:p-2">
                        ✔
                      </span>
                      Placement
                    </h3>
                    <p className="pl-6 sm:pl-7 md:pl-8 text-black/70 font-inter leading-relaxed text-xs sm:text-sm md:text-[15px] mt-1">
                      Get 100% job assistance after training.
                    </p>
                  </div>
                </FlipCard>

                {/* BOX 3 */}
                <FlipCard>
                  <div
                    className="
                      bg-gold-radial text-black
                      w-full lg:w-[380px] xl:w-[440px]
                      min-h-[110px] sm:min-h-[120px] md:min-h-[130px]
                      rounded-2xl sm:rounded-3xl shadow-xl
                      px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6
                      flex flex-col justify-center
                    "
                  >
                    <h3 className="text-lg sm:text-xl md:text-2xl font-montserrat font-semibold">
                      <span className="text-red text-base sm:text-lg md:text-xl p-1 sm:p-2">
                        ✔
                      </span>
                      Global
                    </h3>
                    <p className="pl-6 sm:pl-7 md:pl-8 text-black/70 font-inter leading-relaxed text-xs sm:text-sm md:text-[15px] mt-1">
                      International tie-ups for worldwide opportunities.
                    </p>
                  </div>
                </FlipCard>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="pt-24">
          <StatsSection />
        </div>
    </section>
  );
};
