import { createAsyncThunk } from '@reduxjs/toolkit'
import { _DELETE, _GET, _POST, _UPDATE } from '@/request/request'
import toast from 'react-hot-toast'


export const GET_REQUEST = createAsyncThunk(
  'GET-DATA',
  async ({endpoint, entity}, { rejectWithValue }) => {
    try {
      const response = await _GET(endpoint)
      return {response, source: entity}
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)


export const POST_REQUEST = createAsyncThunk(
  'POST-DATA',
  async ({ endpoint, body, entity }, { rejectWithValue }) => {
    try {
      toast.loading('Submission in Update...', { id: 'loader' })
      const response = await _POST(endpoint, body)
      if (response.status) {
        return {response, source: entity}
      } 

      throw response
    } catch (error) {
      return rejectWithValue(error)
    } finally {
      toast.dismiss('loader')
    }
  },
)


export const DELETE_REQUEST = createAsyncThunk(
  'DELETE-DATA',
  async ({ endpoint, body }, { rejectWithValue }) => {
    try {
      toast.loading('Deleting the data...', { id: 'loader' })
      const response = await _DELETE(endpoint, body)
      if (response.status) {
        return response
      } 

      throw {response, source: entity}
    } catch (error) {
      return rejectWithValue(error)
    } finally {
      toast.dismiss('loader')
    }
  },
)



export const UPDATE_REQUEST = createAsyncThunk(
  'UPDATE-DATA',
  async ({ endpoint, body }, { rejectWithValue }) => {
    try {
      toast.loading('Updating the data...', { id: 'loader' })
      const response = await _UPDATE(endpoint, body)
      if (response.status) {
        return response
      } 

      throw response
    } catch (error) {
      return rejectWithValue(error)
    } finally {
      toast.dismiss('loader')
    }
  },
)