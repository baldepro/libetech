import {createClient } from '@supabase/supabase-js'

import { Env } from '@/utils/env.util'

export const supabase = createClient(Env.NEXT_PUBLIC_SUPABASE_URL, Env.NEXT_PUBLIC_SUPABASE_KEY)
