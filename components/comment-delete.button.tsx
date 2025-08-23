"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Loader2, Trash2 } from 'lucide-react'
import { deleteComment } from '@/server/post'
import { toast } from 'sonner'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useRouter } from 'next/navigation'


export default function CommentDeleteButton({ commentId }: { commentId: string }) {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleDeleteComment = async () => {
        try {
            setIsLoading(true)
            const response = await deleteComment(commentId)
            if (response.success) {
                toast.success(response.message)
                router.refresh()
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

        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant={"destructive"} disabled={isLoading}>
                    {isLoading ? <Loader2 className='animate-spin'/> : <Trash2/> }
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to delete this comment?</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeleteComment}>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}
