import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    phaseList: [],
    subPhaseList: [],
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
        },
        deletePhase: (state, action) => {
            state.phaseList = state.phaseList.filter(
                (phase) => phase.phase_id !== action.payload.phase_id
            );
        },
        addSubPhase: (state, action) => {
            state.subPhaseList = action.payload
        },
        insertSubPhase: (state, action) => {
            state.subPhaseList.push(action.payload)
        },

    }
})

export const { addPhase, insertPhase, deletePhase, addSubPhase, insertSubPhase } = settingSlice.actions;

export default settingSlice.reducer;

