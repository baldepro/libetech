'use client'

import useSession from "@/app/hooks/useSession"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import ButtonItem from "../_components/ButtonItem"
import UpdateEmailButton from "./_components/UpdateEmailButton"
import ButtonList from "../_components/ButtonList"
import UpdatePasswordButton from "./_components/UpdatePasswordButton"

const AccountPage = () => {
    const { user } = useSession()
    const handleClick = () => {
        console.log(user)
    }
    return (
        <div className="container mx-auto py-8 flex flex-col space-y-8">
            <h1 className="text-2xl font-bold mb-4">Account</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Personal informations</CardTitle>
                    <CardDescription>Manage your personal informations</CardDescription>
                </CardHeader>
                <CardContent>
                    <ButtonList>
                        <ButtonItem value={'Talibé BALDE'} onClick={handleClick}>Username</ButtonItem>
                        <ButtonItem>Bio</ButtonItem>
                        <UpdateEmailButton />
                        <UpdatePasswordButton />
                    </ButtonList>
                </CardContent>
            </Card>
        </div>
    )
}
export default AccountPage