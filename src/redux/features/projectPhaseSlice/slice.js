import { DELETE_REQUEST, GET_REQUEST, POST_REQUEST, UPDATE_REQUEST } from "@/redux/createThunk";
import { createSlice } from "@reduxjs/toolkit";
import fulfilledStateReducer from "../../customReducer";

const initialState = {
    loading: false,
    error: null,
    itemList: []

}

const projectPhaseSlice = createSlice({
    name: 'projectPhase',
    initialState: initialState,
    reducers: {
        resetData: (state, action) => {
            state.itemList = action.payload
        },
        insertPhase: (state, action) => {
            state.itemList = action.payload
        },
        insertContractor: (state, action) => {
            state.itemList = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GET_REQUEST.pending, (state) => {
            state.loading = true
        }).addCase(GET_REQUEST.fulfilled, (state, action) => {        
            fulfilledStateReducer(state, action, 'project_phase', 'GET')
        }).addCase(GET_REQUEST.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        }).addCase(POST_REQUEST.pending, (state) => {
            state.loading = true
        }).addCase(POST_REQUEST.fulfilled, (state, action) => {
            fulfilledStateReducer(state, action, 'project_phase', 'POST')
        }).addCase(POST_REQUEST.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        }).addCase(DELETE_REQUEST.pending, (state, action) => {
            state.loading = true
            state.error = action.payload
        }).addCase(DELETE_REQUEST.fulfilled, (state, action) => {
            fulfilledStateReducer(state, action, 'project_phase', 'DELETE', 'phase_id')
        }).addCase(DELETE_REQUEST.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        }).addCase(UPDATE_REQUEST.fulfilled, (state, action) => {
            fulfilledStateReducer(state, action, 'project_phase', 'UPDATE', 'phase_id')
        }).addCase(UPDATE_REQUEST.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        });
    }
})

export default projectPhaseSlice.reducer;

