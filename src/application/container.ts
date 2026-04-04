// application/container.ts
import { AuthService } from "./services/AuthService";
import { authApiAdapter } from "../infrastructure/api/authApiAdapter";

export const authService = new AuthService(authApiAdapter);