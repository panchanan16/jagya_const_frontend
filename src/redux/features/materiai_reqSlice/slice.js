import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DELETE_REQUEST, GET_REQUEST, POST_REQUEST, UPDATE_REQUEST } from "@/redux/createThunk";
import fulfilledStateReducer from "../../customReducer";
import { _GET, _UPDATE } from "@/request/request";


export const GET_MATERIALITEM_BYID = createAsyncThunk(
  'GET/MaterialItem-ByID',
  async ({ endpoint }, { rejectWithValue }) => {
    try {
      const response = await _GET(endpoint)
      return { response }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)



export const UPDATE_FINANCE_REQUEST = createAsyncThunk(
  'PUT/upadte-MaterialItem',
  async ({ endpoint, body }, { rejectWithValue }) => {
    try {
      const response = await _UPDATE(endpoint, body)
      return { response }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)



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
    }).addCase(GET_MATERIALITEM_BYID.fulfilled, (state, action) => {
        state.loading = false;
        state.itemData = action.payload.response?.data
    }).addCase(GET_MATERIALITEM_BYID.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    }).addCase(UPDATE_FINANCE_REQUEST.fulfilled, (state, action) => {
      state.loading = false;
    }).addCase(UPDATE_FINANCE_REQUEST.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    });
  }
})

export default material_reqSlice.reducer