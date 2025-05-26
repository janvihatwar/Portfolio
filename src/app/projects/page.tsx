"use client";
import React, { useState } from 'react';
import ProjectPage from './ProjectPage';
import MiniProjectPage from './MiniProjectPage';
import { motion } from "framer-motion";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'projects' | 'mini-projects'>('projects');

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#111111] px-3 sm:px-4 md:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      
      {/* Page Heading */}
      <div className="text-center mb-6 sm:mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-6"
        >
          {/* Tabs */}
          <button
            onClick={() => setActiveTab('projects')}
            className={`text-lg sm:text-xl font-semibold px-4 py-2 rounded-md
              ${
                activeTab === 'projects'
                  ? "bg-[#1a1a1a] text-white dark:bg-white dark:text-[#1a1a1a]"
                  : "text-[#666666] dark:text-[#888888] hover:text-[#1a1a1a] dark:hover:text-white"
              }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab('mini-projects')}
            className={`text-lg sm:text-xl font-semibold px-4 py-2 rounded-md
              ${
                activeTab === 'mini-projects'
                  ? "bg-[#1a1a1a] text-white dark:bg-white dark:text-[#1a1a1a]"
                  : "text-[#666666] dark:text-[#888888] hover:text-[#1a1a1a] dark:hover:text-white"
              }`}
          >
            Mini Projects
          </button>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a1a1a] dark:text-white mt-6"
        >
          
        </motion.h1>
      </div>

      {/* Content based on active tab */}
      <div>
        {activeTab === 'projects' ? <ProjectPage /> : <MiniProjectPage />}
      </div>
      
    </div>
  );
}
