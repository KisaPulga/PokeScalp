import "server-only"
import { authRepository } from "../repository/auth.repository"

export const authService = {

    async getCurrentUserEmail() {
        const user = await authRepository.getCurrentUser();
        return user?.email ?? null;
        }
}


