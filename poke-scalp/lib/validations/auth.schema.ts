import { z } from "zod"

export const signInSchema = z.object({
    email: z.email("Email invalide"),
    password: z.string().min(1, "Mot de passe requis")
});

export const signUpSchema = z.object({
  email: z.email("Email invalide"),
  password: z.string().min(8, "8 caractères minimum"),
});