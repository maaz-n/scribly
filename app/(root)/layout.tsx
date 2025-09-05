import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import React from 'react'

const RootLayout = async ({children}: {children: React.ReactNode}) => {
    const session = await auth.api.getSession({
    headers: await headers()
  })
  const user = session?.user
  return (
    <>
    <Navbar isAuthenticated={!!session} user={user}/>
    <div>{children}</div>
    <Footer/>
    </>
  )
}

export default RootLayout