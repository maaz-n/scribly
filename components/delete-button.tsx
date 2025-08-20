import React from 'react'
import { Button } from './ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Trash2Icon } from 'lucide-react'

const DeleteButton = () => {
    return (
        <Button variant={"ghost"}>
            <Tooltip>
                <TooltipTrigger>
                    <Trash2Icon size={20} />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Delete</p>
                </TooltipContent>
            </Tooltip>
        </Button>
    )
}

export default DeleteButton