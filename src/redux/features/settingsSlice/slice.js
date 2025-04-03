import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    phaseList: [],
    loading: false,
    error: null
}

const settingSlice = createSlice({
    name: 'settingSlice',
    initialState: initialState,
    reducers: {
        addPhase: (state, action) => {
            state.phaseList = action.payload
        },
        insertPhase: (state, action) => {
            state.phaseList.push(action.payload)
        }
    }
})

export const { addPhase, insertPhase } = settingSlice.actions;

export default settingSlice.reducer;

