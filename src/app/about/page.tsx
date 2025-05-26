"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaServer,
  FaGithub,
  FaDocker,
  FaNpm,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiCplusplus,
  SiC,
  SiTailwindcss,
  SiVite,
  SiNetlify,
  SiRailway,
  SiHeroku,
  SiPostman,
  SiNginx,
  SiTypescript,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";

export default function AboutPage() {
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
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" }, // Express logo from simple-icons
      { icon: <FaServer />, name: "RESTful APIs" }, // Server icon representing APIs
      { icon: <SiMongodb />, name: "MongoDB (Mongoose)" },
    ],

    "Tools & Platforms": [
      { icon: <SiVite />, name: "Vite" },
      { icon: <FaGithub />, name: "Git & GitHub" },
      { icon: <SiNetlify />, name: "Netlify" },
      { icon: <IoLogoVercel />, name: "Vercel" },
      { icon: <SiRailway />, name: "Railway" },
      { icon: <SiHeroku />, name: "Heroku" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <SiNginx />, name: "Nginx" },
      { icon: <FaDocker />, name: "Docker (Basics)" },
    ],
  };

  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#111111] px-3 sm:px-4 md:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto"
      >
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {/* About Me Section */}
          <div className="prose dark:prose-invert">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#1a1a1a] dark:text-white">
              About Me
              <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-[#1a1a1a] dark:bg-white mt-1.5 sm:mt-2 rounded-full" />
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-[#666666] dark:text-[#888888]">
              <p>
                Hi, I&apos;m Janvi Rajesh Hatwar, a Web Developer who loves
                building clean and user-friendly web applications. I mainly work
                with React.js, JavaScript, and modern web technologies, and
                I&apos;m always eager to learn new tools to improve my skills.
              </p>
              <p>
                I also have experience with Node.js, MongoDB, and Docker, which
                helps me work on full-stack projects. I enjoy solving problems,
                improving website performance, and creating smooth user
                experiences.
              </p>
              <p>
                Apart from development, I also teach programming, including C,
                C++, Java, JavaScript, and React. I believe in continuous
                learning and enjoy sharing knowledge with others.
              </p>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#1a1a1a] dark:text-white">
              Technologies I Work With
              <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-[#1a1a1a] dark:bg-white mt-1.5 sm:mt-2 rounded-full" />
            </h3>

            <div className="space-y-12">
              {Object.entries(techStack).map(([sectionTitle, items]) => (
                <div key={sectionTitle}>
                  <h4 className="text-lg sm:text-xl font-semibold mb-3 text-[#1a1a1a] dark:text-white">
                    {sectionTitle}
                  </h4>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-4 md:gap-6">
                    {items.map((tech, index) => (
                      <motion.div
                        key={tech.name + index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="group relative p-[1px] rounded-md overflow-hidden"
                      >
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-[#0066ff00] via-[#0066ff] to-[#0066ff00] 
                          opacity-0 group-hover:opacity-100
                          blur-md transition-opacity duration-300
                          animate-[border-animation_3s_ease_infinite]
                          bg-[length:200%_100%]"
                        />
                        <div
                          className="relative flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 
                          rounded-md bg-white dark:bg-[#1a1a1a]
                          h-full w-full min-h-[60px] sm:min-h-[80px] md:min-h-[100px]
                          transition-all duration-300"
                        >
                          <div className="relative group flex items-center justify-center">
                            <div
                              className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1 sm:mb-2 text-[#333333] dark:text-[#888888] 
    group-hover:text-black dark:group-hover:text-white 
    transition-colors duration-300"
                            >
                              {tech.icon}
                            </div>
                            <span
                              className="absolute bottom-full mb-2 scale-0 group-hover:scale-100 transition-transform duration-300
    text-[10px] sm:text-xs px-2 py-1 bg-black text-white rounded shadow-md z-10 whitespace-nowrap"
                            >
                              {tech.name}
                            </span>
                          </div>
                          {/* <span
                            className="text-[10px] sm:text-xs md:text-sm text-center text-[#666666] dark:text-[#888888]
                            group-hover:text-black dark:group-hover:text-white 
                            transition-colors duration-300"
                          >
                            {tech.name}
                          </span> */}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
