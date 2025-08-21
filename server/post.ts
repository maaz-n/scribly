"use server"

import { db } from "@/db/db"
import { CreatePost, Post, post, user } from "@/db/schema"
import { eq } from "drizzle-orm"



export const createPost = async (data: CreatePost) => {
    try {
        const { id, imageUrl, title, slug, content, authorId } = data
        await db.insert(post).values({
            id,
            title,
            content,
            slug,
            imageUrl,
            authorId
        })

        return { success: true, message: "Post Published!" }

    } catch (error) {
        const e = error as Error
        return { success: false, message: e.message }
    }
}

export const getPosts = async () => {
    try {
        const posts = await db.select().from(post).leftJoin(user, eq(post.authorId, user.id))
        return posts.reverse()
    } catch (error) {
        console.error(error)
    }
}

export const getPostBySlug = async (slug: string) => {
    try {
        const requiredPost = await db.select().from(post).where(eq(post.slug, slug))

        return requiredPost[0]
    } catch (error) {
        console.error(error)
    }
}

export const getPostWithAuthorBySlug = async (slug: string) => {
    try {
        const requiredPost = await db.select().from(post).leftJoin(user, eq(post.authorId, user.id)).where(eq(post.slug, slug))

        return requiredPost[0]
    } catch (error) {
        console.error(error)
    }
}

export const getAuthorName = async (authorId: string) => {
    const author =  await db.select().from(user).where(eq(user.id, authorId))
    const authorName = author[0].name
    return authorName
}

export const updatePost = async (postToEdit: CreatePost) => {
    try {
        const {id, title, content, slug, imageUrl} = postToEdit
        await db.update(post).set({
            id,
            title,
            content,
            slug,
            imageUrl,
            updatedAt: new Date()
        })
        .where(eq(post.id, postToEdit.id))
        return { success: true, message: "Post updated" }
    } catch (error) {
        const e = error as Error
        return {success: false, message: e.message}
    }
}

export const deletePost = async (id: string) => {
    try {
        await db.delete(post).where(eq(post.id, id))
        return { success: true, message: "Post deleted!" }
    } catch (error) {
        const e = error as Error
        return { success: false, message: e.message }
    }
}