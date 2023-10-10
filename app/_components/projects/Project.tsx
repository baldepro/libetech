import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Star } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

export type ProjectData = {
    id: number
    title: string
    description: string,
    npm_url: string,
    github_url: string,
    github_stars: number,
    status: 'under-development' | 'archived' | 'released'
    website_url: string,
    technologies: {
      title: string,
      photo_url: StaticImageData
    } []
}

interface ProjectProps {
    project: ProjectData
}
const Project = ({ project }: ProjectProps) => {
  return (
    <div>
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
          <div className="flex gap-3">
            {project.status === 'under-development' && <Badge variant={"secondary"}>under development</Badge>}
            {project.status === 'archived' && <Badge variant={"outline"}>archived</Badge>}
            {project.status === 'released' && <Badge variant={"default"}>released</Badge>}
            <Badge className="flex items-center gap-2" variant={"secondary"}>
                <Star size={16} />
                <span>{project.github_stars} stars</span>
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 my-4" >
              {project.technologies.map((tech) => (
                <div key={tech.title}>
                  <Image src={tech.photo_url} alt={tech.title} title ={tech.title} width={60} height={60} className="rounded-sm"/>
                </div>
              ))}
          </div>
        </CardContent>
        <CardFooter className="gap-3 justify-end">
          <Button variant={"destructive"} asChild className="gap-2 items-center">
            <Link href={project.github_url}>
                View on Github
                <ExternalLink size={16} />
            </Link>
          </Button>
          { project.website_url && <Button variant={"default"} asChild className="gap-2 items-center">
            <Link href={project.website_url}>
                web site access
                <ExternalLink size={16} />
            </Link>
          </Button>}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Project