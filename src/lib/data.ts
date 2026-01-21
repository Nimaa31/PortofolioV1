import {
  Code2,
  Server,
  Cloud,
  Globe,
  Search,
  Briefcase,
  GraduationCap,
  Rocket,
} from "lucide-react";

export const personalInfo = {
  name: "Amin Mito",
  title: "Développeur Web Fullstack & DevOps",
  age: 23,
  email: "amin.eddine31@icloud.com",
  phone: "06.18.45.60.46",
  linkedin: "https://linkedin.com/in/amin-eddine-mito",
  linkedinHandle: "@amin-eddine-mito",
  location: "France",
  permis: "Permis B",
};

export const services = [
  {
    icon: Code2,
    title: "Développement Frontend",
    description:
      "Création d'interfaces modernes et réactives avec React, Vue.js, Angular et TypeScript. Expérience utilisateur fluide et design responsive.",
  },
  {
    icon: Server,
    title: "Développement Backend",
    description:
      "Architecture robuste avec PHP/Symfony, gestion de bases de données SQL/MySQL/Postgres et API RESTful performantes.",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description:
      "Containerisation Docker, orchestration Kubernetes, CI/CD avec Jenkins, et infrastructure as code avec Terraform.",
  },
  {
    icon: Globe,
    title: "Sites Vitrines",
    description:
      "Conception de sites web professionnels, optimisés pour le mobile et les moteurs de recherche. CMS personnalisés.",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description:
      "Optimisation du référencement naturel, amélioration des Core Web Vitals et analyse des performances.",
  },
];

export const skills = {
  frontend: {
    title: "Frontend",
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React.js", level: 90 },
      { name: "Vue.js", level: 80 },
      { name: "Angular", level: 75 },
    ],
  },
  backend: {
    title: "Backend",
    items: [
      { name: "PHP", level: 85 },
      { name: "Symfony", level: 85 },
      { name: "Doctrine ORM", level: 80 },
      { name: "SQL", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
  devops: {
    title: "DevOps",
    items: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 70 },
      { name: "Jenkins", level: 75 },
      { name: "Terraform", level: 70 },
      { name: "CI/CD Pipeline", level: 80 },
    ],
  },
};

export const experiences = [
  {
    period: "2024 - 2025",
    title: "Développeur Fullstack & DevOps",
    company: "Cloud4Dev",
    type: "Alternance Bachelor",
    icon: Rocket,
    description:
      "Conception et déploiement d'applications cloud-native en environnement Agile. Automatisation des pipelines CI/CD réduisant le temps de déploiement de 60%. Mise en place d'une architecture microservices conteneurisée servant +10K utilisateurs.",
    technologies: ["React", "Symfony", "Docker", "Jenkins", "Kubernetes", "GitLab CI"],
  },
  {
    period: "2023 - 2024",
    title: "Développeur Web Freelance",
    company: "Clients variés",
    type: "Entrepreneur",
    icon: Briefcase,
    description:
      "Accompagnement de 8+ clients (PME, startups, artisans) dans leur transformation digitale. Livraison de solutions sur-mesure avec un taux de satisfaction de 100%. Expertise en optimisation SEO ayant généré +150% de trafic organique pour mes clients.",
    technologies: ["React", "Next.js", "Vue.js", "Node.js", "WordPress", "SEO"],
  },
  {
    period: "2022 - 2023",
    title: "Développeur Backend",
    company: "Projet E-commerce",
    type: "Projet certifiant",
    icon: GraduationCap,
    description:
      "Développement d'une plateforme e-commerce complète avec gestion des stocks, panier, paiement Stripe et back-office administrateur. Architecture MVC respectant les standards SOLID et les bonnes pratiques de sécurité OWASP.",
    technologies: ["PHP 8", "Symfony 6", "Doctrine ORM", "MySQL", "API Platform"],
  },
  {
    period: "2022",
    title: "Développeur Web Junior",
    company: "Stage en entreprise",
    type: "Stage 6 semaines",
    icon: Briefcase,
    description:
      "Intégration au sein d'une équipe de 5 développeurs sur un projet client. Contribution au développement de fonctionnalités front-end et participation aux revues de code. Introduction aux méthodologies Agile/Scrum.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Git"],
  },
];

export const education = [
  {
    period: "2024 - 2025",
    title: "Développeur Full Stack - Data & Devops",
    school: "LiveCampus ",
    icon: GraduationCap,
  },
  {
    period: "2022 - 2024",
    title: "BTS services informatiques aux organisations",
    school: "Toulouse • Option SLAM ",
    icon: GraduationCap,
  },
  {
    period: "2019 - 2020",
    title: "Baccalauréat STI2D",
    school: "Lycée Déodat de Séverac • Option SIN",
    icon: GraduationCap,
  },
];

export const softSkills = [
  "Communicant",
  "Rigoureux",
  "Curieux",
  "Flexible",
  "Esprit d'équipe",
  "Autonome",
];

export const languages = ["Anglais", "Espagnol"];

export const interests = [
  "Nouvelles technologies",
  "Jeux vidéos",
  "Sports de combat",
  "Football",
];

export const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#competences", label: "Compétences" },
  { href: "#experiences", label: "Expériences" },
];
