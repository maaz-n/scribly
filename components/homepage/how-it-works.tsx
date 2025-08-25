"use client"

import { motion } from "framer-motion"
import { FileText, Edit3, Upload, Globe } from "lucide-react"

const steps = [
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: "Write Your Story",
    desc: "Start with our simple editor and focus only on your thoughts.",
  },
  {
    icon: <Edit3 className="w-6 h-6 text-primary" />,
    title: "Refine with Tools",
    desc: "Use smart formatting and AI-powered suggestions to improve.",
  },
  {
    icon: <Upload className="w-6 h-6 text-primary" />,
    title: "Publish Instantly",
    desc: "Upload your post with just one click, no hassle.",
  },
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Reach the World",
    desc: "Share with readers everywhere and grow your audience.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-foreground"
        >
          How It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto"
        >
          Getting started is easy. Just follow these four simple steps to share your voice with the world.
        </motion.p>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Line */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-border" /> {/* horizontal for md+ */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center md:items-center md:text-center relative"
              >
                {/* Icon circle */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted border mb-4 md:mb-6 z-10">
                  {step.icon}
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.desc}
                </p>
                <span className="mt-2 inline-block text-xs font-medium text-muted-foreground">
                  Step {i + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
