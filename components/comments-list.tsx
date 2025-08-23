import React from 'react'
import { Card, CardContent } from './ui/card'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Comment, User } from '@/db/schema'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { Button } from './ui/button'
import { Trash2 } from 'lucide-react'
import { getCurrentUser } from '@/server/auth'
import CommentDeleteButton from './comment-delete.button'

interface CommentsListProps {
    commentsWithAuthors: {
        user: User | null,
        comments: Comment
    }[]
}

dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.extend(timezone)

const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

export default async function CommentsList({ commentsWithAuthors }: CommentsListProps) {

    const commentsCount = commentsWithAuthors.length

    const currentUser = await getCurrentUser()

    return (
        <>
            <h2 className='mt-4 mb-2 font-bold text-2xl'>{commentsCount} {commentsCount === 1 ? "Comment" : "Comments"}</h2>
            <div className="space-y-4">
                {commentsWithAuthors.map((singleComment) => (
                    <Card key={singleComment.comments.id} className="p-4 relative">
                        <CardContent className="flex gap-3 p-0">
                            <Avatar>
                                <AvatarFallback>{singleComment.user ? singleComment.user.name.charAt(0) : "Unknown User"}</AvatarFallback>
                            </Avatar>
                            <div className='flex-1'>
                                <div className="flex items-center justify-between">
                                    <div className='flex items-center gap-2'>
                                        <span className="font-medium">{singleComment.user ? singleComment.user.name : "Unknown User"}</span>
                                        <span className="text-xs text-gray-500">{dayjs(singleComment.comments.createdAt?.toUTCString()).tz(userTimeZone).fromNow()}</span>
                                    </div>
                                    {currentUser?.id === singleComment.user?.id && (
                                        <CommentDeleteButton commentId={singleComment.comments.id}/>
                                    )}
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300">{singleComment.comments.content}</p>
                            </div>


                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}
