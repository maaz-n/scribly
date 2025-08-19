"use client"

import { motion } from "framer-motion"
import { FileText, Edit3, Upload, Globe } from "lucide-react"

const steps = [
  {
    icon: <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Write Your Story",
    desc: "Start with our simple editor and focus only on your thoughts.",
  },
  {
    icon: <Edit3 className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Refine with Tools",
    desc: "Use smart formatting and AI-powered suggestions to improve.",
  },
  {
    icon: <Upload className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Publish Instantly",
    desc: "Upload your post with just one click, no hassle.",
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Reach the World",
    desc: "Share with readers everywhere and grow your audience.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-20 bg-gradient-to-b from-white to-blue-50 dark:from-blue-950 dark:via-black dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white"
        >
          How It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Getting started is easy. Just follow these four simple steps to share your voice with the world.
        </motion.p>

        {/* Steps Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/40 mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                {step.desc}
              </p>
              {/* Step Number */}
              <span className="absolute top-4 right-4 text-5xl font-bold text-gray-200 dark:text-gray-700 opacity-40">
                {i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
