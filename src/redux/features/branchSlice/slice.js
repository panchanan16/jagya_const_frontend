import { createSlice } from "@reduxjs/toolkit";
import { DELETE_REQUEST, GET_REQUEST, POST_REQUEST, UPDATE_REQUEST } from "@/redux/createThunk";
import fulfilledStateReducer from "../../customReducer";

const initialState = {
  itemList: [],
  itemData: [],
  loading: null,
  error: null
}


export const branchSlice = createSlice({
  name: 'branchSlice',
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
      fulfilledStateReducer(state, action, 'branch_data', 'GET')
    }).addCase(GET_REQUEST.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
    }).addCase(POST_REQUEST.pending, (state) => {
      state.loading = true
    }).addCase(POST_REQUEST.fulfilled, (state, action) => {
      fulfilledStateReducer(state, action, 'branch_data', 'POST')
    }).addCase(POST_REQUEST.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    }).addCase(DELETE_REQUEST.pending, (state, action) => {
      state.loading = true
      state.error = action.payload
    }).addCase(DELETE_REQUEST.fulfilled, (state, action) => {
       fulfilledStateReducer(state, action, 'branch_data', 'DELETE', 'b_id')
    }).addCase(DELETE_REQUEST.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    }).addCase(UPDATE_REQUEST.fulfilled, (state, action) => {
      fulfilledStateReducer(state, action, 'branch_data', 'UPDATE', 'b_id')
    }).addCase(UPDATE_REQUEST.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    });
  }
})


export default branchSlice.reducer