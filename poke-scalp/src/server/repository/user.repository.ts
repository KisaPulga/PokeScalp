import "server-only"
import {createClient} from '@/src/lib/supabase/server'

export const userRepository = {

    async getCurrentUser() {
        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();
        return user;
    }
}