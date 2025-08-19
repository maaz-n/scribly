"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Is the blogging app free to use?",
    a: "Yes! You can start writing and publishing for free. We also offer premium features for advanced creators.",
  },
  {
    q: "Do I need coding skills to use it?",
    a: "Not at all. Our editor is simple and intuitive — just focus on your writing.",
  },
  {
    q: "Can I customize the look of my blog?",
    a: "Yes, you can personalize your blog with themes, colors, and layouts to match your style.",
  },
  {
    q: "How do I grow my audience?",
    a: "Share your posts on social media, get featured in our community, and connect with other writers and readers.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faqs" className="w-full py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:via-black dark:to-blue-950">
      <div className="max-w-3xl md:max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            const contentId = `faq-panel-${i}`
            const buttonId = `faq-button-${i}`

            return (
              <motion.div
                key={i}
                layout
                transition={{ layout: { type: "spring", stiffness: 260, damping: 28 } }}
                className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90"
              >
                {/* Question Row */}
                <motion.button
                  id={buttonId}
                  aria-controls={contentId}
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-6 px-5 md:px-6 py-4 md:py-5 text-left"
                >
                  <span className="text-base md:text-[1.05rem] font-medium text-gray-900 dark:text-gray-100 leading-6">
                    {item.q}
                  </span>

                  <motion.span
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "tween", duration: 0.2 }}
                    className="shrink-0 inline-flex items-center justify-center rounded-md"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </motion.span>
                </motion.button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={contentId}
                      role="region"
                      aria-labelledby={buttonId}
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6">
                        <p className="text-sm md:text-base leading-7 text-gray-700 dark:text-gray-300">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
