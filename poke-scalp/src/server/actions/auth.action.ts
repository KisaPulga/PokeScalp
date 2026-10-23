"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { authService } from "../services/auth.service";
import { signInSchema, signUpSchema } from "@/src/lib/validations/auth.schema";
import { BusinessError } from "../error";

export type ActionState = { error?: string; message?: string } | null;

export async function signInAction(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  // 1. Valider le schéma
  const parsed = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) return { error: parsed.error.issues[0].message };

  // 2. Appel au service
  try {
    await authService.signIn(parsed.data.email, parsed.data.password);
  } catch (e) {
    if (e instanceof BusinessError) return { error: e.message };
    throw e; // vraie erreur : on ne fait pas comme si ça avait marché
  }

  // 3. Rediriger
  revalidatePath("/", "layout");
  redirect("/main");
}

export async function signUpAction(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  // 1. Valider le schéma
  const parsed = signUpSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) return { error: parsed.error.issues[0].message };

  // 2. Appel au service
  try {
    await authService.signUp(parsed.data.email, parsed.data.password);
  } catch (e) {
    if (e instanceof BusinessError) return { error: e.message };
    throw e;
  }

  // 3. Confirmation par email activée → l'utilisateur n'est pas encore connecté
  return { message: "Vérifie ta boîte mail pour confirmer ton compte." };
}