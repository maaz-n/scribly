import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { PenIcon } from 'lucide-react'
import { Button } from './ui/button'

const EditButton = () => {
    return (

        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant={"ghost"}>
                    <PenIcon size={20} />
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Edit</p>
            </TooltipContent>
        </Tooltip>
    )
}

export default EditButton