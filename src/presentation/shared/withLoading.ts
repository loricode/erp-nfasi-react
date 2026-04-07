import { useUiStore } from "../store/ui/useUiStore";

export const withLoading = async <T>(
  key: string,
  fn: () => Promise<T>
): Promise<T> => {
  const { setLoading } = useUiStore.getState();

  try {
    setLoading(key, true);
    return await fn();
  } finally {
    setLoading(key, false);
  }
};