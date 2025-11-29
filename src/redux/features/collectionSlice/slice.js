import { DELETE_REQUEST, GET_REQUEST, POST_REQUEST, UPDATE_REQUEST } from "@/redux/createThunk";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fulfilledStateReducer from "../../customReducer";
import { _GET } from "@/request/request";

// Creating Asychronous Thunk Actions
export const GET_ALL_COLLECTION = createAsyncThunk(
    'collection/GET_ALL_COLLECTION',
    async ({ endpoint }, { rejectWithValue }) => {
        try {
            const response = await _GET(endpoint)
            return { response }
        } catch (error) {
            return rejectWithValue(error.message)
        }
    },

)


// Get date one month ago
const getOneMonthAgoDate = () => {
    const today = new Date();
    today.setMonth(today.getMonth() - 1);
    return today.toISOString().split("T")[0];
};

const initialState = {
    itemList: [],
    loading: false,
    error: null,
    dateRange: { from_date: getOneMonthAgoDate(), to_date: new Date().toISOString().split("T")[0] }
}


const collectionSlice = createSlice({
    name: 'collectionSlice',
    initialState: initialState,
    reducers: {
        resetData: (state, action) => {
            state.itemList = action.payload
        },

        setCollection: (state, action) => {
            console.log("Collection dispatched")
            state.itemList = action.payload
        },

        setDateRange: (state, action) => {
            console.log(action.payload)
            if (action.payload.type == 'from') {
                state.dateRange.from_date = action.payload.date
            } else {
                state.dateRange.to_date = action.payload.date
            }
        }
    },

    extraReducers: (builder) => {
        builder.addCase(GET_REQUEST.pending, (state) => {
            state.loading = true
        }).addCase(GET_REQUEST.fulfilled, (state, action) => {
            fulfilledStateReducer(state, action, 'collection', 'GET')
        }).addCase(GET_REQUEST.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        }).addCase(POST_REQUEST.pending, (state) => {
            state.loading = true
        }).addCase(POST_REQUEST.fulfilled, (state, action) => {
            fulfilledStateReducer(state, action, 'collection', 'POST')
        }).addCase(POST_REQUEST.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        }).addCase(DELETE_REQUEST.pending, (state, action) => {
            state.loading = true
            state.error = action.payload
        }).addCase(DELETE_REQUEST.fulfilled, (state, action) => {
            fulfilledStateReducer(state, action, 'collection', 'DELETE', 'col_id')
        }).addCase(DELETE_REQUEST.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        }).addCase(UPDATE_REQUEST.fulfilled, (state, action) => {
            fulfilledStateReducer(state, action, 'collection', 'UPDATE', 'col_id')
        }).addCase(UPDATE_REQUEST.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        }).addCase(GET_ALL_COLLECTION.fulfilled, (state, action) => {
            state.loading = false
            state.itemList = action.payload.response?.data
        }).addCase(GET_ALL_COLLECTION.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
            
    }
})

export const { setCollection, setDateRange } = collectionSlice.actions;

export default collectionSlice.reducer;