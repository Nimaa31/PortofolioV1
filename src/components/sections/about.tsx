"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  User,
  MapPin,
  Calendar,
  Car,
  Globe,
  Gamepad2,
  Swords,
  Dribbble,
} from "lucide-react";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/components/language-provider";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, language } = useLanguage();

  const softSkills = [
    t.softSkills.communicant,
    t.softSkills.rigoureux,
    t.softSkills.curieux,
    t.softSkills.flexible,
    t.softSkills.teamwork,
    t.softSkills.autonomous,
  ];

  const languages = [t.languageSkills.english, t.languageSkills.spanish];

  const interests = [
    { key: "tech", label: t.interestLabels.tech, icon: Globe },
    { key: "gaming", label: t.interestLabels.gaming, icon: Gamepad2 },
    { key: "combat", label: t.interestLabels.combat, icon: Swords },
    { key: "football", label: t.interestLabels.football, icon: Dribbble },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="apropos"
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
              {t.about.title}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {t.about.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t.about.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Bio */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {language === "fr" ? "Je suis " : "I am "}
                  <strong className="text-blue-600 dark:text-blue-400">{personalInfo.name}</strong>,{" "}
                  {t.about.bio1.replace("{age}", String(personalInfo.age))}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t.about.bio2}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t.about.bio3}
                </p>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                    <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>{personalInfo.age} {t.about.years}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                    <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>{t.about.available}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                    <Car className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>{personalInfo.permis}</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Skills & Interests */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Soft Skills */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {t.about.softSkills}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {t.about.languages}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {t.about.interests}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest) => {
                    const Icon = interest.icon;
                    return (
                      <div
                        key={interest.key}
                        className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm"
                      >
                        <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {interest.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
