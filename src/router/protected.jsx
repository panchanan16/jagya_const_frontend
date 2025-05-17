import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const isAccess = useSelector((state)=> state['login']);
  return isAccess.isLoggedIn ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default Protected;
