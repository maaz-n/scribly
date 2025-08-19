'use client'
import { redirect } from 'next/navigation'
import { Button } from './ui/button'
import { authClient } from '@/lib/auth-client'
import { LogOutIcon } from 'lucide-react'

const LogoutButton = () => {
    const handleLogout = async () => {
        
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    redirect("/")
                }
            }
        })
        
      }
  return (
    <Button variant={"outline"} onClick={handleLogout}>
        <LogOutIcon/> <span className='font-bold'>Logout</span>
    </Button>
  )
}

export default LogoutButton