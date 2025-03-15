import { API_ENTITY } from "@/config/api.config";

const clientsEndpoint = {
    getAll : ()=> `${API_ENTITY}client/readAll`,
    getOneWithId : (id)=> `${API_ENTITY}client/getOne/${id}`,
    createClient : ()=> `${API_ENTITY}client/create`,
    deleteClient: ()=> `${API_ENTITY}client/remove`
}

export default clientsEndpoint;