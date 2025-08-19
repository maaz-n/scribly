"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="#" className="relative w-full pt-50 lg:pt-78 pb-20 bg-gradient-to-b from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Share Your <span className="text-blue-600 dark:text-blue-400">Ideas</span>,  
          <br /> Inspire the World
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300"
        >
          Our blogging app helps you write, publish, and connect with readers.
          Whether you&apos;re a casual writer or a professional, your voice matters.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-8 flex gap-4"
        >
          <Link
            href="/sign-up"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/explore"
            className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Explore Blogs
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
