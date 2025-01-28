import { createAsyncThunk } from '@reduxjs/toolkit'
import { _GET } from '@/utils/request/request'


export const GET_REQUEST = createAsyncThunk(
  'GET-DATA',
  async (endpoint, {rejectWithValue}) => {
    const response = await _GET(endpoint)
    return response
  },
)