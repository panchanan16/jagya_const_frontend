import { createSlice } from "@reduxjs/toolkit";
import { DELETE_REQUEST, GET_REQUEST, POST_REQUEST, UPDATE_REQUEST } from "@/redux/createThunk";

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
    }).addCase(GET_REQUEST.fulfilled, (state, action) => {
      state.loading = false;
      state.clientList = action.payload.data;
      state.error = null
    }).addCase(GET_REQUEST.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
    }).addCase(POST_REQUEST.pending, (state) => {
      state.loading = true
    }).addCase(POST_REQUEST.fulfilled, (state, action) => {
      state.loading = false
      state.clientList.push(action.payload.data)
    }).addCase(POST_REQUEST.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    }).addCase(DELETE_REQUEST.pending, (state, action) => {
      state.loading = true
      state.error = action.payload
    }).addCase(DELETE_REQUEST.fulfilled, (state, action) => {
      console.log(action.payload.data)
      state.loading = false
      state.clientList = state.clientList.filter((item) => item.client_id != action.payload.data.deletedId)
    }).addCase(DELETE_REQUEST.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    }).addCase(UPDATE_REQUEST.fulfilled, (state, action) => {
      console.log(action.payload.data)
      state.loading = false
      state.clientList = state.clientList.filter((item) => item.client_id != action.payload.data.client.client_id)
      state.clientList.push(action.payload.data.client)
    }).addCase(UPDATE_REQUEST.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    });
  }
})

export const { addClient, resetData } = clientSlice.actions

export default clientSlice.reducer