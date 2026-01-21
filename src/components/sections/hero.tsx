"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, Phone } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/components/language-provider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Additional subtle glow for image area */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content - Left Side */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              {t.hero.badge}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {t.hero.greeting}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4"
            >
              {t.hero.title}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {t.hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <a
                href="#contact"
                className="inline-flex h-14 px-8 items-center justify-center gap-2 rounded-lg text-lg font-medium bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                {t.hero.contactBtn}
              </a>
              <a
                href="#services"
                className="inline-flex h-14 px-8 items-center justify-center gap-2 rounded-lg text-lg font-medium border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
              >
                {t.hero.servicesBtn}
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-6"
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                <span className="hidden sm:inline">{personalInfo.linkedinHandle}</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
                <span className="hidden md:inline">{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
                <span className="hidden md:inline">{personalInfo.phone}</span>
              </a>
            </motion.div>

            {/* Scroll Indicator - Mobile only, under social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex lg:hidden justify-center mt-8"
            >
              <motion.a
                href="#apropos"
                className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                aria-label="Scroll down"
              >
                <span className="text-sm font-medium">{t.hero.scroll}</span>
                <ArrowDown className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Floating particles - subtle blue tones - ENHANCED */}

              {/* Particules existantes */}
              <motion.div
                className="absolute -top-4 -left-4 w-2 h-2 bg-blue-400/60 rounded-full"
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/4 -right-5 w-1.5 h-1.5 bg-blue-500/50 rounded-full"
                animate={{
                  y: [0, 12, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.div
                className="absolute bottom-1/4 -left-5 w-2 h-2 bg-slate-400/50 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />

              {/* NOUVELLES PARTICULES */}

              {/* Top right corner */}
              <motion.div
                className="absolute -top-6 -right-6 w-3 h-3 bg-blue-300/40 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 8, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />

              {/* Top center */}
              <motion.div
                className="absolute -top-8 left-1/3 w-1 h-1 bg-slate-300/60 rounded-full"
                animate={{
                  y: [0, -12, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              />

              {/* Right side - middle */}
              <motion.div
                className="absolute right-0 top-1/2 w-2.5 h-2.5 bg-blue-600/30 rounded-full"
                animate={{
                  x: [0, 10, 0],
                  y: [0, -8, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              />

              {/* Bottom right */}
              <motion.div
                className="absolute -bottom-4 -right-8 w-2 h-2 bg-slate-500/40 rounded-full"
                animate={{
                  y: [0, 10, 0],
                  x: [0, -6, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              />

              {/* Bottom center */}
              <motion.div
                className="absolute -bottom-6 left-2/3 w-1.5 h-1.5 bg-blue-400/50 rounded-full"
                animate={{
                  y: [0, 14, 0],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              />

              {/* Left side - upper */}
              <motion.div
                className="absolute left-0 top-1/3 w-1 h-1 bg-blue-300/70 rounded-full"
                animate={{
                  x: [0, -8, 0],
                  y: [0, -6, 0],
                  opacity: [0.4, 0.9, 0.4],
                }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />

              {/* Left bottom */}
              <motion.div
                className="absolute -left-7 bottom-1/3 w-2 h-2 bg-slate-400/45 rounded-full"
                animate={{
                  x: [0, -10, 0],
                  y: [0, 12, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
              />

              {/* Near top-left */}
              <motion.div
                className="absolute top-12 left-8 w-1.5 h-1.5 bg-blue-500/35 rounded-full"
                animate={{
                  y: [0, -7, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 2.3 }}
              />

              {/* Near bottom-right */}
              <motion.div
                className="absolute bottom-12 right-12 w-2 h-2 bg-blue-600/40 rounded-full"
                animate={{
                  y: [0, 9, 0],
                  x: [0, 5, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
              />

              {/* Center-left */}
              <motion.div
                className="absolute left-4 top-1/2 w-1 h-1 bg-slate-300/55 rounded-full"
                animate={{
                  x: [0, -6, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
              />

              {/* Top far right */}
              <motion.div
                className="absolute top-8 -right-10 w-2.5 h-2.5 bg-blue-400/35 rounded-full"
                animate={{
                  y: [0, -11, 0],
                  x: [0, 7, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
              />

              {/* Bottom far left */}
              <motion.div
                className="absolute bottom-6 -left-12 w-2 h-2 bg-slate-500/45 rounded-full"
                animate={{
                  y: [0, 13, 0],
                  x: [0, -9, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
              />

              {/* Extra small particles for depth */}
              <motion.div
                className="absolute top-20 right-20 w-0.5 h-0.5 bg-blue-200/80 rounded-full"
                animate={{
                  y: [0, -5, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.7 }}
              />

              <motion.div
                className="absolute bottom-16 left-16 w-0.5 h-0.5 bg-slate-200/70 rounded-full"
                animate={{
                  y: [0, 6, 0],
                  opacity: [0.4, 0.9, 0.4],
                }}
                transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
              />

              {/* Subtle glow effect background */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-blue-900/25 via-slate-800/15 to-blue-800/20 rounded-3xl blur-2xl group-hover:from-blue-800/30 group-hover:to-blue-700/25 transition-all duration-500"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Image container with subtle border */}
              <motion.div
                className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600/60 via-slate-700/50 to-blue-800/60 p-[3px]"
                whileHover={{
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-[22px] overflow-hidden bg-gray-900">
                  <Image
                    src="/pp.png"
                    alt="Amin Mito - Fullstack Developer"
                    width={400}
                    height={400}
                    priority
                    className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] object-cover transition-all duration-300 group-hover:brightness-105"
                    quality={95}
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Tech badge decoration */}
              <motion.div
                className="absolute -bottom-3 -left-3 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Fullstack Dev
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex"
      >
        <motion.a
          href="#apropos"
          className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Scroll down"
        >
          <span className="text-sm font-medium">{t.hero.scroll}</span>
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
