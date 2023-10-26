import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LogOut, User, User2 } from "lucide-react"
import Link from "next/link"

const UserDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
            <Avatar>
                <AvatarImage src="" alt="Profile picture" />
                <AvatarFallback className="bg-slate-900 text-slate-100">
                    <User2 size={16}/>
                </AvatarFallback>
            </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>My account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href="/admin/account">
                        <User size={16} />
                        <span className="ml-2">Profile</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive hover:!text-destructive">
                    <LogOut size={16} />
                    <span className="ml-2">Logout</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown