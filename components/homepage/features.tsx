"use client"

import { motion } from "framer-motion"
import { PenLine, Users, Share2, Sparkles } from "lucide-react"

const features = [
  {
    icon: <PenLine className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Easy Writing",
    desc: "Focus on your words with our clean and distraction-free editor.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Community Driven",
    desc: "Connect with other writers and readers from around the world.",
  },
  {
    icon: <Share2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Instant Sharing",
    desc: "Publish with one click and share your ideas with everyone instantly.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "Smart Tools",
    desc: "Use AI-assisted tools to refine your writing and spark creativity.",
  },
]

export default function Features() {
  return (
    <section id="features" className="w-full py-20 bg-gradient-to-b from-blue-50 to-white dark:from-black dark:via-gray-950 dark:to-blue-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white"
        >
          Powerful Features for Every Writer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          From drafting to publishing, our blogging app has everything you need
          to share your story.
        </motion.p>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/40 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
