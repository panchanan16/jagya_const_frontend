import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {  
  // Fallback to URL params if available
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const urlPage = parseInt(urlParams.get('pageNo')) || 3;
    const urlPageSize = parseInt(urlParams.get('pageSize')) || 10;
    
    return {
      pageNo: urlPage,
      pageSize: urlPageSize,
      routePath: window.location.pathname, 
    };
  }
  
  return {
    pageNo: 2,
    pageSize: 10,
    routePath: '/',
  };
};


const initialState = {
    pageNo: 3,
    pageSize: 10,
}

// const initialState = getInitialState()

const paginateSlice = createSlice({
    name: 'paginateSlice',
    initialState: initialState,
    reducers: {
        resetData: (state, action) => {
            console.log("reset is called")
            state.pageNo = action.payload
        }
    }
})

export const { resetData } = paginateSlice.actions;
export default paginateSlice.reducer;

