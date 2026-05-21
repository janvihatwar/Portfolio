"use client";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  const experiences = [
    {
      role: "Software Development Engineer Intern",
      company: "Icertis Solutions Private Limited",
      duration: "Jan 2026 – Present",
      location: "On-Site · Pune",
      stack: [
        "React.js",
        "GitHub Copilot",
        "Enterprise Applications",
      ],
      points: [
        "Working on enterprise-level application development, contributing to React-based UI enhancements and modernizing existing components.",
        "Involved in library upgrades, code optimization, and improving maintainability of large-scale production codebases.",
        "Utilizing GitHub Copilot and internal tools to streamline development workflows and improve productivity.",
      ],
    },

    {
      role: "Full Stack Web Development Intern",
      company: "Primine Software Pvt. Ltd",
      duration: "June 2025 – Sept 2025",
      location: "On-Site · Nagpur",
      stack: ["React.js", "MongoDB"],
      points: [
        "Led a 4-member team to develop a complete ERP system from scratch, handling end-to-end development including requirement analysis, authentication, UI, APIs, and database integration.",
        "Successfully delivered the project within 3 months with efficient team coordination and execution.",
      ],
    },

    {
      role: "Web Development Intern",
      company:
        "Desire4Travels Globalwide Travel Life (OPC) Pvt. Ltd.",
      duration: "June 2025 – Aug 2025",
      location: "Remote",
      stack: ["React.js", "OpenAI"],
      points: [
        "Enhanced website performance and functionality using React.js, redesigning 5+ responsive pages for improved UI consistency, mobile experience, and load time.",
        "Contributed to SEO optimization and continuous website improvements to boost user engagement.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#111111] px-3 sm:px-4 md:px-6 lg:px-8 pt-10 sm:pt-12 md:pt-14 pb-12 sm:pb-16 md:pb-20">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto"
      >
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          
          {/* Heading */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] dark:text-white">
              Experience
              <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-[#1a1a1a] dark:bg-white mt-1.5 sm:mt-2 rounded-full" />
            </h3>
          </div>

          {/* Experience Cards */}
          <div className="space-y-5 sm:space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-md sm:rounded-lg p-4 sm:p-5 md:p-6 
                           bg-white dark:bg-[#1a1a1a]
                           border border-[#e5e7eb] dark:border-[#2e2e2e]
                           transition-all duration-300"
              >
                
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                  
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold text-[#1a1a1a] dark:text-white">
                      {exp.role}
                    </h4>

                    <p className="text-sm sm:text-base text-[#666666] dark:text-[#888888] mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="text-left lg:text-right">
                    <p className="text-xs sm:text-sm text-[#666666] dark:text-[#888888]">
                      {exp.duration}
                    </p>

                    <p className="text-xs sm:text-sm text-[#666666] dark:text-[#888888] mt-1">
                      {exp.location}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] sm:text-xs 
                                 bg-[#f3f3f3] dark:bg-[#222222]
                                 text-[#333333] dark:text-[#dddddd]
                                 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Points */}
                <ul className="mt-4 space-y-3">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm sm:text-base text-[#666666] dark:text-[#888888]"
                    >
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#666666] dark:bg-[#888888]" />

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}