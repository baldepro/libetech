import Project, { ProjectData } from "./Project"

import reactPng from './assets/react.png'
import javaJpg from './assets/java-logo.jpg'
import springbootPng from './assets/springboot-logo.png'
import postgresqlPng from './assets/postgresql-logo.png'
import redux from './assets/redux-logo.png'

const projects: ProjectData[] = [{
    id: 1,
    title: 'RdvPermis',
    description: 'This project is about a web application to manage your permit. It is made with Java, Spring Boot, PostgreSQL, React and Redux. It is deployed. You can check it out here: https://candidat.permisdeconduire.gouv.fr',
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
        projects.map((project) => (
            <Project key={project.id} project={project} />
        ))
    )
}

export default ProfessionalProjects