import { Suspense, type ComponentType } from 'react';

type LazyWrapperProps = {
  component: ComponentType;
};

export function LazyWrapper({ component: Component }: LazyWrapperProps) {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}