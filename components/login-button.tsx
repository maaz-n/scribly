import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { LogInIcon } from 'lucide-react'

const LoginButton = () => {
    return (
        <Link href={"/login"}>
            <Button variant={"outline"}>
                <LogInIcon /> <span className='font-bold'>Login</span>
            </Button>
        </Link>
    )
}

export default LoginButton