import { DELETE_REQUEST, GET_REQUEST, POST_REQUEST, UPDATE_REQUEST } from "@/redux/createThunk";
import { createSlice } from "@reduxjs/toolkit";
import fulfilledStateReducer from "../../customReducer";

const initialState = {
    loading: false,
    error: null,
    super_admin: []
}

const loginSlice = createSlice({
    name: 'loginSlice',
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
            fulfilledStateReducer(state, action, 'login', 'GET')
        }).addCase(GET_REQUEST.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        }).addCase(POST_REQUEST.pending, (state) => {
            state.loading = true
        }).addCase(POST_REQUEST.fulfilled, (state, action) => {
            fulfilledStateReducer(state, action, 'login', 'POST')
        }).addCase(POST_REQUEST.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export const { setQuery, removeQuery, setFilteredItems } = loginSlice.actions;

export default loginSlice.reducer;

