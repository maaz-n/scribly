import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { PenIcon } from 'lucide-react'
import { Button } from './ui/button'

const EditButton = () => {
    return (

        <Button variant={"ghost"}>
            <Tooltip>
                <TooltipTrigger>
                    <PenIcon size={20} />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Edit</p>
                </TooltipContent>
            </Tooltip>
        </Button>
    )
}

export default EditButton