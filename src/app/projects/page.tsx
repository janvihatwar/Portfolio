"use client";

import React, { useState } from "react";
import ProjectPage from "./ProjectPage";
import MiniProjectPage from "./MiniProjectPage";
import { motion } from "framer-motion";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<
    "projects" | "mini-projects"
  >("projects");

  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#111111] px-3 sm:px-4 md:px-6 lg:px-8 pt-10 sm:pt-12 md:pt-14 pb-12 sm:pb-16 md:pb-20">
      
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <div className="mb-8 sm:mb-10">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] dark:text-white">
            Projects
            <div className="h-0.5 w-12 sm:w-16 md:w-20 bg-[#1a1a1a] dark:bg-white mt-1.5 sm:mt-2 rounded-full" />
          </h3>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 sm:gap-4 mt-5"
          >
            <button
              onClick={() => setActiveTab("projects")}
              className={`text-sm sm:text-base font-medium px-4 py-2 rounded-lg transition-all duration-300
                ${
                  activeTab === "projects"
                    ? "bg-[#1a1a1a] text-white dark:bg-white dark:text-[#111111]"
                    : "bg-[#f3f3f3] dark:bg-[#1d1d1d] text-[#666666] dark:text-[#888888]"
                }`}
            >
              Projects
            </button>

            <button
              onClick={() => setActiveTab("mini-projects")}
              className={`text-sm sm:text-base font-medium px-4 py-2 rounded-lg transition-all duration-300
                ${
                  activeTab === "mini-projects"
                    ? "bg-[#1a1a1a] text-white dark:bg-white dark:text-[#111111]"
                    : "bg-[#f3f3f3] dark:bg-[#1d1d1d] text-[#666666] dark:text-[#888888]"
                }`}
            >
              Mini Projects
            </button>
          </motion.div>
        </div>

        {/* Content */}
        <div>
          {activeTab === "projects" ? (
            <ProjectPage />
          ) : (
            <MiniProjectPage />
          )}
        </div>

      </div>
    </main>
  );
}