import { Button } from '@/components/ui/button'
import Image from 'next/image'
import NavBar from './_components/NavBar'

export default function Home() {
  return (
    <div className="p-8 bg-gradient-to-tr from-indigo-500 from-0% via-sky-500 via-30% to-emerald-700 to-100% min-h-screen">
      <NavBar></NavBar>
    </div>
  )
}
