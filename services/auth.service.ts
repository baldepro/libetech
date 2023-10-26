import { supabase } from '@/lib/database'
export const signInUser = async (email: string, password: string) => {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
        return data
    } catch (error) {
        throw error
    }
}

export const signOutUser = async () => {
    try {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
    } catch (error) {
        throw error
    }
}

export const updateEmail = async (newEmail: string, email: string, password: string) => {
    try {
        await signInUser(email, password)
        const { error } = await supabase.auth.updateUser({ email: newEmail })
        if (error) throw error
    } catch (error) {
        throw error
    }
}

export const updatePassword = async (newPassword: string, email: string, password: string) => {
    try {
        await signInUser(email, password)
        const { error } = await supabase.auth.updateUser({ password: newPassword })
        if (error) throw error
    } catch (error) {
        throw error
    }
}