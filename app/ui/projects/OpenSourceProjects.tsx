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
    status: 'under-development',
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
  },
  {
    id: 2,
    title: 'LibéTech',
    description: 'This react app is a tech blog. It is made with NextJs, Tailwindcss, Supabase and Supabase auth. It is deployed on Vercel. You can check it out here: https://libetech.netlify.app.',
    npm_url: 'https://github.com/talibe/libe-tech',
    github_stars: 0,
    status: 'under-development',
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
  },
  {
    id: 3,
    title: 'LibéTech',
    description: 'This react app is a tech blog. It is made with NextJs, Tailwindcss, Supabase and Supabase auth. It is deployed on Vercel. You can check it out here: https://libetech.netlify.app.',
    npm_url: 'https://github.com/talibe/libe-tech',
    github_stars: 0,
    status: 'under-development',
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
      <div className={'border border-slate-100 bg-white/30 backdrop-blur-lg drop-shadow-5xl flex flex-col justify-center md:grid md:gap-4 md:grid-flow-row-dense md:grid-cols-2 rounded-lg space-y-4 p-4'}>
        {
          projects.map((project) => (
            <Project key={project.id} project={project} />
        ))
        }
      </div>
    )
}

export default OpenSourceProjects