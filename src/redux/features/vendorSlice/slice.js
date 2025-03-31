import { DELETE_REQUEST, GET_REQUEST, POST_REQUEST, UPDATE_REQUEST } from "@/redux/createThunk";
import { createSlice } from "@reduxjs/toolkit";
import fulfilledStateReducer from "../../customReducer";

const initialState = {
    itemList: [],
    loading: false,
    error: null
}

export const vendorSlice = createSlice({
    name: 'vendorSlice',
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
             fulfilledStateReducer(state, action, 'vendor', 'GET')
        }).addCase(GET_REQUEST.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        }).addCase(POST_REQUEST.pending, (state, action) => {
            state.loading = true
            state.error = action.payload
        }).addCase(POST_REQUEST.fulfilled, (state, action) => {         
            fulfilledStateReducer(state, action, 'vendor', 'POST')
        }).addCase(POST_REQUEST.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        }).addCase(DELETE_REQUEST.pending, (state, action) => {
            state.loading = true
            state.error = action.payload
        }).addCase(DELETE_REQUEST.fulfilled, (state, action) => {
            fulfilledStateReducer(state, action, 'vendor', 'DELETE', 'vendor_id')    
        }).addCase(DELETE_REQUEST.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        }).addCase(UPDATE_REQUEST.fulfilled, (state, action) => {
            fulfilledStateReducer(state, action, 'vendor', 'UPDATE', 'pro_id')
        }).addCase(UPDATE_REQUEST.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})


export default vendorSlice.reducer;