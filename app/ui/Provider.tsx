'use client';

import { Toaster } from "sonner"
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
export const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Toaster richColors closeButton/>
            {children}
            <ProgressBar
                height="3px"
                color="#000"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    )
}