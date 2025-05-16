import { API_AUTH } from "@/config/api.config";

const authEndpoint = {
    loginUser: (entity) => `${API_AUTH}login/${entity}`,
    validateAccessToken: (entity) => `${API_AUTH}login/${entity}`,
    validateRefreshToken: (entity) => `${API_AUTH}login/${entity}`,
    createUser: (entity) => `${API_AUTH}`
}

export default authEndpoint;