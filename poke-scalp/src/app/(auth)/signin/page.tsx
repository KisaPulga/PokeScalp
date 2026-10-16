"use client"
import "./page.css";
import { useActionState } from "react";
import { signInAction } from "@/src/server/actions/action.auth";
export default function SignIn() {
  //pending true/false selon si l'action est en cours d'exécution
  //state contient l'état de l'action (erreur éventuelle) ce qui est renvoyé à l'utilisateur
  //action est actionAuth.signIn enveloppé par react et prevState est l'état précédent de l'action (null ici)
  const [state, action, pending] = useActionState(signInAction, null);
  return (
    <div className="signin-container">
      <h1>Sign In</h1>
      <form action={action}>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        {state?.error && <p style={{color: "red"}}>{state.error}</p>}
        <button type="submit" disabled={pending}>{
          pending ? "Signing In..." : "Sign In"
          }</button>
      </form>
    </div>
  );
}