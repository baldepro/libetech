import { Button } from '@/components/ui/button'
import Image from 'next/image'
import NavBar from './_components/NavBar'
import { Download, MessageSquare } from 'lucide-react'
import AboutMe from './_components/AboutMe'

export default function Home() {
  return (
    <div className="pt-6 bg-gradient-to-tr from-indigo-500 from-0% via-sky-500 via-30% to-emerald-700 to-100% min-h-screen">
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
          <Button className='gap-2' type='button'>
            <Download size={16}/>
            Download my resume
          </Button>
          <Button className='gap-2' type='button' variant={'secondary'}>
            <MessageSquare size={16}/>
            Text me
          </Button>
        </div>
        <AboutMe/>
      </div>
    </div>
  )
}
