import { DELETE_REQUEST, GET_REQUEST, POST_REQUEST, UPDATE_REQUEST } from "@/redux/createThunk";
import { createAsyncThunk, createSlice, original } from "@reduxjs/toolkit";
import fulfilledStateReducer from "../../customReducer";
import { _DELETE } from "@/request/request";


export const DELETE_FILE = createAsyncThunk(
    'upload/deleteFile',
    async ({ endpoint, body }, thunkAPI) => {
        const response = await _DELETE(endpoint, body)
        return response.data
    },
)

export const DELETE_CONTRACTOR = createAsyncThunk(
    'contractor/deleteContractor',
    async ({ endpoint, body }, thunkAPI) => {
        const response = await _DELETE(endpoint, body)
        return response.data
    },
)

const initialState = {
    itemList: [],
    loading: false,
    error: null,
    itemData: {
        contractors: [], phases: [], documents: [], project: {}
    },
}

const projectSlice = createSlice({
    name: 'projectSlice',
    initialState: initialState,
    reducers: {
        updateDocuments: (state, action) => {
            state.itemData.documents.push(action.payload)
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
            fulfilledStateReducer(state, action, 'project', 'DELETE', 'pro_id')
        }).addCase(DELETE_REQUEST.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        }).addCase(UPDATE_REQUEST.fulfilled, (state, action) => {
            fulfilledStateReducer(state, action, 'project', 'UPDATE', 'pro_id')
        }).addCase(UPDATE_REQUEST.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        }).addCase(DELETE_FILE.fulfilled, (state, action) => {
            state.loading = false
            console.log(state.itemData.documents)
            console.log(action.payload)
            state.itemData.documents = state.itemData.documents.filter((doc) => doc.pro_doc_id !== action.payload.pro_doc_id)
        }).addCase(DELETE_CONTRACTOR.fulfilled, (state, action) => {
            console.log(action.payload)
            state.loading = false
            state.itemData.contractors = state.itemData.contractors.filter((con) => con.pro_con_id !== action.payload.pro_con_id)
        }).addCase(DELETE_CONTRACTOR.rejected, (state, action) => {
            console.log(action.payload)
            state.loading = false
        })
    }
})

export const { updateDocuments } = projectSlice.actions
export default projectSlice.reducer;

