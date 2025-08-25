"use client"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface PostCardProps {
  title: string
  content: string
  imageUrl: string
  authorName: string
  slug: string
}

const PostCard = ({ title, content, imageUrl, authorName, slug }: PostCardProps) => {
  return (
    <Link href={`/post/${slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        
        className="bg-card text-card-foreground rounded-2xl border border-border shadow-md overflow-hidden hover:shadow-xl transition-all"
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
            <h2 className="text-lg font-semibold text-foreground mb-2">
              {title}
            </h2>
            <div
              className="text-muted-foreground line-clamp-3"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
          <p className="mt-4 text-sm font-medium text-muted-foreground">
            By {authorName}
          </p>
        </div>
      </motion.div>
    </Link>
  )
}

export default PostCard
