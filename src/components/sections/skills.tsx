"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";
import { TechLogoGrid } from "@/components/ui/tech-logo";
import { useLanguage } from "@/components/language-provider";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="competences"
      ref={ref}
      className="py-20 lg:py-32 bg-white dark:bg-gray-900"
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
              {t.skills.title}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {t.skills.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t.skills.subtitle}
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([key, category]) => (
              <motion.div
                key={key}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: index * 0.1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-wider font-medium">
              {t.skills.favorites}
            </p>
            <TechLogoGrid
              technologies={[
                "React",
                "Vue.js",
                "Angular",
                "TypeScript",
                "PHP",
                "Symfony",
                "Docker",
                "Kubernetes",
              ]}
              size="lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
