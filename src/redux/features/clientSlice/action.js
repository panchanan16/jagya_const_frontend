import {addClient, resetData} from '@/redux/features/clientSlice'
import { GET_REQUEST } from '@/redux/createThunk';


const clientActions = {
    createClient : (dispatch)=> {
         dispatch(addClient('users'))
    },

    getClientList : (dispatch)=> {
        dispatch(GET_REQUEST('users'))
   }
}

export default clientActions;