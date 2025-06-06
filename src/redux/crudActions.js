import { DELETE_REQUEST, GET_REQUEST, POST_REQUEST, UPDATE_REQUEST } from '@/redux/createThunk';
import entityEndpoint, { paginationEndpoint } from '@/api/api';


const crudActions = {
    getItemList: (entity, dispatch) => {
        dispatch(GET_REQUEST({ endpoint: entityEndpoint.getAll(entity), entity }))
    },

    createItem: (entity, dispatch, body) => {
        dispatch(POST_REQUEST({ endpoint: entityEndpoint.createItem(entity), body, entity }))
    },

    deleteItem: (entity, dispatch, body) => {
        dispatch(DELETE_REQUEST({ endpoint: entityEndpoint.deleteItem(entity), body, entity }))
    },

    updateItem: (entity, dispatch, body) => {
        dispatch(UPDATE_REQUEST({ endpoint: entityEndpoint.updateItem(entity), body, entity }))
    },

    getPaginateItems: (entity, dispatch, page, size) => {
        dispatch(GET_REQUEST({ endpoint: paginationEndpoint.getPagination(entity, page, size), entity }))
    },
}

export default crudActions;