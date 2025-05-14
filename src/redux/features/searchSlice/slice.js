import { DELETE_REQUEST, GET_REQUEST, POST_REQUEST, UPDATE_REQUEST } from "@/redux/createThunk";
import { createSlice } from "@reduxjs/toolkit";
import fulfilledStateReducer from "../../customReducer";

const initialState = {
    itemList: [],
    loading: false,
    error: null,
    itemData: [],
    searchQuery: "",
}

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: initialState,
    reducers: {
        setQuery: (state, action) => {
            state.searchQuery = action.payload
        },

        setFilteredItems: (state, action) => {
            state.itemList = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GET_REQUEST.pending, (state) => {
            state.loading = true
        }).addCase(GET_REQUEST.fulfilled, (state, action) => {
            fulfilledStateReducer(state, action, 'search', 'GET')
        }).addCase(GET_REQUEST.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        }).addCase(POST_REQUEST.pending, (state) => {
            state.loading = true
        }).addCase(POST_REQUEST.fulfilled, (state, action) => {
            fulfilledStateReducer(state, action, 'search', 'POST')
        }).addCase(POST_REQUEST.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        }).addCase(DELETE_REQUEST.pending, (state, action) => {
            state.loading = true
            state.error = action.payload
        }).addCase(DELETE_REQUEST.fulfilled, (state, action) => {
            fulfilledStateReducer(state, action, 'search', 'DELETE', 'pro_id')
        }).addCase(DELETE_REQUEST.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        }).addCase(UPDATE_REQUEST.fulfilled, (state, action) => {
            fulfilledStateReducer(state, action, 'search', 'UPDATE', 'pro_id')
        }).addCase(UPDATE_REQUEST.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        });
    }
})

export const { setQuery, removeQuery, setFilteredItems } = searchSlice.actions;

export default searchSlice.reducer;

