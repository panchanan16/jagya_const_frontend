import { DELETE_REQUEST, GET_REQUEST, POST_REQUEST, UPDATE_REQUEST } from '@/redux/createThunk';
import coreEndpoint from '@/api/coreApi';


const coreCrudActions = {
    getItemList: (entity, dispatch)=> {
        dispatch(GET_REQUEST({endpoint: coreEndpoint.getAll(entity), entity}))
    },

    createItem: (entity, dispatch, body, end) => {
        dispatch(POST_REQUEST({ endpoint: coreEndpoint.createItem(entity, end), body, entity }))
   },

    deleteItem: (entity, dispatch, body)=> {
        dispatch(DELETE_REQUEST({endpoint: coreEndpoint.deleteItem(entity), body, entity}))
    },

    updateItem: (entity, dispatch, body) => {
        dispatch(UPDATE_REQUEST({ endpoint: coreEndpoint.updateItem(entity), body, entity}))
   }
}

export default coreCrudActions;