import { lazyWithPreload } from "./lazyWithPreload";
import type { AppRoute } from "./mapRoutes";

export const routes: AppRoute[] = [
  {
    path:'/login',
    component: lazyWithPreload(() => import("../presentation/pages/auth/LoginPage"))
  },
  {
    path: "/",
    component: lazyWithPreload(() => import("../presentation/pages/home/HomePage")),
  },
  {
    path: "/dashboard",
    component: lazyWithPreload(() => import("../presentation/layouts/DashboardLayout")),
    children: [
      {
        path: "",
        component: lazyWithPreload(() => import("../presentation/pages/dashboard/home/HomePage"))
      },
    ],
  },
];