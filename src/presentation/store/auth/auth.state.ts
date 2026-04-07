export interface AuthState {
  email: string | null;
  token: string | null;
  userId: string | null;
  fullname: string | null;
}

export const initialAuthState: AuthState = {
  email: null,
  token: null,
  userId: null,
  fullname: null,
};