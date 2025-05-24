import useLogin from "@/hooks/useLogin";
import { LogoutIcon } from "@/utils/others/icons";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function LogoutBtn() {
  const navigate = useNavigate();
  const { stateItem, LoginOutUser } = useLogin("super-admin", "super_admin");

  useEffect(() => {
    !stateItem.isLoggedIn && navigate("/admin/login");
  }, [stateItem.isLoggedIn]);

  function logoutUser() {
    LoginOutUser();
  }
  return (
    <li onClick={() => logoutUser()}>
      <a className="flex align-center">
        <LogoutIcon />
        <span className="text">LogOut</span>
      </a>
    </li>
  );
}

export default LogoutBtn;
