import { configureStore } from '@reduxjs/toolkit'
import clientSlice from './features/clientSlice/slice'
import vendorSlice from './features/vendorSlice/slice'
import projectSlice from './features/projectSlice/slice'


export const store = configureStore({
  reducer: {
    client: clientSlice,
    vendor: vendorSlice,
    project: projectSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
})

