import { createSlice } from "@reduxjs/toolkit";
import { GET_REQUEST } from "../createThunk";

const initialState = {
    clientList: [],
    loading: null,
    error: null
}


export const clientSlice = createSlice({
    name: 'clientList',
    initialState: initialState,
    reducers: {
      resetData: (state, action)=> {
        state.clientList = action.payload
      },
      addClient: (state, action) => {
        state.clientList.push(action.payload)
      }
    },

    extraReducers: (builder) => {
      builder.addCase( GET_REQUEST.pending, (state)=> {
          state.loading = true
      })
      .addCase(GET_REQUEST.fulfilled, (state, action) => {
        state.loading = false; 
        state.clientList = action.payload.data;
        state.error = null 
      })
      .addCase(GET_REQUEST.rejected, (state, action) => {
        state.loading = false; 
        state.error = action.payload       
      });
    }
  })
  
  export const { addClient, resetData } = clientSlice.actions
  
  export default clientSlice.reducer