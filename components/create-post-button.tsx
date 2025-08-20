import React from 'react'
import { Button } from './ui/button'
import { SquarePenIcon } from 'lucide-react'
import Link from 'next/link'

const CreatePostButton = () => {
    return (
        <Link href={"/create"}>
            <Button variant={"default"}>


                <SquarePenIcon /> <span className='font-bold'>Create Post</span>

            </Button>
        </Link>
    )
}

export default CreatePostButton