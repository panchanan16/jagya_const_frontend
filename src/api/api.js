import { API_ENTITY, API_PAGINATE } from "@/config/api.config";

const entityEndpoint = {
    getAll: (entity) => `${API_ENTITY}${entity}/readAll`,
    getOneWithId: (entity, id) => `${API_ENTITY}${entity}/readOne/${id}`,
    createItem: (entity) => `${API_ENTITY}${entity}/create`,
    deleteItem: (entity) => `${API_ENTITY}${entity}/remove`,
    updateItem: (entity) => `${API_ENTITY}${entity}/update`,
    getAllWithQuery: (entity, query) => `${API_ENTITY}${entity}/readAll${query ? query : ""}`,
}


export const paginationEndpoint = {
    getPagination: (entity, pageno, pagesize) => `${API_PAGINATE}${entity}?page=${pageno}&pageSize=${pagesize}`
}

export default entityEndpoint;