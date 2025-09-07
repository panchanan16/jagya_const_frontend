import useLogin from "@/hooks/useLogin";
import { LogoutIcon } from "@/utils/others/icons";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from "../asideLink/asideNavlink.module.css";
import { LogOutIcon } from "lucide-react";

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
    <li className={styles.navItem} onClick={()=> logoutUser()}>
      <Link className={`${styles.navLink}`}>
        <div className={styles.navContent}>
          <div className={styles.navIcon}>
            <span style={{color: '#fff'}}><LogOutIcon /></span>
          </div>
          <span className={styles.navText}>LogOut</span>
        </div>
      </Link>
    </li>
  );
}

export default LogoutBtn;
