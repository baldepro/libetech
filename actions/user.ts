import { db } from '@/lib/database';

export async  function getBiography() {
    try{
        const biography = await db.user.findFirst({
            select: {
                biography: true
            }
        });
        return biography?.biography;
    } catch (error) {
        console.log('Error: ', error)
    }
}

export async  function logOut() {
    console.log('LogOut !!')
}

export async  function logIn() {
    console.log('LogIn !!')
}