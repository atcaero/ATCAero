"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export const AdvantagesSection = () => {
    const advantages = [
        {
            title: "Expert Instructors",
            description: "Learn from industry veterans with decades of experience in aviation and air traffic control.",
        },
        {
            title: "State-of-the-Art Simulators",
            description: "Train on cutting-edge equipment that mirrors real-world ATC environments.",
        },
        {
            title: "Comprehensive Curriculum",
            description: "Our courses cover everything from basic regulations to advanced radar procedures.",
        },
        {
            title: "Career Support",
            description: "We provide dedicated placement assistance to help you launch your career.",
        },
        {
            title: "Global Recognition",
            description: "Our certifications are recognized worldwide, opening doors to international opportunities.",
        },
        {
            title: "Flexible Learning",
            description: "Choose from various schedules and learning modes to fit your lifestyle.",
        },
    ];

    return (
        <section className="w-full bg-black py-16 sm:py-20 md:py-24 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

                <div className="text-center mb-16">
                    <p className="text-[#C49A60] tracking-widest font-monda text-sm sm:text-base uppercase mb-4">
                        Why We Are The Best
                    </p>
                    <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl text-white">
                        Advantages of ATC
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {advantages.map((adv, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-start p-6 border border-[#C49A60]/20 rounded-xl hover:border-[#C49A60] transition-colors duration-300 bg-[#111]"
                        >
                            <CheckCircle className="w-10 h-10 text-[#C49A60] mb-4" />
                            <h3 className="text-2xl font-cormorant text-white mb-3">
                                {adv.title}
                            </h3>
                            <p className="text-gray-400 font-montserrat leading-relaxed">
                                {adv.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
