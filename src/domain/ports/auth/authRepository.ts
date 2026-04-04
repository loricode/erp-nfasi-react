import type { User } from "../../models/user/User";

export interface AuthRepository {
  login(email: string, password: string): Promise<User>;
}