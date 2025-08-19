"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-white via-gray-100 to-blue-50 dark:from-blue-950 dark:via-gray-900 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Blogify
            </h3>
            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Share your thoughts with the world.  
              Write, inspire, and connect through blogging.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
                Product
              </h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    How it Works
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
                Company
              </h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
              Follow Us
            </h4>
            <div className="mt-3 flex gap-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Github, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-blue-600 transition"
                >
                  <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-white" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-300 dark:border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Blogify. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
