import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Layers } from "lucide-react"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="container mx-auto px-8 py-8">
            <Separator />
            <div className="grid grid-cols-12 pt-8 mb-8">
                <div className="col-start-1 col-span-6 flex flex-col justify-between items-start">
                    <Link
                        className="flex items-center gap-3"
                        href="/"
                        >
                        <Layers size={72} />
                        <span className="flex flex-col">
                            <span className=" text-2xl font-semibold">LibéTech</span>
                            <span className="text-md">Copyright © {currentYear}</span>
                            <span className="text-sm">Made with ❤️ by Talibé BALDE</span>
                        </span>
                    </Link>
                    <Button
                        variant="link"
                        asChild
                    >
                        <Link href="/legal-notice"> Legal Notice </Link>
                    </Button>
                </div>
                <div className="col-start-7 col-span-3">
                    <nav>
                        <ul>
                            <li className="font-semibold my-2">
                                <Button variant="link">
                                    <Link href="#about-me"  target="_blank" scroll={false}>Who is Talibé ? </Link>
                                </Button>
                            </li>
                            <li className="font-semibold my-2">
                                <Button variant="link">
                                    <Link href="#projects" target="_blank" scroll={false}>Projects</Link>
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-start-10 col-span-3 flex justify-end">
                    <nav>
                        <ul>
                        <li className="font-semibold my-2">
                                <Button variant="link" asChild>
                                    <Link href="https://github.com/baldepro/" target="_blank" rel="noreferrer">GitHub</Link>
                                </Button>
                            </li>
                            <li className="font-semibold my-2">
                                <Button variant="link" asChild>
                                    <Link href="https://www.linkedin.com/in/talib%C3%A9-balde-b71640134/" target="_blank" rel="noreferrer">LinkedIn</Link>
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Footer;