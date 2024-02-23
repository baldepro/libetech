import NavBar from './ui/NavBar'
import AboutMe from './ui/AboutMe'
import Footer from './ui/Footer'
import Header from './ui/Header'
import ProjectsTabs from './ui/ProjectsTabs'

export default async function Home() {
  return (
    <div className='pt-6'>
        <div className="container">
          <NavBar/>
        </div>
        <div className='container'>
            <Header/>
        </div>
        <div className='container'>
          <AboutMe/>
        </div>
        <div className='container'>
          <ProjectsTabs/>
        </div>
        <Footer/>
      </div>
  )
}