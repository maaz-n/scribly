"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ModeSwitcher } from "./mode-switcher"
import LogoutButton from "./logout-button"
import CreatePostButton from "./create-post-button"
import LoginButton from "./login-button"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "/explore" },
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
        className="bg-background/80 backdrop-blur-md border shadow-sm flex items-center justify-between px-6"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-tight"
        >
          MyApp
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex md:items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <ModeSwitcher />
          {isAuthenticated ? (
            <div className="flex gap-3">
              <CreatePostButton />
              <LogoutButton />
            </div>
          ) : (
            <LoginButton />
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ModeSwitcher />
          <button
            className="p-2 rounded-lg hover:bg-accent"
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
            className="md:hidden mt-2 bg-background/90 backdrop-blur-md border shadow-sm rounded-xl"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {isAuthenticated && (
                <div className="flex gap-3">
                  <CreatePostButton />
                  <LogoutButton />
                </div>
              )}
              {!isAuthenticated && <LoginButton />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
