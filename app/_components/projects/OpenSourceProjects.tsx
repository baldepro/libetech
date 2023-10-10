import Project, { ProjectData } from "./Project"

import reactPng from './assets/react.png'
import tailwindPng from './assets/tailwindcss-logo.png'
import supabasePng from './assets/supabase-logo.png'

const projects: ProjectData[] = [{
    id: 1,
    title: 'LibéTech',
    description: 'This react app is a tech blog. It is made with NextJs, Tailwindcss, Supabase and Supabase auth. It is deployed on Vercel. You can check it out here: https://libetech.netlify.app.',
    npm_url: 'https://github.com/talibe/libe-tech',
    github_stars: 0,
    status: 'released',
    github_url: 'https://github.com/baldepro/libetech',
    website_url: 'https://libetech.netlify.app',
    technologies: [
      {
        title: 'React',
        photo_url: reactPng
      },
      {
        title: 'Tailwind',
        photo_url: tailwindPng
      },
      {
        title: 'Supabase',
        photo_url: supabasePng
      }
    ]
  }]
const OpenSourceProjects = () => {
    return (
        projects.map((project) => (
            <Project key={project.id} project={project} />
        ))
    )
}

export default OpenSourceProjects