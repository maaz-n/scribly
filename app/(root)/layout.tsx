import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import React from 'react'

const RootLayout = async ({children}: {children: React.ReactNode}) => {
    const session = await auth.api.getSession({
    headers: await headers()
  })
  return (
    <>
    <Navbar isAuthenticated={!!session}/>
    <div>{children}</div>
    <Footer/>
    </>
  )
}

export default RootLayout