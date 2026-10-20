
"use client"
import "./page.css";
import { useActionState } from "react";
import { signUpAction } from "@/src/server/actions/auth.action";

export default function SignUp() {
  const [state, action, pending] = useActionState(signUpAction, null);
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
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
          pending ? "Signing Up..." : "Sign Up"
          }</button>
      </form>
    </div>
  );
}