import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  email: string | null;
  token: string | null;
  userId: string | null;
  fullname: string | null;

  setAuthState: (data: {
    email: string;
    token: string;
    userId: string;
    fullname: string;
  }) => void;

  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      email: null,
      token: null,
      userId: null,
      fullname: null,

      setAuthState: (data) => set(data),

      logout: () =>
        set({
          email: null,
          token: null,
          userId: null,
          fullname: null,
        }),
    }),
    { name: 'auth-storage' }
  )
);