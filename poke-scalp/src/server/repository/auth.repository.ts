import "server-only"
import {createClient} from '@/src/lib/supabase/server'

export const authRepository = {
    async signIn(email: string, password: string) {
        const supabase = await createClient();
        return supabase.auth.signInWithPassword({email, password});
    },
    async signUp(email: string, password: string){
        const supabase = await createClient();
        return supabase.auth.signUp({email, password});
    }
}