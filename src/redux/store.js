import { configureStore } from '@reduxjs/toolkit'
import  clientSlice  from './features/clientSlice'

export const store = configureStore({
  reducer: {
    clients: clientSlice,
  },
})

