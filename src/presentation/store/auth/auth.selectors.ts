import { useAuthStore } from './useAuthStore';

  export const userSelector = useAuthStore((s) => ({ email: s.email }));
  