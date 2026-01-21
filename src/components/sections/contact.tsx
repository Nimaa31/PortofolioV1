"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/components/language-provider";

type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  message: string;
};

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { t } = useLanguage();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || t.contact.form.error);
      }

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error sending form:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : t.contact.form.error
      );
    }
  };

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
      id="contact"
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
              {t.contact.title}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {t.contact.titleHighlight}
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  {t.contact.infoTitle}
                </h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {t.contact.email}
                      </p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {personalInfo.email}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                      <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {t.contact.phone}
                      </p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {personalInfo.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                      <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {t.contact.linkedin}
                      </p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {personalInfo.linkedinHandle}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {t.contact.location}
                      </p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3"
            >
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 sm:p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {t.contact.form.success}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t.contact.form.successMessage}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t.contact.form.name}</Label>
                        <Input
                          id="name"
                          placeholder={t.contact.form.namePlaceholder}
                          {...register("name", {
                            required: t.contact.form.nameRequired,
                            minLength: {
                              value: 2,
                              message: t.contact.form.nameMinLength,
                            },
                          })}
                          aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500">{errors.name.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">{t.contact.form.email}</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder={t.contact.form.emailPlaceholder}
                          {...register("email", {
                            required: t.contact.form.emailRequired,
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: t.contact.form.emailInvalid,
                            },
                          })}
                          aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t.contact.phone}</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder={t.contact.form.phonePlaceholder}
                          {...register("phone")}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="projectType">{t.contact.form.projectType}</Label>
                        <Select
                          id="projectType"
                          {...register("projectType", {
                            required: t.contact.form.projectTypeRequired,
                          })}
                          aria-invalid={errors.projectType ? "true" : "false"}
                        >
                          <option value="">{t.contact.form.projectTypeSelect}</option>
                          <option value="site-vitrine">{t.contact.form.projectTypes.showcase}</option>
                          <option value="application-web">{t.contact.form.projectTypes.webapp}</option>
                          <option value="e-commerce">{t.contact.form.projectTypes.ecommerce}</option>
                          <option value="devops">{t.contact.form.projectTypes.devops}</option>
                          <option value="autre">{t.contact.form.projectTypes.other}</option>
                        </Select>
                        {errors.projectType && (
                          <p className="text-sm text-red-500">
                            {errors.projectType.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t.contact.form.message}</Label>
                      <Textarea
                        id="message"
                        placeholder={t.contact.form.messagePlaceholder}
                        rows={5}
                        {...register("message", {
                          required: t.contact.form.messageRequired,
                          minLength: {
                            value: 10,
                            message: t.contact.form.messageMinLength,
                          },
                        })}
                        aria-invalid={errors.message ? "true" : "false"}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Error message */}
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                      >
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <p className="text-sm text-red-600 dark:text-red-400">
                          {submitError}
                        </p>
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          {t.contact.form.submitting}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          {t.contact.form.submit}
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
