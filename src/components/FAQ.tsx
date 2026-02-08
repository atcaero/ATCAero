"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

export default function FAQ() {
  return (
    <section id="red-bg" className="w-full bg-red py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 sm:gap-12 md:gap-16 lg:gap-20">

        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">
          <p className="tracking-[0.25em] text-bold sm:tracking-[0.3em] md:tracking-[0.35em] text-gold uppercase mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm font-monda">
            Frequently Asked Questions
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cormorant leading-tight sm:leading-[1.1] text-white mb-6 sm:mb-7 md:mb-8">
            You Have a <br /> Question?
          </h2>

          <p className="font-inter text-sm sm:text-base md:text-lg text-white max-w-md mx-auto lg:mx-0 leading-relaxed">
            Find answers to the most common questions about our courses,
            eligibility, training process, placements, and enrollment at ATC.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full">

            {/* FAQ ROW 1 */}
            <AccordionItem value="item-1" className="border-b border-[#C49A60] py-3 sm:py-4">
              <AccordionTrigger
                className="
                  text-lg sm:text-xl md:text-2xl lg:text-[26px] font-cormorant text-white
                  w-full flex justify-between items-center
                  hover:no-underline
                  pr-2
                  text-left
                "
              >
                What courses does ATC offer?
              </AccordionTrigger>

              <AccordionContent
  className="
    font-inter text-white text-sm sm:text-base md:text-lg
    overflow-hidden
    data-[state=closed]:animate-accordion-up
    data-[state=open]:animate-accordion-down
    pt-3 sm:pt-4 pr-4 sm:pr-6 md:pr-8 pb-4 sm:pb-5 md:pb-6
    leading-relaxed
  "
>

                We offer Pilot Training, Cabin Crew, Drone Training, Travel & Tourism,
                and Airport Operations courses.
              </AccordionContent>
            </AccordionItem>

            {/* FAQ ROW 2 */}
            <AccordionItem value="item-3" className="border-b border-[#C49A60] py-3 sm:py-4">
              <AccordionTrigger
                className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-cormorant text-white hover:no-underline pr-2 text-left"
              >
                Do you provide placement support after training?
              </AccordionTrigger>

              <AccordionContent className="font-inter text-sm sm:text-base md:text-lg text-white pt-3 sm:pt-4 pr-4 sm:pr-6 md:pr-8 pb-4 sm:pb-5 md:pb-6 leading-relaxed">
                Yes. We offer complete placement assistance and interview preparation.
              </AccordionContent>
            </AccordionItem>

            {/* FAQ ROW 3 */}
            <AccordionItem value="item-4" className="border-b border-[#C49A60] py-3 sm:py-4">
              <AccordionTrigger
                className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-cormorant text-white hover:no-underline pr-2 text-left"
              >
                How can I enroll in a course?
              </AccordionTrigger>

              <AccordionContent className="font-inter text-sm sm:text-base md:text-lg text-white pt-3 sm:pt-4 pr-4 sm:pr-6 md:pr-8 pb-4 sm:pb-5 md:pb-6 leading-relaxed">
                You can enroll online or visit our campus for a counseling session.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </div>
    </section>
  );
}