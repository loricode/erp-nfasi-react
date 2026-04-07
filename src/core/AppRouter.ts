import { useRoutes } from "react-router-dom";
import { routes } from "./route";
import { mapRoutes } from "./mapRoutes";

export default function AppRouter() {
  return useRoutes(mapRoutes(routes));
}