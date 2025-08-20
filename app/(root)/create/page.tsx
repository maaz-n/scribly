"use client"

import { motion } from "framer-motion"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import React from "react"
import { authClient } from "@/lib/auth-client"
import { createPost } from "@/server/post"
import { nanoid } from "nanoid"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    imageUrl: z.url("Enter a valid URL"),
    title: z.string().min(1),
    slug: z.string(),
    content: z.string().min(20, "Content should be atleast 20 characters").max(2000, "Content can be upto 2000 characters")
})

export default function CreateBlogPage() {

    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            imageUrl: "",
            title: "",
            slug: "",
            content: ""
        },
    })

    async function getAuthorId() {
        const session = await authClient.getSession()
        const authorId = session.data?.user.id
        if (!authorId) {
            console.error("Author not found")
            return
        }
        return authorId
    }

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const authorId = await getAuthorId()
            if (!authorId) {
                return null
            }
            const postId = nanoid(20)
            const response = await createPost({
                id: postId,
                authorId,
                ...values,
            })

            if(response.success){
                toast.success(response.message)
                router.push("/explore")
            }else{
                toast.error(response.message)
            }

        } catch (error) {

        }

    }

    function slugify(title: string) {
        const slug = title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
        return slug
    }

    return (
        <section className="min-h-screen pt-40 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 py-16 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                        Create a Blog
                    </h1>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                        Fill in the details below to publish your blog.
                    </p>
                </motion.div>

                {/* Blog Form */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8"
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
                                            <Input placeholder="Enter the title of your blog..." {...field} onChange={(e) => {
                                                field.onChange(e.target.value)
                                                const title = e.target.value
                                                const slug = slugify(title)
                                                form.setValue("slug", slug)
                                            }} />
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
                                            <Input placeholder="Enter the content of your blog..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 
            text-white font-semibold shadow-md transition-colors"
                            >
                                Publish Blog
                            </motion.button>
                        </form>
                    </Form>
                </motion.div>

            </div>
        </section>
    )
}
