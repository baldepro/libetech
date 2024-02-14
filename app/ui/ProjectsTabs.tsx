import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';
import OpenSourceProjects from './projects/OpenSourceProjects';
import ProfessionalProjects from './projects/ProfessionalProjects';

function ProjectsTabs() {
    return (
        <div className='mt-8 pt-20 md:pt-30 mx-8 flex flex-col' id='projects'>
            <h2 className='text-4xl font-bold'>My projects</h2>
            <div className='mt-10'>
                <Tabs defaultValue="Open Source" className="text-left">
                    <TabsList className='w-fit mx-auto my-auto mb-4'>
                        <TabsTrigger value="Open Source">Open Source</TabsTrigger>
                        <TabsTrigger value="Professionals">Professionals</TabsTrigger>
                        <TabsTrigger value="Others">Others</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Open Source" className=''>
                        <OpenSourceProjects/>
                    </TabsContent>
                    <TabsContent value="Professionals" className=''>
                        <ProfessionalProjects />
                    </TabsContent>
                    <TabsContent value="Others" className=''>
                        Others projects
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}

export default ProjectsTabs;