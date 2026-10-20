import "server-only"
import {createClient} from '@/lib/supabase/server'

export const authRepository = {

    async getCurrentUser() {
        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();
        return user;
    }
}