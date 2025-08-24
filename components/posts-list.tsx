"use client"

import React, { useEffect, useState } from 'react'
import SearchBar from './search-bar'
import { Post, User } from '@/db/schema'
import PostCard from './post-card'
import Pagination from './pagination'

interface PostsAndAuthors {
    posts: {
        post: Post,
        user?: User | null
    }[] | undefined
}

const POSTS_PER_PAGE = 6;

export default function PostsList({posts}: PostsAndAuthors) {

    const [searchTerm, setSearchTerm] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const filteredPosts = posts?.filter((post) => post.post.title.toLowerCase().includes(searchTerm.toLowerCase()))
    if (!filteredPosts) return;
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    const endIndex = startIndex + POSTS_PER_PAGE;

    const currentPosts = filteredPosts?.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredPosts.length/POSTS_PER_PAGE)

    const pages = Array.from({length: totalPages}, (_, i) => i + 1)

    useEffect(() => {
      setCurrentPage(1)
      const totalPages = Math.ceil(filteredPosts.length/POSTS_PER_PAGE)
    }, [searchTerm])

  return (
    <>
    
    <SearchBar className="mb-3 mx-auto" setSearchTerm={setSearchTerm}/>
        {/* Blogs Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {currentPosts?.map((post) => (
            <PostCard key={post.post.id} title={post.post.title} content={post.post.content} imageUrl={post.post.imageUrl} authorName={post.user?.name ?? "Unknown"} slug={post.post.slug} />
          ))}

        </div>

          <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>

    </>
  )
}
