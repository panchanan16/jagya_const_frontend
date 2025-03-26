import { DELETE_REQUEST, GET_REQUEST, POST_REQUEST, UPDATE_REQUEST } from "@/redux/createThunk";
import { createSlice } from "@reduxjs/toolkit";
import fulfilledStateReducer from "../customReducer";

const initialState = {
    itemList: [],
    loading: false,
    error: null,
    projectData: []
}

const projectSlice = createSlice({
    name: 'projectSlice',
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
            fulfilledStateReducer(state, action, 'project', 'GET')
        }).addCase(GET_REQUEST.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        }).addCase(POST_REQUEST.pending, (state) => {
            state.loading = true
        }).addCase(POST_REQUEST.fulfilled, (state, action) => {
            fulfilledStateReducer(state, action, 'project', 'POST')
        }).addCase(POST_REQUEST.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        }).addCase(DELETE_REQUEST.pending, (state, action) => {
            state.loading = true
            state.error = action.payload
        }).addCase(DELETE_REQUEST.fulfilled, (state, action) => {
            if (action.payload?.source == 'project') {
                state.loading = false
                state.itemList = state.itemList.filter((item) => item.pro_id != action.payload.data.id)
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

export default projectSlice.reducer;

