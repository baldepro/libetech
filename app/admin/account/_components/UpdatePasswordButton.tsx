import useSession from "@/app/hooks/useSession"
import ButtonItem from "../../_components/ButtonItem"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Loader2, Save } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { updateEmail, updatePassword } from "@/services/auth.service"

const UpdatePasswordFormSchema = z.object({
    password: z.string().min(8, 'Password must be at least 8 characters'),
    newPassword: z.string().min(8, 'Password must be at least 8 characters'),
    confirmNewPassword: z.string().min(8, 'Password must be at least 8 characters'),
}).refine( data => data.newPassword === data.confirmNewPassword, {
    message: 'Passwords do not match',
    path: ['confirmNewPassword'],
})

type UpdatePasswordFormValues = z.infer<typeof UpdatePasswordFormSchema>

const UpdatePasswordButton = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { user, refreshSession } = useSession()

    const form = useForm<UpdatePasswordFormValues>({
        mode: 'onSubmit',
        //@ts-ignore
        resolver: zodResolver(UpdatePasswordFormSchema),
    })

    const handleSubmit = async(values: UpdatePasswordFormValues) => {
        try {
            setIsLoading(true)
            await updatePassword(values.newPassword, user?.email??'', values.password)
            setIsDialogOpen(false)
        } catch (error: any) {
            console.log(error)
        } finally {
            setIsLoading(false)
            refreshSession()
        }
    }

    const handleOpenDialog = () => {
        setIsDialogOpen(true)
    }

    const handleOpenChange = (isOpen: boolean) => {
        refreshSession()
        setIsDialogOpen(isOpen)
    }

    return (
        <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <ButtonItem
                    onClick={handleOpenDialog}
                >
                    Password
                </ButtonItem>
            </DialogTrigger>
            <DialogContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)}>
                        <DialogHeader>
                            <DialogTitle>Update Password</DialogTitle>
                            <DialogDescription>
                                Update your password
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem className="mb-4">
                                        <FormLabel>Current Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="********" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="newPassword"
                                render={({ field }) => (
                                    <FormItem className="mb-4">
                                    <FormLabel>New Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="*********" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="confirmNewPassword"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Confirm New Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="*********" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DialogFooter>
                            <Button
                            className="gap-2"
                                disabled={isLoading}
                            >
                                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save size={16}/>}
                                Save
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default UpdatePasswordButton