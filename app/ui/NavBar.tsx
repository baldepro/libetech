'use client'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Layers } from "lucide-react"
import Link from "next/link"

const NavBar = () => {
    return(
        <nav className="md:flex md:justify-between items-center p-6 border border-slate-400 bg-white/70 backdrop-blur-sm rounded-2xl">
            <Link href={"/"} className="flex text-3xl font-semibold">
                <Layers size={32}/>
                <span className="pl-3">Talibé BALDE</span>
            </Link>
            <NavigationMenu className="px-4">
                <NavigationMenuList className="flex flex-col md:flex-row gap-3 mt-2 items-start text-start">
                    <NavigationMenuItem>
                        <Link href="#about-me" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle({
                                className: "bg-transparent hover:bg-white"
                            })}>
                                Who is Talibé ?
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="#projects" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle({
                                className: "bg-transparent hover:bg-white"
                            })}>
                                Projects
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="https://linkedin.com/in/talib%C3%A9-balde-b71640134"  target="_blank" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle({
                                className: "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-fuchsia-50"
                            })}>
                                Work with me
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}

export default NavBar