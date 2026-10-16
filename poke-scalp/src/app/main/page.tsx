import { Suspense } from "react";
import { redirect } from "next/navigation";
import { authService } from "@/src/server/services/auth.service";
import { connection } from "next/server";

export default function Main() {
  return (
    <Suspense fallback={<p>Chargement du compte...</p>}>
      <CurrentUser />
    </Suspense>
  );
}

async function CurrentUser() {
  await connection();

  const email = await authService.getCurrentUserEmail();

  if (!email) {
    redirect("/signin");
  }

  return (
    <h1 className="text-3xl font-bold underline">
      Connecté user : {email}
    </h1>
  );
}