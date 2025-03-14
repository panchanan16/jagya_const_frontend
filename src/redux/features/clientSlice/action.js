import { GET_REQUEST, POST_REQUEST } from '@/redux/createThunk';
import clientsEndpoint from '@/api/clientsApi';


const clientActions = {
    createClient : (dispatch, body)=> {
         const endpoint = clientsEndpoint.createClient()
         dispatch(POST_REQUEST({endpoint, body}))
    },

    getClientList : (dispatch)=> {
        dispatch(GET_REQUEST(clientsEndpoint.getAll()))
   }
}

export default clientActions;