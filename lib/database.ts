import {createClient } from '@supabase/supabase-js'

import { Env } from '@/utils/env.util'

export const supabase = createClient(Env.SUPABASE_URL, Env.SUPABASE_KEY)
