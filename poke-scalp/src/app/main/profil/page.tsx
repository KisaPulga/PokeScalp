import { Suspense } from "react";
import { connection } from "next/server";
import { Button } from "@/components/ui/button";
import { requireUser } from "@/src/server/services/user.service";

export default function Profil() {
  return (
    <Suspense fallback={<p>Chargement en cours...</p>}>
      <ProfilContent />
    </Suspense>
  );
}

async function ProfilContent() {
  await connection();
  const user = await requireUser();

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Connecté user : {user.email}
      </h1>
      <Button>
        Test
      </Button>
    </div>

  );
}