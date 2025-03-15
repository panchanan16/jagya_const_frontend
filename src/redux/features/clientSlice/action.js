import { DELETE_REQUEST, GET_REQUEST, POST_REQUEST } from '@/redux/createThunk';
import clientsEndpoint from '@/api/clientsApi';


const clientActions = {
     createClient: (dispatch, body) => {
          const endpoint = clientsEndpoint.createClient()
          dispatch(POST_REQUEST({ endpoint, body }))
     },

     getClientList: (dispatch) => {
          dispatch(GET_REQUEST(clientsEndpoint.getAll()))
     },

     deleteClient: (dispatch, body) => {
          dispatch(DELETE_REQUEST({endpoint: clientsEndpoint.deleteClient(), body}))
     }
}

export default clientActions;