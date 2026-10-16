import { Suspense } from "react";
import { redirect } from "next/navigation";
import { authService } from "@/src/server/services/auth.service";
import { connection } from "next/server";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    <div>
      <h1 className="text-3xl font-bold underline">
        Connecté user : {email}
      </h1>
      <Button className="mt-4">Tester</Button>
        <Badge className="ml-2">JOLI</Badge>
    </div>

  );
}