import { _POST } from "@/request/request";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const uploadFiles = createAsyncThunk(
    'upload/postFiles',
    async ({ endpoint, body }, thunkAPI) => {
        const response = await _POST(endpoint, body)
        console.log(response)
        return response.data
    },
)

const initialState = {
    itemList: [],
    loading: false,
    error: null,
    projectFiles: []
}

const fileSlice = createSlice({
    name: 'fileSlice',
    initialState: initialState,
    reducers: {
        resetData: (state, action) => {
            state.itemList = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(uploadFiles.fulfilled, (state, action) => {
            console.log(action.payload)
            state.projectFiles.push(action.payload)
        })
    },
})


export default fileSlice.reducer;

