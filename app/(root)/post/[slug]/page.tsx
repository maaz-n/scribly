import React from 'react'
import Image from 'next/image'
import { auth } from '@/lib/auth'
import { getPostWithAuthorBySlug } from '@/server/post'
import { headers } from 'next/headers'
import DeleteButton from '@/components/delete-button'
import EditButton from '@/components/edit-button'
import DOMPurify from "dompurify"


const SinglePost = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params

    const post = await getPostWithAuthorBySlug(slug)
    if (!post) {
        return (
            <div>No post</div>
        )
    }

    const checkAuthor = async () => {
        const session = await auth.api.getSession({
            headers: await headers()
        })

        const loggedInUser = session?.user.id
        const postAuthor = post.post.authorId
        if (loggedInUser == postAuthor) {
            return true
        } else {
            return false
        }


    }
    const isAuthor = await checkAuthor();
    return (
        <article className="min-h-screen pt-40 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 py-16 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Blog Header Image */}
                <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg mb-8">
                    <Image
                        src={post.post.imageUrl}
                        alt={post.post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {post.post.title}
                </h1>

                {/* Author & Meta */}
                <div className="flex items-center space-x-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold">
                        {post.user?.name[0] ?? "?"}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                        By <span className="font-semibold">{post.user?.name}</span>
                    </span>
                </div>

                {/* Options (only shows if you are the author) */}
                {isAuthor && (
                    <div className='flex justify-end items-center gap-5 mb-3'>
                        <EditButton slug={post.post.slug} />
                        <DeleteButton postId={post.post.id} />
                    </div>
                )}

                {/* Content */}
                <div className='prose dark:prose-invert max-w-none leading-relaxed' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.post.content) }} />

            </div>
        </article>
    )
}

export default SinglePost