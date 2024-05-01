import { AuthService } from "./services/auth.service";

export function initAppData(authService: AuthService) {
    return () => authService.authenticateUserFromPreviousSession();
}