"use client"
import React, { useState } from 'react'
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
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

const formSchema = z.object({
    comment: z.string().min(1, "Please write a comment"),
})

interface AddCommentProps {
    postId: string
}

const AddComment = ({ postId }: AddCommentProps) => {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            comment: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setIsLoading(true)
            const authenticated = await getCurrentUser()
            if (!authenticated) {
                router.push("/login")
                return;
            }
            const { id } = authenticated
            const { comment } = values
            const response = await addComment({ userId: id, postId, content: comment })
            if(response.success) {
                toast.success(response.message)
                router.refresh()
                form.reset()
            }else{
                toast.error(response.message)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
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
                                    <Button type="submit" className='w-1/4 min-w-fit mx-auto' disabled={isLoading}>
                                        {isLoading ? (
                                            <div className='flex gap-2 items-center'>
                                                <Loader2 className='animate-spin'/>
                                                <span>Posting...</span>
                                            </div>
                                        ) : <span>Post comment</span>}
                                    </Button>
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