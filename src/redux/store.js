import { configureStore } from '@reduxjs/toolkit'
import clientSlice from './features/clientSlice/slice'


export const store = configureStore({
  reducer: {
    clients: clientSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false
  //   }),
})

