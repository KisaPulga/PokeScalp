import "server-only"
import { userRepository } from "../repository/user.repository"
import { redirect } from "next/dist/client/components/navigation";


export async function requireUser() {
  const user = await userRepository.getCurrentUser();
  if (!user) redirect("/signin");
  return user;
}


