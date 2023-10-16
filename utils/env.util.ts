import {z} from "zod"

const EnvSchema = z.object({
    NEXT_PUBLIC_SUPABASE_URL: z.string().min(1, 'Missing SUPABASE_URL').url('Invalid SUPABASE_URL'),
    NEXT_PUBLIC_SUPABASE_KEY: z.string().min(1, 'Missing SUPABASE_KEY'),
})

export const Env = EnvSchema.parse({
    ...process.env,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    NEXT_PUBLIC_SUPABASE_KEY: process.env.NEXT_PUBLIC_SUPABASE_KEY ?? '',
})