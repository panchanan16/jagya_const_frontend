import { createAsyncThunk } from '@reduxjs/toolkit'
import { _GET, _POST } from '@/request/request'


export const GET_REQUEST = createAsyncThunk(
  'GET-DATA',
  async (endpoint, { rejectWithValue }) => {
    try {
      const response = await _GET(endpoint)
      return response
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)


export const POST_REQUEST = createAsyncThunk(
  'POST-DATA',
  async (reqOpt, { rejectWithValue }) => {
    try {
      const response = await _POST(reqOpt.endpoint, reqOpt.body)
      if (response.status) {
        return response
      } 

      throw response
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)