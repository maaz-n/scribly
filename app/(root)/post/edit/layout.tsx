import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function layout({children}: {children: React.ReactNode}) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        redirect('/explore')
    }
    return (
        <div>
            {children}
        </div>

    )
}
