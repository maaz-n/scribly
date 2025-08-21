import React from "react"
import EditPostForm from "@/components/edit-post-form"
import { getPostBySlug } from "@/server/post"


export default async function EditPostPage({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params

    const post = await getPostBySlug(slug)
    if(!post){
        return
    }

    return (
        <EditPostForm post={post}/>
    )
}
