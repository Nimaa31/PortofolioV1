"use client";

import { motion } from "framer-motion";
import { Heart, Linkedin, Mail, Phone } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const navLinks = [
    { href: "#accueil", label: t.nav.home },
    { href: "#apropos", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#competences", label: t.nav.skills },
    { href: "#experiences", label: t.nav.experience },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.a
                href="#accueil"
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent inline-block mb-4"
                whileHover={{ scale: 1.02 }}
              >
                {personalInfo.name}
              </motion.a>
              <p className="text-gray-400 mb-6 max-w-md">
                {t.footer.description}
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Phone"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footer.navigation}</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.footer.contactTitle}</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </li>
                <li>{personalInfo.location}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              &copy; {currentYear} {personalInfo.name}. {t.footer.rights}
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              {t.footer.madeWith} <Heart className="w-4 h-4 text-red-500" /> {t.footer.inFrance}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
