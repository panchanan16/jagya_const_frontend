import { createBrowserRouter, RouterProvider } from "react-router-dom";
import generateRoutePages from "./routes";

function AppRoutes() {
  const router = createBrowserRouter(generateRoutePages());
  return <RouterProvider router={router} />;

}

export default AppRoutes;
