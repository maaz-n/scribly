"use client"
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

interface PostCardProps {
    title: string,
    content: string,
    imageUrl: string,
    authorName: string
}

const PostCard = ({title, content, imageUrl, authorName}: PostCardProps) => {
    
  return (
    <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
        <div className="relative w-full h-48">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-[250px]">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                    {content}
                  </p>
                </div>
                <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                  By {authorName}
                </p>
              </div>
    </motion.div>
  )
}

export default PostCard