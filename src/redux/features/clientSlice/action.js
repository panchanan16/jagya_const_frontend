import { DELETE_REQUEST, GET_REQUEST, POST_REQUEST, UPDATE_REQUEST } from '@/redux/createThunk';
import clientsEndpoint from '@/api/clientsApi';


const clientActions = {
     createClient: (dispatch, body) => {
          dispatch(POST_REQUEST({ endpoint: clientsEndpoint.createClient(), body }))
     },

     getClientList: (dispatch) => {
          dispatch(GET_REQUEST(clientsEndpoint.getAll()))
     },

     deleteClient: (dispatch, body) => {
          dispatch(DELETE_REQUEST({ endpoint: clientsEndpoint.deleteClient(), body }))
     },

     updateClient: (dispatch, body) => {
          dispatch(UPDATE_REQUEST({ endpoint: clientsEndpoint.updateClient(), body }))
     }
}

export default clientActions;