import React, { type ComponentType, type LazyExoticComponent } from "react";

type PreloadableComponent<T extends ComponentType<any>> =
  LazyExoticComponent<T> & {
    preload: () => Promise<{ default: T }>;
  };

export function lazyWithPreload<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>
): PreloadableComponent<T> {
  const Component = React.lazy(importFn) as PreloadableComponent<T>;
  Component.preload = importFn;
  return Component;
}