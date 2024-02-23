'use client'

import { logOut } from "@/actions/user";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { PowerIcon } from "lucide-react";

export default function Header() {
    return (
        <div className="flex justify-end bg-transparent p-4 text-right">
            <form>
                <button>
                    <BackgroundGradient className="flex gap-2 rounded-sm max-w-sm p-2 text-white dark:bg-zinc-900">
                        <PowerIcon className="w-6" />
                        <div className="hidden md:block">Sign Out</div>
                    </BackgroundGradient>
                </button>
            </form>
        </div>
    )
}
