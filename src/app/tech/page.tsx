"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaServer,
  FaGithub,
  FaMicrosoft,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiCplusplus,
  SiC,
  SiPostman,
  SiTypescript,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

import { IoLogoVercel } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";

export default function TechPage() {
  const techStack = {
    "Programming Languages": [
      { icon: <SiC />, name: "C" },
      { icon: <SiCplusplus />, name: "C++" },
      { icon: <FaJava />, name: "Java" },
      { icon: <FaPython />, name: "Python" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <IoLogoJavascript />, name: "JavaScript" },
    ],

    "Development Stack": [
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <FaServer />, name: "RESTful APIs" },
      { icon: <SiMongodb />, name: "MongoDB (Mongoose)" },
    ],

    "Tools & Platforms": [
      { icon: <FaGithub />, name: "Git & GitHub" },
      { icon: <IoLogoVercel />, name: "Vercel" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <FaMicrosoft />, name: "Azure" },
    ],
  };

  return (
<main className="bg-[#fafafa] dark:bg-[#111111] px-3 sm:px-4 md:px-6 lg:px-8 pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto"
      >
        {/* Tech Stack Section */}
        <div>
          
          <h3 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-10 text-[#1a1a1a] dark:text-white">
            Technologies I Work With
            <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-[#1a1a1a] dark:bg-white mt-1.5 sm:mt-2 rounded-full" />
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Left Side */}
            <div className="space-y-10">

              {/* Programming Languages */}
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-4 text-[#1a1a1a] dark:text-white">
                  Programming Languages
                </h4>

                <div className="flex flex-wrap gap-6 sm:gap-7">
                  {techStack["Programming Languages"].map((tech, index) => (
                    <motion.div
                      key={tech.name + index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -3 }}
                      className="group relative flex flex-col items-center"
                    >
                      <div
                        className="text-2xl sm:text-3xl md:text-4xl
                        text-[#555555] dark:text-[#777777]
                        group-hover:text-[#2563eb] dark:group-hover:text-[#60a5fa]
                        drop-shadow-[0_0_6px_rgba(37,99,235,0.18)]
                        transition-all duration-300"
                      >
                        {tech.icon}
                      </div>

                      <span
                        className="absolute top-full mt-2 scale-0 group-hover:scale-100
                        transition-transform duration-300
                        text-[10px] sm:text-xs px-2 py-1
                        bg-black text-white rounded-md whitespace-nowrap"
                      >
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-4 text-[#1a1a1a] dark:text-white">
                  Tools & Platforms
                </h4>

                <div className="flex flex-wrap gap-6 sm:gap-7">
                  {techStack["Tools & Platforms"].map((tech, index) => (
                    <motion.div
                      key={tech.name + index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -3 }}
                      className="group relative flex flex-col items-center"
                    >
                      <div
                        className="text-2xl sm:text-3xl md:text-4xl
                        text-[#555555] dark:text-[#777777]
                        group-hover:text-[#2563eb] dark:group-hover:text-[#60a5fa]
                        drop-shadow-[0_0_6px_rgba(37,99,235,0.18)]
                        transition-all duration-300"
                      >
                        {tech.icon}
                      </div>

                      <span
                        className="absolute top-full mt-2 scale-0 group-hover:scale-100
                        transition-transform duration-300
                        text-[10px] sm:text-xs px-2 py-1
                        bg-black text-white rounded-md whitespace-nowrap"
                      >
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 text-[#1a1a1a] dark:text-white">
                Development Stack
              </h4>

              <div className="flex flex-wrap gap-6 sm:gap-7">
                {techStack["Development Stack"].map((tech, index) => (
                  <motion.div
                    key={tech.name + index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -3 }}
                    className="group relative flex flex-col items-center"
                  >
                    <div
                      className="text-2xl sm:text-3xl md:text-4xl
                      text-[#555555] dark:text-[#777777]
                      group-hover:text-[#2563eb] dark:group-hover:text-[#60a5fa]
                      drop-shadow-[0_0_6px_rgba(37,99,235,0.18)]
                      transition-all duration-300"
                    >
                      {tech.icon}
                    </div>

                    <span
                      className="absolute top-full mt-2 scale-0 group-hover:scale-100
                      transition-transform duration-300
                      text-[10px] sm:text-xs px-2 py-1
                      bg-black text-white rounded-md whitespace-nowrap"
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </motion.section>
    </main>
  );
}