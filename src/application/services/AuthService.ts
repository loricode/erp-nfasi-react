import type { AuthRepository } from "../../domain/ports/auth/authRepository";
import { loginUserCase } from "../../domain/useCases/loginUserCase";

export class AuthService {
 
   private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  login(email: string, password: string) {
    return loginUserCase(email, password, this.authRepository);
  }
}