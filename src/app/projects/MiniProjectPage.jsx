"use client";
import { motion } from "framer-motion";

export default function MiniProjectsPage() {
  const miniProjects = [
    {
      title: "Memory Game",
      description: "An interactive Memory Matching Game built using HTML, CSS, and JavaScript. The game challenges users to flip and match pairs of cards based on memory. Cards are randomized at the start of each game, and the interface tracks matches, remaining attempts, and resets the board when complete. The UI includes animations for card flips and a responsive layout that works on both desktop and mobile devices.",
      stack: ["React.js", "JavaScript", "CSS"],
      link: "https://janvihatwar.github.io/MemoryGame/",
    },
    {
      title: "Weather App",
      description: "A weather forecasting app developed using React.js and the OpenWeatherMap API. Users can enter a city name to fetch real-time weather information such as temperature, weather conditions, humidity, and wind speed. The app uses async JavaScript and API calls to retrieve data and dynamically updates the UI. It includes loading states, error handling for invalid city names, and a responsive design for all screen sizes.",
      stack: ["React.js", "JavaScript", "OpenWeatherMap API", "CSS"],
      link: "https://janvihatwar.github.io/weatherApplication/",
    },
     {
      title: "Digital Clock",
      description: "A real-time digital clock built using React.js that displays the current time in hours, minutes, and seconds. The clock updates every second using JavaScript's Date object and React's state management. The UI is styled with CSS for a clean and modern look, and it's responsive across different devices. The application runs continuously and reflects the user's local time accurately.",
      stack: ["React.js", "JavaScript", "CSS"],
      link: "https://janvihatwar.github.io/digitalClock/",
    },
    {
      title: "Stopwatch ",
      description: "A responsive stopwatch app developed using React.js. It features start, stop, and reset functionalities with real-time time tracking. The application accurately updates milliseconds, seconds, and minutes using React state and intervals. The UI is clean and intuitive, designed for both desktop and mobile use. Time updates are efficiently handled through `setInterval` and React's `useEffect` hook to ensure performance and reliability.",
      stack: ["React.js", "JavaScript", "CSS"],
      link: "https://janvihatwar.github.io/stopWatch/",
    },
    {
      title: "To-Do List Application",
      description: "A minimalist yet functional To-Do List app built using React.js and TailwindCSS. Users can add tasks, mark them as completed, and delete them from the list. The application manages task states dynamically and updates the UI instantly with smooth transitions. The design is clean and responsive, ensuring usability on both desktop and mobile devices. Each task is handled as a separate component, making the code modular and maintainable.",
      stack: ["React.js", "JavaScript", "CSS"],
      link: "https://janvihatwar.github.io/toDoList/",
    },
  
    {
      title: "Rock Paper Scissors Game",
      description: "A fun and interactive Rock Paper Scissors game built with HTML, CSS, and JavaScript. The user selects rock, paper, or scissors, and the computer makes a random choice. The game determines the winner based on traditional rules and displays the result instantly. The UI is responsive and features dynamic score tracking and game restart functionality.",
      stack: ["HTML", "CSS", "JavaScript"],
      link: "https://janvihatwar.github.io/Rock_Paper_Scissor_Game/",
    },
    {
     title: "Tic Tac Toe Game",
  description: "A classic two-player Tic Tac Toe game built using HTML, CSS, and JavaScript. The game features an interactive grid layout, real-time win and draw detection, and a reset option for multiple rounds. The logic checks for winning combinations dynamically after each move, and the UI updates instantly based on player turns. It provides a smooth and responsive experience for desktop and mobile devices.",
  stack: ["HTML", "CSS", "JavaScript"],
      link: "https://janvihatwar.github.io/Tic_Tac_Toe_Game/",
    },
  ];

  return (
    <main 
>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto"
      >
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {/* Mini Projects Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#1a1a1a] dark:text-white">
              Mini Projects
              <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-[#1a1a1a] dark:bg-white mt-1.5 sm:mt-2 rounded-full" />
            </h3>

            <div className="space-y-6 sm:space-y-8">
              {miniProjects.map((project, index) => (
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
