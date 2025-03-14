import { createSlice } from "@reduxjs/toolkit";
import { GET_REQUEST, POST_REQUEST } from "@/redux/createThunk";
import toast from "react-hot-toast";


const initialState = {
  clientList: [],
  clientData: [],
  loading: null,
  error: null
}


export const clientSlice = createSlice({
  name: 'clientList',
  initialState: initialState,
  reducers: {
    resetData: (state, action) => {
      state.clientList = action.payload
    }
  },

  extraReducers: (builder) => {
    builder.addCase(GET_REQUEST.pending, (state) => {
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
      }).addCase(POST_REQUEST.pending, (state) => {
        state.loading = true
        toast.loading('Submission in Progress...', {id: 'loader'}) 
      }).addCase(POST_REQUEST.fulfilled, (state, action) => {
        state.loading = false
        toast.dismiss('loader') 
        state.clientList.push(action.payload.data.data)
      }).addCase(POST_REQUEST.rejected, (state, action) => {
        state.loading = false
        console.log(action.payload)
        toast.dismiss('loader') 
        toast.error('Something Went Wrong!') 
        state.error = action.payload
      });
  }
})

export const { addClient, resetData } = clientSlice.actions

export default clientSlice.reducer