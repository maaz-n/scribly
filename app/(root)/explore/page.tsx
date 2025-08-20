"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const blogs = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1755282464678-31862372f805?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Future of AI in Daily Life",
    content: "Artificial Intelligence is reshaping the way we live, work, and interact with technology. Here's what to expect...",
    author: "Sarah Johnson",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1656532042781-cd8f9e784b35?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Exploring the Mountains of Nepal",
    content: "Traveling through the Himalayas is more than just breathtaking views, it’s a spiritual journey...",
    author: "David Lee",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "10 Superfoods for Better Health",
    content: "Adding these nutrient-rich foods to your diet can boost your energy, immunity, and overall well-being...",
    author: "Maria Gonzalez",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1606778303077-3780ea8d5420?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "How Startups Are Changing the Economy",
    content: "From fintech to green energy, startups are driving innovation and shaping the future of global markets...",
    author: "James Carter",
  },
]

export default function ExplorePage() {
  return (
    <section className="min-h-screen pt-50 lg:pt-60 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Explore Blogs
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover insightful blogs from different authors and topics.  
            Dive into technology, travel, health, business, and more.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-[250px]">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                    {blog.content}
                  </p>
                </div>
                <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                  By {blog.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
