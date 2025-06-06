import { createBrowserRouter, RouterProvider } from "react-router-dom";
import generateRoutePages from "./routes";
import { useDispatch } from "react-redux";
import { LOAD_APP } from "@/redux/features/loginSlice/slice";
import { useEffect } from "react";

function AppRoutes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LOAD_APP({ endpoint: "", body: "", entity: "login", stateKey: 'userData' }));
  }, []);

  const router = createBrowserRouter(generateRoutePages());
  return <RouterProvider router={router} />;
}

export default AppRoutes;
