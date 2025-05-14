import authEndpoint from "@/api/authApi";
import { POST_REQUEST } from "@/redux/createThunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'js-cookie';

function useLogin(entity, stateKey) {
  const stateItem = useSelector((state) => state["login"]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (stateItem && stateItem.super_admin.length) {
        Cookies.set('access', stateItem.super_admin[0].accessToken, { expires: 7 })
    }
  }, [stateItem]);

  async function LoginUser(credentials) {
    const result = dispatch(
      POST_REQUEST({
        endpoint: authEndpoint.loginUser(entity),
        body: credentials,
        entity: "login",
        stateKey,
      })
    );
    console.log(result)
  }

  async function LoginOutUser(credentials) {
    dispatch(
      POST_REQUEST({
        endpoint: authEndpoint.loginUser(entity),
        body: credentials,
        entity: "login",
        stateKey,
      })
    );
  }

  return { stateItem, LoginUser, LoginOutUser };
}

export default useLogin;
