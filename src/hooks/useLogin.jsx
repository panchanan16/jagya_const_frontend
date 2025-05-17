import authEndpoint from "@/api/authApi";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { LOGIN_REQUEST } from "@/redux/features/loginSlice/slice";

function useLogin(entity, stateKey) {
  const stateItem = useSelector((state) => state["login"]);
  const dispatch = useDispatch();

  async function LoginUser(credentials) {
    const result = await dispatch(
      LOGIN_REQUEST({
        endpoint: authEndpoint.loginUser(entity),
        body: credentials,
        entity: "login",
        stateKey,
      })
    );

    if (result && result.payload) {
      const loginInfo = result.payload;
      if (
        loginInfo.response &&
        loginInfo.response.status &&
        loginInfo.source == "login"
      ) {
        Cookies.set("access", loginInfo.response?.data.accessToken, {
          expires: 7,
        });
        Cookies.set("refresh", loginInfo.response?.data.refreshToken, {
          expires: 7,
        });
        Cookies.set("isLoggedIn", true, {
          expires: 7,
        });
         Cookies.set("role", loginInfo.response?.data.role, {
          expires: 7,
        });
      } else {
        console.log("Incorrect autentication 👎❌");
      }
    } else {
      console.log(result.payload);
    }
  }

  async function LoginOutUser(credentials) {
    dispatch(
      LOGIN_REQUEST({
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
