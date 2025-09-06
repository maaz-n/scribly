"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Heart, LogOut } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import LogoutButton from "../logout-button"

interface UserMenuProps {
    user?: {
        name: string
        email: string
        image?: string
    }
}

const UserMenu = ({ user }: UserMenuProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex justify-center items-center border rounded-full overflow-hidden w-8 h-8 cursor-pointer">
                    <Image
                        src={user?.image || "/user.png"}
                        alt="user-img"
                        width={32}
                        height={32}
                    />
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden border">
                            <Image
                                src={user?.image || "/user.png"}
                                alt="user-img"
                                width={40}
                                height={40}
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium">{user?.name}</span>
                            <span className="text-xs text-muted-foreground">{user?.email}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="flex items-center gap-2">
                    <Link href={"/liked-posts"} className="flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        <span>Liked Posts</span>
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex items-center gap-2 ">
                    <LogoutButton/>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserMenu
