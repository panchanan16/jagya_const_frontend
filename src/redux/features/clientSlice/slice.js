import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DELETE_REQUEST, GET_REQUEST, POST_REQUEST, UPDATE_REQUEST } from "@/redux/createThunk";
import fulfilledStateReducer from "../../customReducer";
import { _GET } from "@/request/request";


export const GET_ALL_MATERIAL_REQUESTs = createAsyncThunk(
  'GET/Material-Requests',
  async ({endpoint}, { rejectWithValue }) => {
    try {
      const response = await _GET(endpoint)
      return {response}
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)


export const GET_REMAINING_PAYMENTS = createAsyncThunk(
  'GET/Remaining-Payments',
  async ({endpoint}, { rejectWithValue }) => {
    try {
      const response = await _GET(endpoint)
      return {response}
    } catch (error) {
      return rejectWithValue(error.message)
    } 
  },
)

const initialState = {
  itemList: [],
  itemData: [],
  loading: null,
  error: null,
  materialRequests: {},
  remainingPayments: [],
  itemDetails: {
    collections: [], expenses: [], requests: [{
      "mr_r_id": 19,
      "material_ref_no": "JGCMRQ0008",
      "mr_project_id": 30,
      "mr_phase": "Phase 33",
      "mr_date": "2025-10-26",
      "created_at": "2025-10-26T14:33:43.000Z",
      "pro_name": "2 BHK house",
      "pro_ref_no": "ACME-202374",
      "client_name": "Ravi  Das"
    },
    {
      "mr_r_id": 17,
      "material_ref_no": "JGCMRQ0007",
      "mr_project_id": 11,
      "mr_phase": "Phase 1",
      "mr_date": "2025-04-03",
      "created_at": "2025-07-12T15:15:15.000Z",
      "pro_name": "Lakeview Resort",
      "pro_ref_no": "JGCP0004",
      "client_name": "tata industry  motor"
    },
    {
      "mr_r_id": 15,
      "material_ref_no": "JGCMRQ0006",
      "mr_project_id": 11,
      "mr_phase": "Phase 1",
      "mr_date": "2025-04-03",
      "created_at": "2025-07-12T14:50:18.000Z",
      "pro_name": "Lakeview Resort",
      "pro_ref_no": "JGCP0004",
      "client_name": "tata industry  motor"
    },
    {
      "mr_r_id": 14,
      "material_ref_no": "JGCMRQ0005",
      "mr_project_id": 11,
      "mr_phase": "Phase 1",
      "mr_date": "2025-04-03",
      "created_at": "2025-05-11T08:06:53.000Z",
      "pro_name": "Lakeview Resort",
      "pro_ref_no": "JGCP0004",
      "client_name": "tata industry  motor"
    }]
  }
}


export const clientSlice = createSlice({
  name: 'clientSlice',
  initialState: initialState,
  reducers: {
    resetData: (state, action) => {
      state.itemList = action.payload
    },

    resetMaterialRequests: (state) => {
      state.materialRequests = {}
    },

    resetRemainingPayments: (state) => {
      state.remainingPayments = []
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
      fulfilledStateReducer(state, action, 'client', 'DELETE')
    }).addCase(DELETE_REQUEST.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    }).addCase(UPDATE_REQUEST.fulfilled, (state, action) => {
      fulfilledStateReducer(state, action, 'client', 'UPDATE', 'pro_id')
    }).addCase(UPDATE_REQUEST.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    }).addCase(GET_ALL_MATERIAL_REQUESTs.fulfilled, (state, action) => {
      state.loading = false;
      state.materialRequests = action.payload.response.data;
      state.error = null
    }).addCase(GET_ALL_MATERIAL_REQUESTs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
    }).addCase(GET_REMAINING_PAYMENTS.fulfilled, (state, action) => {
      state.loading = false;
      state.remainingPayments = action.payload.response.data;
      state.error = null
    }).addCase(GET_REMAINING_PAYMENTS.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
    })
  }
})

export const { addClient, resetData, resetMaterialRequests, resetRemainingPayments } = clientSlice.actions

export default clientSlice.reducer