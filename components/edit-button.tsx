import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { PenIcon } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'

const EditButton = ({slug}: {slug: string}) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant={"ghost"}>
                    <Link href={`/post/edit/${slug}`}>
                    <PenIcon size={20} />
                    </Link>
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Edit</p>
            </TooltipContent>
        </Tooltip>
    )
}

export default EditButton