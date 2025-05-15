import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { _POST } from "@/request/request";
import Cookies from "js-cookie";


export const LOGIN_REQUEST = createAsyncThunk(
    'LOGIN-DATA',
    async ({ endpoint, body, entity, stateKey }, { rejectWithValue }) => {
        try {
            const response = await _POST(endpoint, body)
            if (response.status) {
                return { response, source: entity, stateKey }
            }
            throw response
        } catch (error) {
            console.log(error)
            return rejectWithValue(error)
        }
    },
)


function getInitialvalues() {
    const isAccsess = Cookies.get("isLoggedIn");
    console.log(isAccsess)
    return isAccsess
}



const initialState = {
    isLoggedIn: getInitialvalues(),
    loading: false,
    error: null,
    role: null,
    super_admin: {},
    finance_admin: {}
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
        builder.addCase(LOGIN_REQUEST.pending, (state) => {
            state.loading = true
        }).addCase(LOGIN_REQUEST.fulfilled, (state, action) => {
            state.loading = false;
            state.isLoggedIn = true
            state.error = null;
            state[action.payload?.stateKey] = action.payload?.response?.data
        }).addCase(LOGIN_REQUEST.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export const { setQuery, removeQuery, setFilteredItems } = loginSlice.actions;

export default loginSlice.reducer;

