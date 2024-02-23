import * as z from 'zod'

export const UserSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    biography: z.string()
})