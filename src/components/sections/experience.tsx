"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { experiences, education } from "@/lib/data";
import { useLanguage } from "@/components/language-provider";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="experiences"
      ref={ref}
      className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t.experience.title}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {t.experience.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t.experience.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experiences */}
            <div>
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
              >
                <span className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                {t.experience.experienceTitle}
              </motion.h3>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-700" />

                <div className="space-y-8">
                  {experiences.map((exp, index) => {
                    const Icon = exp.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="relative pl-12"
                      >
                        {/* Timeline Dot */}
                        <div className="absolute left-0 w-10 h-10 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full flex items-center justify-center z-10">
                          <Icon className="w-4 h-4 text-blue-600" />
                        </div>

                        {/* Content Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                              {exp.period}
                            </span>
                            <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                              {exp.type}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                            {exp.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                            {exp.company}
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
              >
                <span className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </span>
                {t.experience.educationTitle}
              </motion.h3>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-700" />

                <div className="space-y-6">
                  {education.map((edu, index) => {
                    const Icon = edu.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="relative pl-12"
                      >
                        {/* Timeline Dot */}
                        <div className="absolute left-0 w-10 h-10 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full flex items-center justify-center z-10">
                          <Icon className="w-4 h-4 text-blue-600" />
                        </div>

                        {/* Content Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow">
                          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                            {edu.period}
                          </span>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-1">
                            {edu.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {edu.school}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
