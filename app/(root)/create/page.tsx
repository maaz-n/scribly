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
import React, { useState } from "react"
import { authClient } from "@/lib/auth-client"
import { createPost } from "@/server/post"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import RichTextEditor from "@/components/rich-text-editor"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  imageUrl: z.url("Enter a valid URL"),
  title: z.string().min(1),
  slug: z.string(),
  content: z
    .string()
    .min(20, "Content should be at least 20 characters")
    .max(2000, "Content can be up to 2000 characters"),
})

export default function CreateBlogPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imageUrl: "",
      title: "",
      slug: "",
      content: "",
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
      setIsLoading(true)
      const authorId = await getAuthorId()
      if (!authorId) {
        return null
      }
      const response = await createPost({
        authorId,
        ...values,
      })

      if (response.success) {
        toast.success(response.message)
        form.reset()
        router.push("/explore")
      } else {
        toast.error(response.message)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  function slugify(title: string) {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
  }

  return (
    <section className="min-h-screen pt-40 bg-background py-16 px-6">
      <div className="max-w-fit mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-foreground">Create a Blog</h1>
          <p className="mt-3 text-muted-foreground">
            Fill in the details below to publish your blog.
          </p>
        </motion.div>

        {/* Blog Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-fit bg-card text-card-foreground border border-border shadow-lg rounded-2xl p-8"
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
                          const slug = slugify(e.target.value)
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
                className="w-full font-semibold"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2 justify-center">
                    <Loader2 className="animate-spin" />
                    <span>Publishing...</span>
                  </div>
                ) : (
                  <span>Publish blog</span>
                )}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  )
}
