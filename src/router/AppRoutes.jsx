import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routePages from "./routes";

function AppRoutes() {
  const router = createBrowserRouter(routePages);

  return <RouterProvider router={router} />;

}

export default AppRoutes;
