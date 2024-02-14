import { Button } from '@/components/ui/button';
import { Download, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Header() {
    return (
        <div className='pt-20 md:pt-30 mx-8 backdrop-blur-lg drop-shadow-5xl rounded-2xl'>
            <div className='flex flex-col gap-3 mb-8'>
                <p className='text-2xl font-semibold'>Hello there ! 👋</p>
                <h1 className='text-4xl font-bold'>I&apos;m Talibé BALDE</h1>
                <h2 className='text-3xl font-semibold'> a passionate web developer</h2>
            </div>
            <div className='flex flex-col md:flex-row gap-2'>
                <Button className='gap-1' type='button' variant={'secondary'}>
                    <MessageSquare size={16}/>
                    Text me
                </Button>
                <Button className='gap-1' asChild>
                    <Link href="/talibe-balde.pdf">
                        <Download size={16}/>
                        Download my resume
                    </Link>
                </Button>
            </div>
        </div>
    );
}

export default Header