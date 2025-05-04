import userAccess from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  let isAccess = false;

  return isAccess ? <Outlet /> : <Navigate to="/" />;
};

export default Protected;
