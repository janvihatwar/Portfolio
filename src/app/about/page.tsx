"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
  <main className="bg-[#fafafa] dark:bg-[#111111] px-3 sm:px-4 md:px-6 lg:px-8 pt-10 sm:pt-12 md:pt-14 pb-16 sm:pb-20 md:pb-24">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto"
      >
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          
          {/* About Me Section */}
          <div className="prose dark:prose-invert">
            <h3 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-10 text-[#1a1a1a] dark:text-white">
              About Me
              <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-[#1a1a1a] dark:bg-white mt-1.5 sm:mt-2 rounded-full" />
            </h3>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-[#666666] dark:text-[#888888]">
              <p>
                I enjoy working on real-world applications and understanding how systems behave beyond just the surface.
                Rather than only building new features, I like improving existing ones—making them cleaner, more reliable,
                and easier to maintain over time.
              </p>

              <p>
                Through my work, I’ve spent a lot of time upgrading and refining applications, which has helped me develop
                a mindset focused on structure, performance, and long-term thinking. I’m particularly interested in how
                small improvements in code and architecture can make a big difference at scale.
              </p>

              <p>
                I also have experience teaching programming, which has strengthened my fundamentals and improved how I
                approach problem-solving. Explaining concepts to others has made me more clear, patient, and detail-oriented
                in my own work.
              </p>

              <p>
                I’m someone who enjoys the process of figuring things out—debugging, learning, and gradually improving with
                every project. For me, growth comes from consistent effort and curiosity.
              </p>
            </div>
          </div>

        </div>
      </motion.section>
    </main>
  );
}