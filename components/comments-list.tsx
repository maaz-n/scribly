import React from 'react'
import { Card, CardContent } from './ui/card'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Comment, User } from '@/db/schema'

interface CommentsListProps {
    commentsWithAuthors: {
        user: User | null,
        comments: Comment
    }[]
}

export default function CommentsList({commentsWithAuthors}: CommentsListProps) {
    return (
        <div className="space-y-4">
            {commentsWithAuthors.map((singleComment) => (
                <Card key={singleComment.comments.id} className="p-4">
                    <CardContent className="flex gap-3 p-0">
                        <Avatar>
                            <AvatarFallback>{singleComment.user ? singleComment.user.name.charAt(0) : "Unknown User"}</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-medium">{singleComment.user ? singleComment.user.name : "Unknown User"}</span>
                                {/* <span className="text-xs text-gray-500">{c.time}</span> */}
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{singleComment.comments.content}</p>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
