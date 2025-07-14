import authEndpoint from "@/api/authApi";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { LOGIN_REQUEST, setLogout } from "@/redux/features/loginSlice/slice";
import coreEndpoint from "@/api/coreApi";

function useLogin(entity, stateKey) {
  const stateItem = useSelector((state) => state["login"]);
  const dispatch = useDispatch();

  async function LoginUser(credentials) {
    const result = await dispatch(
      LOGIN_REQUEST({
        endpoint: coreEndpoint.createItem(credentials.login_type, 'login'),
        body: credentials,
        entity: "login",
        stateKey,
      })
    );

    if (result && result.payload) {
      const loginInfo = result.payload;
      // console.log(loginInfo)
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
        window.localStorage.setItem("user", JSON.stringify({name: "Panchanan Deka", role: loginInfo.response?.data.role}));
      } else {
        console.log("Incorrect autentication 👎❌");
      }
    } else {
      console.log(result.payload);
    }
  }

  async function LoginOutUser() {
    Cookies.remove("access");
    Cookies.remove("isLoggedIn");
    Cookies.remove("role");
    Cookies.remove("refresh");
    window.localStorage.removeItem("user");
    dispatch(setLogout());
  }

  return { stateItem, LoginUser, LoginOutUser };
}

export default useLogin;
