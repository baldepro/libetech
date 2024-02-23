'use client'

import Logo from "@/app/ui/Logo";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Layers } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import NavLinks from "./NavLinks";

export default function VerticalNavbar() {
    return (
        <div className="flex flex-col md:h-screen p-2">
            <Link href={"/"} className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white pt-28 p-4 rounded-sm flex text-2xl font-semibold">
                <Logo />
            </Link>
            <NavLinks />
        </div>
    )
}
