'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from "@/components/ui/input"
import { Form, FormItem, FormLabel, FormControl, FormMessage, FormField } from "@/components/ui/form"
import { LogIn } from "lucide-react"
import { signInUser } from "@/services/auth.service"
import { useState } from "react"
import { toast } from 'sonner'
import { useRouter } from "next-nprogress-bar"

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const loginFormSchema = z.object({
        email: z.string().email('Invalid email address'),
        password: z.string().min(8),
    })
    type LoginFormValues = z.infer<typeof loginFormSchema>
    const form = useForm<LoginFormValues>({resolver: zodResolver(loginFormSchema)})
    const handleSubmit = async (data: LoginFormValues) => {
        try {
            setIsLoading(true)
            await signInUser(data.email, data.password)
            router.push('/admin')
        } catch (error: any) {
            toast.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }
    return (
       <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className='h-screen w-screen flex justify-center items-center'>
                <Card>
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>Login to administration space</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="example@email.com" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="*********" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter className="gap-3 justify-center">
                        <Button className="gap-2"><LogIn size={16}/> Login</Button>
                    </CardFooter>
                </Card>
            </form>
       </Form>
    )
}

export default LoginPage