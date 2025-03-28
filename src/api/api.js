import { API_ENTITY } from "@/config/api.config";

const entityEndpoint = {
    getAll : (entity)=> `${API_ENTITY}${entity}/readAll`,
    getOneWithId : (entity, id)=> `${API_ENTITY}${entity}/readOne/${id}`,
    createItem : (entity)=> `${API_ENTITY}${entity}/create`,
    deleteItem: (entity)=> `${API_ENTITY}${entity}/remove`,
    updateItem: (entity)=> `${API_ENTITY}${entity}/update`
}

export default entityEndpoint;