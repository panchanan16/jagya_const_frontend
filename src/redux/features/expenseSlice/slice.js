import { DELETE_REQUEST, GET_REQUEST, POST_REQUEST, UPDATE_REQUEST } from "@/redux/createThunk";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fulfilledStateReducer from "../../customReducer";

export const GET_ONE_EXPENSE = createAsyncThunk(
  'GET/findOneExpense',
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
    loading: false,
    error: null,
    itemData: {contractor: [], vendor: []} 
}

const expenseSlice = createSlice({
    name: 'expenseSlice',
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
            fulfilledStateReducer(state, action, 'expense', 'GET')
        }).addCase(GET_REQUEST.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        }).addCase(POST_REQUEST.pending, (state) => {
            state.loading = true
        }).addCase(POST_REQUEST.fulfilled, (state, action) => {
            fulfilledStateReducer(state, action, 'expense', 'POST')
        }).addCase(POST_REQUEST.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        }).addCase(DELETE_REQUEST.pending, (state, action) => {
            state.loading = true
            state.error = action.payload
        }).addCase(DELETE_REQUEST.fulfilled, (state, action) => {
            fulfilledStateReducer(state, action, 'expense', 'DELETE', 'exp_id')
        }).addCase(DELETE_REQUEST.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        }).addCase(UPDATE_REQUEST.fulfilled, (state, action) => {
            fulfilledStateReducer(state, action, 'expense', 'UPDATE', 'exp_id')
        }).addCase(UPDATE_REQUEST.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        }).addCase(GET_ONE_EXPENSE.fulfilled, (state, action) => {
            state.loading = false
            console.log(action.payload)
        }).addCase(GET_ONE_EXPENSE.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        });
    }
})

export default expenseSlice.reducer;