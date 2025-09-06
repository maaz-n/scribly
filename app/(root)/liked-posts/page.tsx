import { LikedPostCard } from '@/components/liked-post-card'
import { getCurrentUser } from '@/server/auth'
import { getLikedPosts } from '@/server/post'
import { redirect } from 'next/navigation'
import React from 'react'

const LikedPostsPage = async () => {

    const currentUser = await getCurrentUser()
    if (!currentUser) redirect("/login")
    const likedPosts = await getLikedPosts(currentUser.id)
    if (!likedPosts) return;

    return (
        <section className="min-h-screen py-16 px-6 pt-50 lg:pt-60 bg-background">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-foreground">
                        Liked <span className="text-primary">Blogs</span>
                    </h1>
                    <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                        Find all your liked blogs below
                    </p>
                </div>

                {likedPosts.length > 0 ? (
                    likedPosts.map((post) => (
                        <div key={post?.id} className='mb-4'>

                            <LikedPostCard  title={post?.title!} content={post?.content!} image={post?.imageUrl!} slug={post?.slug!} />
                        </div>
                    ))
                ) : (
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-center mt-20 font-light text-foreground">
                        You don't have any liked posts
                    </h1>
                )}
            </div>
        </section>
    )
}

export default LikedPostsPage