'use client'
import { useRouter } from 'next/navigation'
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
    <button onClick={handleLogout} className='flex items-center gap-2'>
        <LogOutIcon/> <span>Logout</span>
    </button>
  )
}

export default LogoutButton