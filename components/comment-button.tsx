
import React from 'react'
import { Button } from './ui/button'
import { MessageCircle } from 'lucide-react'

const CommentButton = () => {
  return (
      <Button variant={"ghost"} className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
        <MessageCircle className="w-5 h-5" />
        <span>Comment</span>
      </Button>
  )
}

export default CommentButton