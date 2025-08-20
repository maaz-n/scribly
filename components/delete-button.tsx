"use client"

import React from 'react'
import { Button } from './ui/button'
import { Trash2Icon } from 'lucide-react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { deletePost } from '@/server/post'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

const DeleteButton = ({ postId }: { postId: string }) => {
    const router = useRouter()
    const handleDelete = async () => {
        try {
            const response = await deletePost(postId)
            if (response.success) {
                toast.success(response.message)
                router.push("/explore")
            } else {
                toast.error(response.message)
            }
        } catch (error) {
            console.error(error)
        }
    }
    return (
            <AlertDialog>
                <Tooltip>
                    <AlertDialogTrigger asChild>
                        <TooltipTrigger asChild>
                            <Button variant={"ghost"}>
                                <Trash2Icon size={20} />
                            </Button>

                        </TooltipTrigger>
                    </AlertDialogTrigger>
                    <TooltipContent>
                        <p>Delete</p>
                    </TooltipContent>
                </Tooltip>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure you want to delete this post?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your post.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

    )
}

export default DeleteButton