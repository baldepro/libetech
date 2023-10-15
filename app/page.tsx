import { Button } from '@/components/ui/button'
import Image from 'next/image'
import NavBar from './_components/NavBar'
import { Download, MessageSquare } from 'lucide-react'
import AboutMe from './_components/AboutMe'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Project, { ProjectData } from './_components/projects/Project'
import OpenSourceProjects from './_components/projects/OpenSourceProjects'
import ProfessionalProjects from './_components/projects/ProfessionalProjects'
import Footer from './_components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="pt-6 bg-gradient-to-tr from-indigo-500 from-0% via-sky-500 via-30% to-emerald-700 to-100% min-h-screen">
        <div className=" py-6 absolute inset-0 bg-gradient-to-t from-white to-transparent">
          <div className='px-8'>
            <NavBar/>
          </div>
          <div className='container pl-40'>
            <div className='pt-12 flex flex-col gap-3 mb-8'>
              <p className='text-2xl font-semibold'>Hello there ! 👋</p>
              <h1 className='text-4xl font-bold'>I&apos;m Talibé BALDE</h1>
              <h2 className='text-3xl font-semibold'> a passionate web developer</h2>
            </div>
            <div className='flex gap-4 mb-12'>
              <Button className='gap-2' asChild>
                <Link href="/talibe-balde.pdf">
                    <Download size={16}/>
                    Download my resume
                </Link>
              </Button>
              <Button className='gap-2' type='button' variant={'secondary'}>
                <MessageSquare size={16}/>
                Text me
              </Button>
            </div>
            <AboutMe/>
          </div>
        </div>
      </div>
      <div className='container text-center py-8' id='projects'>
        <h2 className='text-3xl font-bold'>My projects</h2>
        <div className='m-8'>
          <Tabs defaultValue="Open Source" className="text-left">
            <TabsList className='grid grid-cols-3 mb-8 w-fit mx-auto'>
              <TabsTrigger value="Open Source">Open Source</TabsTrigger>
              <TabsTrigger value="Professionals">Professionals</TabsTrigger>
              <TabsTrigger value="Others">Others</TabsTrigger>
            </TabsList>
            <TabsContent value="Open Source" className='mx-24'>
              <OpenSourceProjects/>
            </TabsContent>
            <TabsContent value="Professionals" className='mx-24'>
              <ProfessionalProjects />
            </TabsContent>
            <TabsContent value="Others" className='mx-24'>Others projects.</TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer/>
    </>
  )
}


//  Databse password LibetcehDB23