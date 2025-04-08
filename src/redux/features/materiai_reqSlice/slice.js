import { createSlice } from "@reduxjs/toolkit";
import { DELETE_REQUEST, GET_REQUEST, POST_REQUEST, UPDATE_REQUEST } from "@/redux/createThunk";
import fulfilledStateReducer from "../../customReducer";

const initialState = {
  itemList: [],
  itemData: [],
  loading: null,
  error: null
}


export const material_reqSlice = createSlice({
  name: 'material_reqSlice',
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
      fulfilledStateReducer(state, action, 'material_req', 'GET')
    }).addCase(GET_REQUEST.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
    }).addCase(POST_REQUEST.pending, (state) => {
      state.loading = true
    }).addCase(POST_REQUEST.fulfilled, (state, action) => {
      fulfilledStateReducer(state, action, 'material_req', 'POST')
    }).addCase(POST_REQUEST.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    }).addCase(DELETE_REQUEST.pending, (state, action) => {
      state.loading = true
      state.error = action.payload
    }).addCase(DELETE_REQUEST.fulfilled, (state, action) => {
       fulfilledStateReducer(state, action, 'material_req', 'DELETE', 'mr_r_id')
    }).addCase(DELETE_REQUEST.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    }).addCase(UPDATE_REQUEST.fulfilled, (state, action) => {
      fulfilledStateReducer(state, action, 'material_req', 'UPDATE', 'mr_r_id')
    }).addCase(UPDATE_REQUEST.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    });
  }
})

export default material_reqSlice.reducer