import { createSlice } from "@reduxjs/toolkit";
import { DELETE_REQUEST, GET_REQUEST, POST_REQUEST, UPDATE_REQUEST } from "@/redux/createThunk";
import fulfilledStateReducer from "../customReducer";

const initialState = {
  itemList: [],
  clientData: [],
  loading: null,
  error: null
}


export const clientSlice = createSlice({
  name: 'clientSlice',
  initialState: initialState,
  reducers: {
    resetData: (state, action) => {
      state.itemList = action.payload
    }
  },

  extraReducers: (builder) => {
    builder.addCase(GET_REQUEST.pending, (state) => {
      state.loading = true
    }).addCase(GET_REQUEST.fulfilled, (state, action) => {
      fulfilledStateReducer(state, action, 'client', 'GET')
    }).addCase(GET_REQUEST.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
    }).addCase(POST_REQUEST.pending, (state) => {
      state.loading = true
    }).addCase(POST_REQUEST.fulfilled, (state, action) => {
      fulfilledStateReducer(state, action, 'client', 'POST')
    }).addCase(POST_REQUEST.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    }).addCase(DELETE_REQUEST.pending, (state, action) => {
      state.loading = true
      state.error = action.payload
    }).addCase(DELETE_REQUEST.fulfilled, (state, action) => {
      if (action.payload?.source == 'client') {
        state.loading = false
        state.itemList = state.itemList.filter((item) => item.client_id != action.payload.data.deletedId)
      }
    }).addCase(DELETE_REQUEST.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    }).addCase(UPDATE_REQUEST.fulfilled, (state, action) => {
      state.loading = false
      state.itemList = state.itemList.filter((item) => item.client_id != action.payload.data?.client?.client_id)
      state.itemList.push(action.payload.data.client)
    }).addCase(UPDATE_REQUEST.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    });
  }
})

export const { addClient, resetData } = clientSlice.actions

export default clientSlice.reducer