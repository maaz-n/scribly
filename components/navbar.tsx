"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ModeSwitcher } from "./mode-switcher"
import LogoutButton from "./logout-button"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "FAQs", href: "#faqs" },
]

interface NavbarProps {
  isAuthenticated: boolean
}

export default function Navbar({ isAuthenticated }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[80%] max-w-6xl"
    >
      <motion.div
        animate={{
          height: isScrolled ? 56 : 72,
          borderRadius: isScrolled ? 16 : 24,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md border border-gray-200 dark:border-gray-700 flex items-center justify-between px-6"
      >
        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          MyApp
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex md:items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <ModeSwitcher />
          {isAuthenticated ? <LogoutButton /> : null}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">

          <ModeSwitcher />
          <button
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}

          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-md rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {isAuthenticated ? <LogoutButton /> : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
