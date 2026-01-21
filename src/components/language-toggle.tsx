"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium text-gray-700 dark:text-gray-300 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${language === "fr" ? "English" : "French"}`}
    >
      <span className="text-base">{language === "fr" ? "🇫🇷" : "🇬🇧"}</span>
      <span>{language === "fr" ? "FR" : "EN"}</span>
    </motion.button>
  );
}

export function LanguageToggleMobile() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="lg:hidden fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: [0, -8, 0],
        opacity: 1,
      }}
      transition={{
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
        opacity: {
          duration: 0.5,
          delay: 1,
        },
      }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${language === "fr" ? "English" : "French"}`}
    >
      <div className="flex flex-col items-center">
        <span className="text-xl">{language === "fr" ? "🇫🇷" : "🇬🇧"}</span>
        <span className="text-[10px] font-bold mt-0.5">
          {language === "fr" ? "FR" : "EN"}
        </span>
      </div>
    </motion.button>
  );
}
