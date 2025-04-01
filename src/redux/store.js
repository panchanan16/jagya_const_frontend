import { configureStore } from '@reduxjs/toolkit'
import clientSlice from './features/clientSlice/slice'
import vendorSlice from './features/vendorSlice/slice'
import projectSlice from './features/projectSlice/slice'
import contractorSlice from './features/contractorSlice/slice'
import expenseSlice from  './features/expenseSlice/slice'
import branchSlice  from './features/branchSlice/slice'


export const store = configureStore({
  reducer: {
    client: clientSlice,
    vendor: vendorSlice,
    project: projectSlice,
    contractor: contractorSlice,
    expense: expenseSlice,
    branch_data: branchSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
})

