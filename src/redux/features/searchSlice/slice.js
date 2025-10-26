import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { _GET } from "@/request/request";
import coreEndpoint from "@/api/coreApi";

const initialState = {
    itemList: [],
    loading: false,
    error: null,
    itemData: [],
    searchQuery: "",
    searchEntity: "client",
    searchLoading: false
};

export const SEARCH_ITEM = createAsyncThunk(
    "SEARCH_ITEM",
    async ({ query, entity }, { rejectWithValue }) => {
        try {
            const response = await _GET(coreEndpoint.searchItem(`query=${query}&type=${entity}&pageSize=50`))
            return { response, source: entity } // action.payload.response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    },
);

const searchSlice = createSlice({
    name: "searchSlice",
    initialState: initialState,
    reducers: {
        setSearchEntity: (state, action) => {
            state.searchEntity = action.payload;
        }
        ,
        setQuery: (state, action) => {
            state.searchQuery = action.payload;
        },

        setFilteredItems: (state, action) => {
            state.itemList = action.payload;
        },

        resetSearchItems: (state) => {
            state.itemList = [];
            state.searchQuery = "";
        },

        removeQuery: (state) => {
            state.searchQuery = "";
        },

        modifySearchLoading: (state, action) => {
            state.searchLoading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(SEARCH_ITEM.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(SEARCH_ITEM.fulfilled, (state, action) => {
                state.loading = false;
                state.searchLoading = false
                state.itemList = action.payload.response.data;
            })
            .addCase(SEARCH_ITEM.rejected, (state, action) => {
                state.loading = false;
                state.searchLoading = false
                state.error = action.payload || "Failed to search items";
            });
    },
});

export const { setQuery, setFilteredItems, resetSearchItems, removeQuery, modifySearchLoading, setSearchEntity } = searchSlice.actions;
export default searchSlice.reducer;
