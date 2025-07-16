import { DELETE_REQUEST, GET_REQUEST, POST_REQUEST, UPDATE_REQUEST } from '@/redux/createThunk';
import coreEndpoint from '@/api/coreApi';
import { DELETE_FILE } from './features/projectSlice/slice';


const coreCrudActions = {
    getItemList: (entity, dispatch, end, stateKey = undefined )=> {
        dispatch(GET_REQUEST({endpoint: coreEndpoint.getAll(entity, end), entity, stateKey }))
    },

    createItem: (entity, dispatch, body, end, stateKey = undefined) => {
        dispatch(POST_REQUEST({ endpoint: coreEndpoint.createItem(entity, end), body, entity, stateKey }))
   },

    deleteItem: (entity, dispatch, body, end)=> {
        dispatch(DELETE_REQUEST({endpoint: coreEndpoint.deleteItem(entity, end), body, entity}))
    },

    updateItem: (entity, dispatch, body, end) => {
        dispatch(UPDATE_REQUEST({ endpoint: coreEndpoint.updateItem(entity, end), body, entity}))
   },

   deleteFile: (entity, dispatch, body, id) => {
        dispatch(DELETE_FILE({ endpoint: coreEndpoint.deleteFile(entity, id), body }))
    }
}

export default coreCrudActions;