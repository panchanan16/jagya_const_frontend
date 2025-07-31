import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pageNo: 1,
    pageSize: 10,
}

const paginateSlice = createSlice({
    name: 'paginateSlice',
    initialState: initialState,
    reducers: {
        resetData: (state, action) => {
            state.pageNo = action.payload
        }
    }
})

export const { resetData } = paginateSlice.actions;
export default paginateSlice.reducer;

