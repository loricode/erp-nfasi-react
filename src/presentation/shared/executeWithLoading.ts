import { useUiStore } from "../store/ui/useUiStore";


export const executeWithLoading = async <T>(
  key: string,
  fn: () => Promise<T>
): Promise<T> => {
  const { setLoading } = useUiStore.getState();

  try {
    setLoading(key, true);   // activa el loading para esta key
    return await fn();       // ejecuta tu función async
  } finally {
    setLoading(key, false);  // desactiva el loading al finalizar
  }
};