"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative pt-50 lg:pt-80 w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-foreground"
        >
          Share Your <span className="text-primary">Ideas</span>,  
          <br /> Inspire the World
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          Our blogging app helps you write, publish, and connect with readers.
          Whether you&apos;re a casual writer or a professional, your voice matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-8 flex gap-4"
        >
          <Link href="/sign-up" className={buttonVariants({ variant: "default" })}>
            Get Started
          </Link>
          <Link href="/explore" className={buttonVariants({ variant: "outline" })}>
            Explore Blogs
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
