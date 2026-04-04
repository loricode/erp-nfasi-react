import type { AuthRepository } from "../../domain/ports/auth/authRepository";

export const authApiAdapter: AuthRepository = {
  async login(email, password) {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    return response.json();
  },
};