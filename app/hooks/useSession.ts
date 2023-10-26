import { supabase } from "@/lib/database"
import { AuthError, User } from "@supabase/supabase-js"
import { useEffect, useState } from "react"

const useSession = () => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<AuthError | null>(null)

    useEffect(() => {
        const fetchSession = async () => {
            setLoading(true)
            const { data: { session}, error } = await supabase.auth.getSession()
            if(error) setError(error)
            setUser(session?.user || null)
            setLoading(false)
        }
        fetchSession()
    }, [])

    const refreshSession = async () => {
        setLoading(true)
        const { data: { session}, error } = await supabase.auth.refreshSession()
        if(error) setError(error)
        setUser(session?.user || null)
        setLoading(false)
    }

    return {
        user,
        loading,
        error,
        refreshSession
    }
}

export default useSession