import React from 'react'
import Image from 'next/image'
import { auth } from '@/lib/auth'
import { getPostCommentsWithAuthors, getPostLikes, getPostWithAuthorBySlug } from '@/server/post'
import { headers } from 'next/headers'
import DeleteButton from '@/components/delete-button'
import EditButton from '@/components/edit-button'
import LikeButton from '@/components/like-button'
import { getCurrentUser } from '@/server/auth'
import AddComment from '@/components/add-comment'
import CommentsList from '@/components/comments-list'


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

    const likes = await getPostLikes(post.post.id)
    if(!likes) return;

    const currentUser = await getCurrentUser()
    if(!currentUser) return;

    const likeState = likes.some((like) => like.userId == currentUser?.id)

    const postCommentsWithAuthor = await getPostCommentsWithAuthors(post.post.id)

    return (
        <article className="min-h-screen pt-40 bg-background py-16 px-6">
  <div className="max-w-4xl mx-auto">
    
    {/* Blog Header Image */}
    <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow mb-10">
      <Image
        src={post.post.imageUrl}
        alt={post.post.title}
        fill
        className="object-cover"
        priority
      />
    </div>

    {/* Content Wrapper */}
    <div className="bg-card text-card-foreground shadow rounded-xl p-8">
      
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">
        {post.post.title}
      </h1>

      {/* Author & Meta */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-bold">
          {post.user?.name[0] ?? "?"}
        </div>
        <div>
          <p className="text-sm text-muted-foreground">
            By <span className="font-medium text-foreground">{post.user?.name}</span>
          </p>
        </div>
      </div>

      {/* Options (only shows if you are the author) */}
      {isAuthor && (
        <div className="flex justify-end gap-3 mb-6">
          <EditButton slug={post.post.slug} />
          <DeleteButton postId={post.post.id} />
        </div>
      )}

      {/* Content */}
      <div
        className="prose prose-neutral dark:prose-invert max-w-none leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.post.content }}
      />

      {/* Like & Comment */}
      <div className="flex items-center gap-6 mt-10 border-t pt-6">
        <LikeButton
          likesCount={likes.length}
          likeState={likeState}
          postId={post.post.id}
          userId={currentUser?.id}
        />
      </div>

      <div className="mt-8 space-y-6">
        <AddComment postId={post.post.id} />
        <CommentsList commentsWithAuthors={postCommentsWithAuthor!} />
      </div>
    </div>
  </div>
</article>


    )
}

export default SinglePost