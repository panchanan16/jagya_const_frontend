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


export const LOAD_APP = createAsyncThunk(
    'LOAD_APP',
    async ({ endpoint, body, entity, stateKey }, { rejectWithValue }) => {
        try {
            const user = JSON.parse(window.localStorage.getItem("user"))
            // const user = {name: 'Panchanan Deka', role: 'super-admin'}
            // const response = await _POST(endpoint, body)
            if (user) {
                return { user, source: entity, stateKey }
            }
            throw response
        } catch (error) {
            return rejectWithValue(error)
        }
    },
)


function getInitialvalues() {
    const isAccsess = Cookies.get("isLoggedIn");
    return isAccsess
}



const initialState = {
    isLoggedIn: getInitialvalues(),
    loading: false,
    error: null,
    role: null,
    super_admin: {},
    finance_admin: {},
    userData: {}
}

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: initialState,
    reducers: {
        setLogout: (state, action) => {
            state.isLoggedIn = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(LOGIN_REQUEST.pending, (state) => {
            state.loading = true
        }).addCase(LOGIN_REQUEST.fulfilled, (state, action) => {
            state.loading = false;
            state.isLoggedIn = true
            state.error = null;
            state.userData = {name: "Daniel Deka", role: action.payload?.response?.data.role}
        }).addCase(LOGIN_REQUEST.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        }).addCase(LOAD_APP.fulfilled, (state, action)=> {
            console.log(action.payload)
            state[action.payload?.stateKey] = action.payload?.user
        })
    }
})

export const { setLogout } = loginSlice.actions;

export default loginSlice.reducer;

