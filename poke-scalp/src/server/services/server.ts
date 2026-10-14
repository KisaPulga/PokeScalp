import "server-only";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
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
// getAll → Supabase lit la session (JWT + refresh token) depuis la requête
// setAll → Supabase écrit la session au login, logout ou refresh du token


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