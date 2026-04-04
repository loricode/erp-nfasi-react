// domain/useCases/loginUser.ts

import type { AuthRepository } from "../ports/auth/authRepository";


export const loginUserCase = async (
  email: string,
  password: string,
  authRepository: AuthRepository
) => {
  if (!email || !password) {
    throw new Error("Datos inválidos");
  }

  return await authRepository.login(email, password);
};