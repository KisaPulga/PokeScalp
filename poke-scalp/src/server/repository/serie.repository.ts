import "server-only"
import {createClient} from '@/src/lib/supabase/server'
import type { Tables, TablesInsert, TablesUpdate } from "@/src/types/database.types";

export const serieRepository = 
{
    async createSerie(data: TablesInsert<"serie">){
        const supabase = await createClient();
        return supabase.from("serie").insert(data);
    },
    async getSeries(id: Number){
        const supabase = await createClient();
        return supabase.from("serie").select("*").eq("id", id);
    },
    async getAllSeries(){
        const supabase = await createClient();
        return supabase.from("serie").select("*");
    },
    async deleteSerie(id: Number){
        const supabase = await createClient();
        return supabase.from("serie").delete().eq("id", id);
    },
    async updateSerie(id: Number, data: TablesUpdate<"serie">){
        const supabase = await createClient();
        return supabase.from("serie").update(data).eq("id", id);
    }
}