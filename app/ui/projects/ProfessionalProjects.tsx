import Project, { ProjectData } from "./Project"

import reactPng from './assets/react.png'
import javaJpg from './assets/java-logo.jpg'
import springbootPng from './assets/springboot-logo.png'
import postgresqlPng from './assets/postgresql-logo.png'
import redux from './assets/redux-logo.png'

const projects: ProjectData[] = [{
    id: 1,
    title: 'RdvPermis',
    description: 'This project is about a web application to manage your permit. It is made with Java, Spring Boot, PostgreSQL, React and Redux. It is deployed.',
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
        title: 'Java',
        photo_url: javaJpg
      },
      {
        title: 'Spring Boot',
        photo_url: springbootPng
      },
      {
        title: 'Redux',
        photo_url: redux
      }
      ,
      {
        title: 'PostgreSQL',
        photo_url: postgresqlPng
      }
    ]
  },
  {
    id: 2,
    title: 'RdvPermis',
    description: 'This project is about a web application to manage your permit. It is made with Java, Spring Boot, PostgreSQL, React and Redux. It is deployed.',
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
        title: 'Java',
        photo_url: javaJpg
      },
      {
        title: 'Spring Boot',
        photo_url: springbootPng
      },
      {
        title: 'Redux',
        photo_url: redux
      }
      ,
      {
        title: 'PostgreSQL',
        photo_url: postgresqlPng
      }
    ]
  },
  {
    id: 3,
    title: 'RdvPermis',
    description: 'This project is about a web application to manage your permit. It is made with Java, Spring Boot, PostgreSQL, React and Redux. It is deployed.',
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
        title: 'Java',
        photo_url: javaJpg
      },
      {
        title: 'Spring Boot',
        photo_url: springbootPng
      },
      {
        title: 'Redux',
        photo_url: redux
      }
      ,
      {
        title: 'PostgreSQL',
        photo_url: postgresqlPng
      }
    ]
  },
  {
    id: 4,
    title: 'RdvPermis',
    description: 'This project is about a web application to manage your permit. It is made with Java, Spring Boot, PostgreSQL, React and Redux. It is deployed.',
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
        title: 'Java',
        photo_url: javaJpg
      },
      {
        title: 'Spring Boot',
        photo_url: springbootPng
      },
      {
        title: 'Redux',
        photo_url: redux
      }
      ,
      {
        title: 'PostgreSQL',
        photo_url: postgresqlPng
      }
    ]
  }]
const ProfessionalProjects = () => {
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

export default ProfessionalProjects