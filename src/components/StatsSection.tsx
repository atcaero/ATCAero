import {
  LiaCertificateSolid,
  LiaGlobeSolid,
  LiaPaperPlaneSolid,
  LiaMapSolid,
} from "react-icons/lia";
import CountUp from "./CountUp";

export const StatsSection = () => {
  return (
    <section  className="relative w-full bg-transparent py-12 sm:py-16 md:py-20 lg:py-24 bg-red">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16 text-center">

        {/* 1 - Professional Pilots */}
        <div className="flex flex-col items-center">

          <h3 className="font-montserrat font-bold text-4xl sm:text-5xl md:text-6xl text-white">
            <CountUp end={89} /><span className="text-gold text-2xl sm:text-3xl md:text-4xl">+</span>
          </h3>

          <LiaCertificateSolid
            size={65}
            className="text-gold pb-2 sm:w-[75px] sm:h-[75px] md:w-[85px] md:h-[85px]"
          />

          <p className="font-montserrat text-white/80 text-lg mt-2">
            Professional Pilots
          </p>

          <div className="h-[2px] sm:h-[3px] w-32 sm:w-36 md:w-40 bg-gold-radial mt-4 sm:mt-5 md:mt-6" />
        </div>

        {/* 2 - World Airports */}
        <div className="flex flex-col items-center">

          <h3 className="font-montserrat font-semibold text-4xl sm:text-5xl md:text-6xl text-white">
            <CountUp end={289} /><span className="text-gold text-2xl sm:text-3xl md:text-4xl">+</span>
          </h3>

          <LiaGlobeSolid
            size={65}
            className="text-gold2 pb-2 sm:w-[75px] sm:h-[75px] md:w-[85px] md:h-[85px]"
          />

          <p className="font-montserrat text-white/80 text-lg mt-2">
            World Airports
          </p>

          <div className="h-[2px] sm:h-[3px] w-32 sm:w-36 md:w-40 bg-gold-radial mt-4 sm:mt-5 md:mt-6" />
        </div>

        {/* 3 - Jet Airplanes */}
        <div className="flex flex-col items-center">

          <h3 className="font-montserrat font-semibold text-4xl sm:text-5xl md:text-6xl text-white">
            <CountUp end={59} /><span className="text-gold text-2xl sm:text-3xl md:text-4xl">+</span>
          </h3>

          <LiaPaperPlaneSolid
            size={65}
            className="text-gold2 pb-2 sm:w-[75px] sm:h-[75px] md:w-[85px] md:h-[85px]"
          />

          <p className="font-montserrat text-white/80 text-lg mt-2">
            Jet Airplanes
          </p>

          <div className="h-[2px] sm:h-[3px] w-32 sm:w-36 md:w-40 bg-gold-radial mt-4 sm:mt-5 md:mt-6" />
        </div>

        {/* 4 - Directions */}
        <div className="flex flex-col items-center">

          <h3 className="font-montserrat font-semibold text-4xl sm:text-5xl md:text-6xl text-white">
            <CountUp end={129} /><span className="text-gold text-2xl sm:text-3xl md:text-4xl">+</span>
          </h3>

          <LiaMapSolid
            size={65}
            className="text-gold2 pb-2 sm:w-[75px] sm:h-[75px] md:w-[85px] md:h-[85px]"
          />

          <p className="font-montserrat text-white/80 text-lg mt-2">
            Directions
          </p>

          <div className="h-[2px] sm:h-[3px] w-32 sm:w-36 md:w-40 bg-gold-radial mt-4 sm:mt-5 md:mt-6" />
        </div>

      </div>
    </section>
  );
};
