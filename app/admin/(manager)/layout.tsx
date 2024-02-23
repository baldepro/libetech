import { ReactNode } from 'react';
import VerticalNavbar from './ui/VerticalNavbar';
import Header from './ui/Header';
export default function AdminLayout({children}: {children: ReactNode}) {
    return (
    <div className='flex bg-white'>
            <div className='md:flex-none md:w-64'>
                <VerticalNavbar/>
            </div>
            <div className="md:flex-auto md:w-full">
                <Header/>
                <div className="flex p-2 justify-start">
                    {children}
                </div>
            </div>
        </div>
    )
}
