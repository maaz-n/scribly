"use client"
import React from 'react'
import { Card } from './ui/card'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { addComment } from '@/server/post'
import { getCurrentUser } from '@/server/auth'
import { redirect } from 'next/navigation'
import { toast } from 'sonner'

const formSchema = z.object({
    comment: z.string().min(1).max(50),
})

interface AddCommentProps {
    postId: string
}

const AddComment = ({ postId }: AddCommentProps) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            comment: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const authenticated = await getCurrentUser()
            if (!authenticated) {
                redirect("/login")
            }
            const { id } = authenticated
            const { comment } = values
            const response = await addComment({ userId: id, postId, content: comment })
            if(response.success) {
                toast.success(response.message)
            }else{
                toast.error(response.message)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="comment"
                        render={({ field }) => (
                            <FormItem>
                                <Card className="p-4">
                                    <h3 className="text-lg font-semibold mb-2">Leave a comment</h3>


                                    <FormControl>
                                        <Textarea
                                            placeholder="Write your comment..."
                                            className="mb-3"
                                            {...field}
                                        />
                                    </FormControl>
                                    <Button type="submit" className='w-1/4 mx-auto'>Post a comment</Button>
                                </Card>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </form>
            </Form>


        </>
    )
}

export default AddComment