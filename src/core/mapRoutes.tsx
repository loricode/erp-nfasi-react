import type { RouteObject } from "react-router-dom";
import type { ComponentType } from "react";
import { LazyWrapper } from "./LazyWrapper";

export type AppRoute = {
  path: string;
  component: ComponentType<any>;
  children?: AppRoute[];
};

export function mapRoutes(routes: AppRoute[]): RouteObject[] {
  return routes.map((route) => {
    const element = <LazyWrapper component={route.component} />;

    return {
      path: route.path,
      element,
      children: route.children
        ? mapRoutes(route.children)
        : undefined,
    };
  });
}