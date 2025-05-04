// Here we will check what is the role of user in AuthSlice and from roles object if that role has the particular page access. 
import roles from "@/auth/role"


export function useAuth() {
  const role = "finance"
  const user = {
    username: "Panchanan Deka"
  }
  const isLoggedIn = true

  return {role, user, isLoggedIn}
}


function userAccess(params) {
    const {role, user, isLoggedIn} = useAuth()
    


    return {isAccess}
}



export default userAccess