'use client'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Layers } from "lucide-react"
import Link from "next/link"

const NavBar = () => {
    return(
        <nav className="flex justify-between items-center p-4 border border-slate-100 bg-white/30 backdrop-blur-lg drop-shadow-sm rounded-2xl">
            <Link href={"/"} className="text-3xl font-semibold flex flex-row justify-between">
                <Layers size={32}/>
                <span className="pl-3">LibéTech</span>
            </Link>
            <NavigationMenu>
                <NavigationMenuList className="gap-3">
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