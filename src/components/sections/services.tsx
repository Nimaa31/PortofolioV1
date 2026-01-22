"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Cloud, Globe, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

const serviceIcons = [Code2, Server, Cloud, Globe, Search];
const serviceKeys = ["frontend", "backend", "devops", "websites", "seo"] as const;

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, language } = useLanguage();

  const services = [
    {
      key: "frontend",
      icon: Code2,
      title: t.services.items.frontend.title,
      description: t.services.items.frontend.description,
    },
    {
      key: "backend",
      icon: Server,
      title: t.services.items.backend.title,
      description: t.services.items.backend.description,
    },
    {
      key: "devops",
      icon: Cloud,
      title: t.services.items.devops.title,
      description: t.services.items.devops.description,
    },
    {
      key: "websites",
      icon: Globe,
      title: t.services.items.websites.title,
      description: t.services.items.websites.description,
    },
    {
      key: "seo",
      icon: Search,
      title: t.services.items.seo.title,
      description: t.services.items.seo.description,
    },
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          key={language}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t.services.title}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {t.services.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={`${service.key}-${language}`}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 border-transparent hover:border-blue-500/20">
                    <CardHeader>
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
