import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { LanguageToggleMobile } from "@/components/language-toggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amin MITO | Développeur Web Fullstack & DevOps",
  description:
    "Portfolio de Amin MITO, développeur web fullstack et DevOps freelance. Expert React, Vue.js, Angular, Symfony, Docker et Kubernetes. Disponible pour vos projets web.",
  keywords: [
    "développeur web",
    "fullstack",
    "devops",
    "freelance",
    "react",
    "vue.js",
    "angular",
    "symfony",
    "docker",
    "kubernetes",
    "toulouse",
    "france",
  ],
  authors: [{ name: "Amin MITO" }],
  creator: "Amin MITO",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Amin MITO | Développeur Web Fullstack & DevOps",
    description:
      "Portfolio de Amin MITO, développeur web fullstack et DevOps freelance. Expert React, Vue.js, Angular, Symfony, Docker et Kubernetes.",
    siteName: "Amin MITO Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amin MITO | Développeur Web Fullstack & DevOps",
    description:
      "Portfolio de Amin MITO, développeur web fullstack et DevOps freelance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <LanguageToggleMobile />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
