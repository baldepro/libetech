'use client';

import { logOut } from "@/actions/user";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form"

export default function LoginForm() {
    const form = useForm({
        defaultValues: {
            username: '',
            password: '',
        },
    })
    return (
        <div className="flex align-middle justify-center">
        <Card className=" w-full md:w-[300px]">
                <CardHeader>
                <CardTitle className="flex justify-center">Authentication 🔐 </CardTitle>
                    <CardDescription className="flex justify-center">auth with login and password</CardDescription>
                </CardHeader>
                <Form {...form}>
                    <form action={logOut} className="space-y-8">
                        <CardContent>
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Username" {...field} />
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
                                            <Input placeholder="Password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                    <CardFooter className="flex justify-end">
                            <Button type="submit">Login</Button>
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </div>
    )
}
