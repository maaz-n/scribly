'use client'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { authClient } from '@/lib/auth-client'
import { LogOutIcon } from 'lucide-react'

const LogoutButton = () => {
    const router = useRouter()
    const handleLogout = async () => {
        
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/")
                    router.refresh()
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