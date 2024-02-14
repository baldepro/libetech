import { Button } from '@/components/ui/button'
import Image from 'next/image'
import NavBar from './ui/NavBar'
import { Download, MessageSquare } from 'lucide-react'
import AboutMe from './ui/AboutMe'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Project, { ProjectData } from './ui/projects/Project'
import OpenSourceProjects from './ui/projects/OpenSourceProjects'
import ProfessionalProjects from './ui/projects/ProfessionalProjects'
import Footer from './ui/Footer'
import Link from 'next/link'
import Header from './ui/Header'
import ProjectsTabs from './ui/ProjectsTabs'

export default function Home() {
  return (
    <div className="pt-6 bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen">
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


//  Databse password LibetcehDB23