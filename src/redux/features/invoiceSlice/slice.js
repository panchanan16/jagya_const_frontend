// import { DELETE_REQUEST, GET_REQUEST, POST_REQUEST, UPDATE_REQUEST } from "@/redux/createThunk";
// import { createSlice } from "@reduxjs/toolkit";
// import fulfilledStateReducer from "../../customReducer";

// const initialState = {
//     itemList: [],
//     loading: false,
//     error: null,
//     itemData: {
        
//     }
// }

// const invoiceSlice = createSlice({
//     name: 'invoiceSlice',
//     initialState: initialState,
//     reducers: {
//         resetData: (state, action) => {
//             state.itemList = action.payload
//         }
//     },
//     extraReducers: (builder) => {
//         builder.addCase(GET_REQUEST.pending, (state) => {
//             state.loading = true
//         }).addCase(GET_REQUEST.fulfilled, (state, action) => {
//             fulfilledStateReducer(state, action, 'invoice', 'GET')
//         }).addCase(GET_REQUEST.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.payload
//         }).addCase(POST_REQUEST.pending, (state) => {
//             state.loading = true
//         }).addCase(POST_REQUEST.fulfilled, (state, action) => {
//             fulfilledStateReducer(state, action, 'invoice', 'POST')
//         }).addCase(POST_REQUEST.rejected, (state, action) => {
//             state.loading = false
//             state.error = action.payload
//         }).addCase(DELETE_REQUEST.pending, (state, action) => {
//             state.loading = true
//             state.error = action.payload
//         }).addCase(DELETE_REQUEST.fulfilled, (state, action) => {
//             fulfilledStateReducer(state, action, 'invoice', 'DELETE', 'invoice_id')
//         }).addCase(DELETE_REQUEST.rejected, (state, action) => {
//             state.loading = false
//             state.error = action.payload
//         }).addCase(UPDATE_REQUEST.fulfilled, (state, action) => {
//             fulfilledStateReducer(state, action, 'invoice', 'UPDATE', 'invoice_id')
//         }).addCase(UPDATE_REQUEST.rejected, (state, action) => {
//             state.loading = false
//             state.error = action.payload
//         });
//     }
// })

// export default invoiceSlice.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    itemList: [],
    loading: false,
    error: null,
    itemData: {}
}

// Base API URL - adjust according to your backend
const API_BASE_URL = '/api/invoices'; // Update this to match your API endpoint

// Async Thunks for Invoice Operations

// Create Invoice
export const createInvoice = createAsyncThunk(
    'invoice/createInvoice',
    async (invoiceData, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_BASE_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add authorization headers if needed
                    // 'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(invoiceData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to create invoice');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Get All Invoices
export const getAllInvoices = createAsyncThunk(
    'invoice/getAllInvoices',
    async (params = {}, { rejectWithValue }) => {
        try {
            // Build query parameters
            const queryParams = new URLSearchParams();
            if (params.page) queryParams.append('page', params.page);
            if (params.limit) queryParams.append('limit', params.limit);
            if (params.status) queryParams.append('status', params.status);
            if (params.client_id) queryParams.append('client_id', params.client_id);
            if (params.search) queryParams.append('search', params.search);

            const url = queryParams.toString() 
                ? `${API_BASE_URL}?${queryParams.toString()}` 
                : API_BASE_URL;

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // Add authorization headers if needed
                    // 'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to fetch invoices');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Get One Invoice
export const getOneInvoice = createAsyncThunk(
    'invoice/getOneInvoice',
    async (invoiceId, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_BASE_URL}/${invoiceId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // Add authorization headers if needed
                    // 'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to fetch invoice');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Update Invoice
export const updateInvoice = createAsyncThunk(
    'invoice/updateInvoice',
    async ({ invoiceId, updateData }, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_BASE_URL}/${invoiceId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    // Add authorization headers if needed
                    // 'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updateData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to update invoice');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Delete Invoice
export const deleteInvoice = createAsyncThunk(
    'invoice/deleteInvoice',
    async (invoiceId, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_BASE_URL}/${invoiceId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    // Add authorization headers if needed
                    // 'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to delete invoice');
            }

            // Return the deleted invoice ID for state management
            return { invoice_id: invoiceId };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Update Invoice Status (for payment status changes)
export const updateInvoiceStatus = createAsyncThunk(
    'invoice/updateInvoiceStatus',
    async ({ invoiceId, status }, { rejectWithValue }) => {
        try {
            const response = await fetch(`${API_BASE_URL}/${invoiceId}/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    // Add authorization headers if needed
                    // 'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ payment_status: status })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to update invoice status');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const invoiceSlice = createSlice({
    name: 'invoice',
    initialState: initialState,
    reducers: {
        resetData: (state, action) => {
            state.itemList = action.payload || [];
        },
        clearError: (state) => {
            state.error = null;
        },
        clearItemData: (state) => {
            state.itemData = {};
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            // Create Invoice
            .addCase(createInvoice.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createInvoice.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                // Add the new invoice to the list
                if (action.payload.data) {
                    state.itemList.unshift(action.payload.data);
                }
            })
            .addCase(createInvoice.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Get All Invoices
            .addCase(getAllInvoices.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllInvoices.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                // Handle different response formats
                if (action.payload.data) {
                    state.itemList = action.payload.data;
                } else if (Array.isArray(action.payload)) {
                    state.itemList = action.payload;
                } else {
                    state.itemList = [];
                }
            })
            .addCase(getAllInvoices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Get One Invoice
            .addCase(getOneInvoice.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getOneInvoice.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                // Store the viewed invoice details in itemData
                if (action.payload.data) {
                    state.itemData = action.payload.data;
                } else {
                    state.itemData = action.payload;
                }
            })
            .addCase(getOneInvoice.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.itemData = {};
            })

            // Update Invoice
            .addCase(updateInvoice.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateInvoice.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                
                const updatedInvoice = action.payload.data || action.payload;
                
                // Update the invoice in itemList
                const index = state.itemList.findIndex(
                    invoice => invoice.invoice_id === updatedInvoice.invoice_id
                );
                if (index !== -1) {
                    state.itemList[index] = updatedInvoice;
                }
                
                // Update itemData if it's the same invoice being viewed
                if (state.itemData.invoice_id === updatedInvoice.invoice_id) {
                    state.itemData = updatedInvoice;
                }
            })
            .addCase(updateInvoice.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Delete Invoice
            .addCase(deleteInvoice.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteInvoice.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                
                const deletedId = action.payload.invoice_id;
                
                // Remove the invoice from itemList
                state.itemList = state.itemList.filter(
                    invoice => invoice.invoice_id !== deletedId
                );
                
                // Clear itemData if it's the deleted invoice
                if (state.itemData.invoice_id === deletedId) {
                    state.itemData = {};
                }
            })
            .addCase(deleteInvoice.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Update Invoice Status
            .addCase(updateInvoiceStatus.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateInvoiceStatus.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                
                const updatedInvoice = action.payload.data || action.payload;
                
                // Update the invoice status in itemList
                const index = state.itemList.findIndex(
                    invoice => invoice.invoice_id === updatedInvoice.invoice_id
                );
                if (index !== -1) {
                    state.itemList[index] = {
                        ...state.itemList[index],
                        ...updatedInvoice
                    };
                }
                
                // Update itemData if it's the same invoice being viewed
                if (state.itemData.invoice_id === updatedInvoice.invoice_id) {
                    state.itemData = {
                        ...state.itemData,
                        ...updatedInvoice
                    };
                }
            })
            .addCase(updateInvoiceStatus.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

// Export actions
export const { resetData, clearError, clearItemData, setLoading } = invoiceSlice.actions;

// Export reducer
export default invoiceSlice.reducer;


