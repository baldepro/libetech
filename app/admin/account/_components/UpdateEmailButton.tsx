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
import { updateEmail } from "@/services/auth.service"

const UpdateFormSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8)
})

type UpdateFormValues = z.infer<typeof UpdateFormSchema>

const UpdateEmailButton = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { user, loading, refreshSession } = useSession()

    const form = useForm<UpdateFormValues>({
        mode: 'onSubmit',
        //@ts-ignore
        resolver: zodResolver(UpdateFormSchema),
    })

    const handleSubmit = async(values: UpdateFormValues) => {
        try {
            setIsLoading(true)
            await updateEmail(values.email, user?.email??'', values.password)
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
                    value={user?.email}
                    isLoading={loading}
                >
                    Email
                </ButtonItem>
            </DialogTrigger>
            <DialogContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)}>
                        <DialogHeader>
                            <DialogTitle>Update Email Address</DialogTitle>
                            <DialogDescription>
                                Update your email address
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="mb-4">
                                        <FormLabel>email</FormLabel>
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

export default UpdateEmailButton