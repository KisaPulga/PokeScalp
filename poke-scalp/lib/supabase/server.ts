import "server-only";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabasePublishableKey) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY in .env.local, then restart the Next.js server."
    );
  }

  return createServerClient(
    supabaseUrl,
    supabasePublishableKey,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (list: { name: string; value: string; options: CookieOptions }[]) => {
          try { list.forEach(({ name, value, options }) => cookieStore.set(name, value, options)); }
          catch { /* Server Component : le proxy s'en charge */ }
        },
      },
    }
  );
}
// Explication : 

// Adaptateur cookies : fait le pont entre Supabase et les cookies Next.js.


// Info : Un cookie http contient ça : 
        // type CookieOptions = {
        //   path?: string;          // chemins où le cookie est envoyé ("/" = tout le site)
        //   domain?: string;        // domaine (sous-domaines inclus si précisé)
        //   maxAge?: number;        // durée de vie en secondes (0 = supprimer)
        //   expires?: Date;         // date d'expiration (alternative à maxAge)
        //   httpOnly?: boolean;     // true = illisible en JS côté navigateur
        //   secure?: boolean;       // true = envoyé uniquement en HTTPS
        //   sameSite?: "lax" | "strict" | "none" | boolean; // protection CSRF
        //   priority?: "low" | "medium" | "high";
        //   partitioned?: boolean;
        // };