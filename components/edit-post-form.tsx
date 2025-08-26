"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Post } from '@/db/schema'
import { updatePost } from '@/server/post'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import RichTextEditor from './rich-text-editor'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'


const formSchema = z.object({
    imageUrl: z.url("Enter a valid URL"),
    title: z.string().min(1),
    slug: z.string(),
    content: z.string().min(20, "Content should be atleast 20 characters")
})

interface EditPostFormProps {
    post: Post
}

const EditPostForm = ({ post }: EditPostFormProps) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    function slugify(title: string) {
        const slug = title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
        return slug
    }

    const { id, authorId, title, content, imageUrl, slug } = post

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            imageUrl,
            title,
            slug,
            content
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setIsLoading(true)
            const response = await updatePost(
                {
                    id,
                    ...values,
                    authorId
                }
            )
            if (response.success) {
                toast.success(response.message)
                router.push(`/post/${slug}`)
            } else {
                toast.error(response.message)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }

    }

    return (
        <section className="min-h-screen pt-40 bg-background py-16 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-foreground">
                        Edit your post
                    </h1>
                    <p className="mt-3 text-muted-foreground">
                        Modify the details below to edit your post.
                    </p>
                </motion.div>

                {/* Blog Form */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full bg-card text-card-foreground border border-border shadow-lg rounded-2xl p-8"
                >
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="imageUrl"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Image URL</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter image URL..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter the title of your blog..."
                                                {...field}
                                                onChange={(e) => {
                                                    field.onChange(e.target.value)
                                                    const title = e.target.value
                                                    const slug = slugify(title)
                                                    form.setValue("slug", slug)
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="slug"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>URL slug</FormLabel>
                                        <FormControl>
                                            <Input disabled {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="content"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Content</FormLabel>
                                        <FormControl>
                                            <RichTextEditor value={field.value} onChange={field.onChange} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="w-1/4 mx-auto block font-semibold"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="flex items-center gap-2 justify-center">
                                        <Loader2 className="animate-spin" />
                                        <span>Updating...</span>
                                    </div>
                                ) : (
                                    <span>Update blog</span>
                                )}
                            </Button>
                        </form>
                    </Form>
                </motion.div>
            </div>
        </section>

    )
}

export default EditPostForm