"use client"

import React, { useState } from 'react'
import SearchBar from './search-bar'
import { Post, User } from '@/db/schema'
import PostCard from './post-card'

interface PostsAndAuthors {
    posts: {
        post: Post,
        user?: User | null
    }[] | undefined
}

export default function PostsList({posts}: PostsAndAuthors) {

    const [searchTerm, setSearchTerm] = useState("")

    const filteredPosts = posts?.filter((post) => post.post.title.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <>
    
    <SearchBar className="mb-3 mx-auto" setSearchTerm={setSearchTerm}/>
        {/* Blogs Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts?.map((post) => (
            <PostCard key={post.post.id} title={post.post.title} content={post.post.content} imageUrl={post.post.imageUrl} authorName={post.user?.name ?? "Unknown"} slug={post.post.slug} />
          ))}

        </div>

    </>
  )
}
