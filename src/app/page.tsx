"use client";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#111111] overflow-hidden">
      
      {/* Subtle Background Gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] 
                      bg-gradient-to-br from-[#00000008] to-transparent
                      dark:from-[#ffffff08] dark:to-transparent
                      rounded-full blur-3xl"
        />
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20 min-h-screen flex items-center"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            
            {/* Name & Description */}
            <div className="space-y-4 sm:space-y-6">
              
              {/* Name + Role */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-[#1a1a1a] dark:text-white">
                  Hi, I&apos;m{" "}
                </span>

                <span className="">
                  <span
                    className="bg-gradient-to-r from-[#1a1a1a] to-[#666666]
                               dark:from-white dark:to-[#888888]
                               text-transparent bg-clip-text"
                  >
                    Janvi
                  </span>
                </span>

                {/* Role Badge */} <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex items-center gap-2 sm:gap-3 mt-4" > <span className="h-px w-4 sm:w-6 md:w-8  bg-[#1a1a1a] dark:bg-white" /> <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-[#666666] dark:text-[#888888] uppercase tracking-wider"> SOFTWARE DEVELOPMENT ENGINEER INTERN </span> </motion.div>
              </h1>

              {/* Description - Structured */}
              <div className="space-y-3">
                <p className="text-sm sm:text-base md:text-lg text-[#666666] dark:text-[#888888] max-w-lg">
                  Final-year BTech student working as a SDE Intern, building and improving real-world applications.
                </p>

                {/* <p className="text-sm sm:text-base md:text-lg text-[#666666] dark:text-[#888888] max-w-lg">
                  I focus on improving existing systems by upgrading and optimizing code for better performance, 
                  scalability, and maintainability.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-[#666666] dark:text-[#888888] max-w-lg">
                  I enjoy solving real-world engineering problems and continuously learning modern technologies.
                </p> */}
              </div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <motion.div whileHover={{ scale: 1.02 }} className="group relative">
                <div className="flex space-x-3 sm:space-x-4">
                  
                  <Link
                    href="/contact"
                    className="relative inline-flex items-center gap-1.5 sm:gap-2 
                             px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3
                             bg-[#1a1a1a] dark:bg-white
                             text-white dark:text-[#1a1a1a]
                             text-xs sm:text-sm md:text-base
                             rounded-md sm:rounded-lg group-hover:rounded-xl
                             transition-all duration-300"
                  >
                    Get in Touch
                    <BsArrowRight className="text-xs sm:text-sm md:text-base group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/JanviHatwar_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-1.5 sm:gap-2
                             px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3
                             border border-[#1a1a1a] dark:border-white
                             text-[#1a1a1a] dark:text-white
                             text-xs sm:text-sm md:text-base
                             rounded-md sm:rounded-lg group-hover:rounded-xl
                             transition-all duration-300"
                  >
                    Resume
                  </Link>

                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Final Tagline */}
          <motion.h2
            className="
              text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
              xl:text-6xl 2xl:text-7xl 
              font-light flex flex-col 
              max-md:text-4xl  
              lg:items-end max-lg:items-center 
              gap-2 sm:gap-3 lg:gap-4 text-center
            "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div>
              <span className="text-[#1a1a1a] dark:text-white">
                Always learning.
              </span>
            </div>

            <div>
              <span className="text-[#1a1a1a] dark:text-white">
                Always improving.
              </span>
            </div>
          </motion.h2>

        </div>
      </motion.section>
    </main>
  );
}