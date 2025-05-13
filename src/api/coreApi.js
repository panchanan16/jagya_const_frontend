import { API_CORE } from "@/config/api.config";

const coreEndpoint = {
    getAll : (entity, endpoint)=> `${API_CORE}${entity}/${endpoint}`,
    getOneWithId : (entity, id)=> `${API_CORE}${entity}/readOne/${id}`,
    createItem : (entity, endpoint)=> `${API_CORE}${entity}/${endpoint}`,
    deleteItem: (entity)=> `${API_CORE}${entity}/remove`,
    updateItem: (entity)=> `${API_CORE}${entity}/update`,
    uploadFile: (entity, id)=> `${API_CORE}${entity}/upload/file/${id}`
}

export default coreEndpoint;