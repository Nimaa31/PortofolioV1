"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiTypescript,
  SiPhp,
  SiSymfony,
  SiDocker,
  SiKubernetes,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiPostgresql,
  SiJenkins,
  SiTerraform,
} from "react-icons/si";
import { useState } from "react";

const techConfig: Record<
  string,
  {
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    color: string;
    darkModeColor?: string;
    name: string;
  }
> = {
  react: {
    icon: SiReact,
    color: "#61DAFB",
    name: "React",
  },
  vuejs: {
    icon: SiVuedotjs,
    color: "#4FC08D",
    name: "Vue.js",
  },
  angular: {
    icon: SiAngular,
    color: "#DD0031",
    name: "Angular",
  },
  typescript: {
    icon: SiTypescript,
    color: "#3178C6",
    name: "TypeScript",
  },
  javascript: {
    icon: SiJavascript,
    color: "#F7DF1E",
    name: "JavaScript",
  },
  php: {
    icon: SiPhp,
    color: "#777BB4",
    name: "PHP",
  },
  symfony: {
    icon: SiSymfony,
    color: "#000000",
    darkModeColor: "#FFFFFF",
    name: "Symfony",
  },
  docker: {
    icon: SiDocker,
    color: "#2496ED",
    name: "Docker",
  },
  kubernetes: {
    icon: SiKubernetes,
    color: "#326CE5",
    name: "Kubernetes",
  },
  html5: {
    icon: SiHtml5,
    color: "#E34F26",
    name: "HTML5",
  },
  css3: {
    icon: SiCss3,
    color: "#1572B6",
    name: "CSS3",
  },
  mysql: {
    icon: SiMysql,
    color: "#4479A1",
    name: "MySQL",
  },
  postgresql: {
    icon: SiPostgresql,
    color: "#4169E1",
    name: "PostgreSQL",
  },
  jenkins: {
    icon: SiJenkins,
    color: "#D24939",
    name: "Jenkins",
  },
  terraform: {
    icon: SiTerraform,
    color: "#7B42BC",
    name: "Terraform",
  },
};

interface TechLogoProps {
  tech: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function TechLogo({ tech, size = "md", showLabel = false }: TechLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  const techKey = tech.toLowerCase().replace(/[.\s]/g, "");
  const config = techConfig[techKey];

  if (!config) {
    return (
      <div className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-300 font-medium">
        {tech}
      </div>
    );
  }

  const Icon = config.icon;

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const containerSizes = {
    sm: "p-3",
    md: "p-4",
    lg: "p-5",
  };

  return (
    <motion.div
      className={`relative group ${containerSizes[size]} bg-white dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer transition-all duration-300 hover:border-transparent`}
      whileHover={{
        scale: 1.1,
        rotate: 3,
        boxShadow: `0 0 25px ${config.color}50`,
      }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      role="img"
      aria-label={config.name}
      tabIndex={0}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          rotate: isHovered ? 6 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Icon with official color - always visible */}
        <Icon
          className={`${sizeClasses[size]} transition-all duration-300`}
          style={{
            color: config.color,
          }}
        />
        {/* Dark mode variant for Symfony */}
        {config.darkModeColor && (
          <Icon
            className={`${sizeClasses[size]} absolute inset-0 m-auto hidden dark:block transition-all duration-300`}
            style={{
              color: config.darkModeColor,
            }}
          />
        )}
      </motion.div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10,
          scale: isHovered ? 1 : 0.9,
        }}
        transition={{ duration: 0.2 }}
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 dark:bg-gray-700 text-white text-sm font-medium rounded-lg whitespace-nowrap pointer-events-none z-20"
      >
        {config.name}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45" />
      </motion.div>

      {/* Glow effect - always subtle, stronger on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, ${config.color}15 0%, transparent 70%)`,
        }}
        animate={{
          opacity: isHovered ? 1 : 0.3,
        }}
      />

      {showLabel && (
        <span className="mt-2 text-xs font-medium text-gray-600 dark:text-gray-400">
          {config.name}
        </span>
      )}
    </motion.div>
  );
}

// Grid component for displaying multiple tech logos
interface TechLogoGridProps {
  technologies: string[];
  size?: "sm" | "md" | "lg";
}

export function TechLogoGrid({ technologies, size = "md" }: TechLogoGridProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {technologies.map((tech) => (
        <TechLogo key={tech} tech={tech} size={size} />
      ))}
    </div>
  );
}
