import "server-only"
import { authRepository } from "../repository/auth.repository"
import { BusinessError } from "../error";
import { redirect } from "next/dist/client/components/navigation";
export const authService = {
    async signIn(email: string, password: string)
    {
        const {error} = await authRepository.signIn(email, password);
        if(error){
            if(error.code === "email_not_confirmed"){
                throw new BusinessError("Confirme ton email avant de te connecter")
            }
            throw new BusinessError("Email ou mot de passe incorrect");
        }
    },
    async signUp(email: string, password: string){
        const {error} = await authRepository.signUp(email, password);
        if(error){
            console.error("Supabase signUp error:", error.code, error.message);
            if(error.code === "email_already_exists"){
                throw new BusinessError("Cet email est déjà utilisé")
            }
            throw new BusinessError("Erreur lors de l'inscription");
        }
    },
    async getCurrentUserEmail() {
        const user = await authRepository.getCurrentUser();
        return user?.email ?? null;
        }
}

export async function requireUser() {
  const user = await authRepository.getCurrentUser();
  if (!user) redirect("/signin");
  return user;
}

