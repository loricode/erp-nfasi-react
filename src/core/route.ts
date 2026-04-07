import { lazyWithPreload } from "./lazyWithPreload";

export const routes = [
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