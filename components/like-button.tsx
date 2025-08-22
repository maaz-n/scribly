"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Heart } from 'lucide-react'
import { likePost, unlikePost } from '@/server/post'

interface LikeButtonProps {
    likesCount: number,
    likeState: boolean,
    postId: string,
    userId: string
}

const LikeButton = ({ likesCount, likeState, postId, userId }: LikeButtonProps) => {

    const [isLiked, setIsLiked] = useState(likeState)
    const [likesLocal, setLikesLocal] = useState(likesCount)


    const handleLikes = async () => {
        if (isLiked) {
            await unlikePost(postId, userId)
            setLikesLocal(likesLocal => likesLocal - 1)
            setIsLiked(!isLiked)
        } else {
            await likePost(postId, userId)
            setLikesLocal(likesLocal => likesLocal + 1)
            setIsLiked(!isLiked)

        }
    }

    return (
        <Button variant={"ghost"} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors" onClick={handleLikes}>
            <Heart className="w-5 h-5" fill={isLiked ? "red" : "transparent"} strokeWidth={isLiked ? "0" : "2"}/>
            <span>{likesLocal}</span>
        </Button>
    )
}

export default LikeButton