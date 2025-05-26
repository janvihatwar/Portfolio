"use client";
import { motion } from "framer-motion";

export default function ProjectsPage() {
const projects = [
  {
    title: "Analyze Your Text",
    description:
      "Analyze Your Text is a web application designed for efficient text processing. It allows users to analyze, transform, encode, decode, and bookmark text seamlessly. With a clean and responsive UI, the tool enhances readability and simplifies text-related tasks.",
    stack: ["React", "HTML", "CSS", "JavaScript"],
    link: "https://janvihatwar.github.io/AnalyzeYourText/",
  },
  {
    title: "BK Enterprises - Service Platform",
    description:
      "The BK Enterprises website is designed to showcase a range of electrical and mechanical services. It offers a professional platform for clients to explore services, request quotes, and connect with the business. With a clean and intuitive interface, the website ensures fast performance and seamless navigation, providing an optimal user experience.",
    stack: ["React", "HTML", "CSS", "JavaScript"],
    link: "https://bk-enterprises.vercel.app/",
  },
  {
    title: "Expense Tracker",
    description:
      "Expense Tracker is a web application that helps users manage their daily expenses effortlessly. It allows users to add, track, and categorize expenses with a clean and responsive interface. The application provides real-time updates to simplify financial management and budgeting.",
    stack: [ "React", "HTML", "CSS", "JavaScript", "Chart.js"],
    link: "https://janvihatwar.github.io/ExpenseTracker/",
  },
];


  return (
    <main >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto"
      >
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {/* Projects Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#1a1a1a] dark:text-white">
              Projects
              <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-[#1a1a1a] dark:bg-white mt-1.5 sm:mt-2 rounded-full" />
            </h3>

            <div className="space-y-6 sm:space-y-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-md p-4 sm:p-6 bg-white dark:bg-[#1a1a1a] shadow-sm hover:shadow-md transition-shadow duration-300 border dark:border-[#333]"
                >
                  
                  <h6 className="text-lg sm:text-xl font-semibold text-[#1a1a1a] dark:text-white mb-2">
                    {project.title}
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] sm:text-xs bg-[#f0f0f0] dark:bg-[#2a2a2a] text-[#333] dark:text-white px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-[#666666] dark:text-[#999999] mb-3">
                    {project.description}
                  </p>
                  
                  {project.link && (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-3 inline-block text-blue-600 dark:text-blue-400 text-sm sm:text-base font-medium hover:underline"
  >
    View Project →
  </a>
)}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
