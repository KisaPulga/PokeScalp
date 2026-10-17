import { Suspense } from "react";
import { redirect } from "next/navigation";
import { authService } from "@/src/server/services/auth.service";
import { connection } from "next/server";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Profil() {
  return (
    <Suspense fallback={<p>Chargement en cours...</p>}>
      <ProfilContent />
    </Suspense>
  );
}

async function ProfilContent() {
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
      <Button>
        Test
      </Button>
    </div>

  );
}