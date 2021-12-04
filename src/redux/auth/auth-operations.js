import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  },
}

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials)
      token.set(data.token)
      return data
    } catch (error) {
      rejectWithValue(toast.error(`Oops! Try again please!`))
      throw new Error({ message: 'error' })
    }
  },
)

const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials)
      token.set(data.token)
      return data
    } catch (error) {
      rejectWithValue(toast.error(`Oops! Try again please!`))
      throw new Error({ message: 'error' })
    }
  },
)

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout')
    token.unset()
  } catch (error) {
    return console.log('error on logOut', error)
  }
})

const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistedToken = state.auth.token
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue()
    }
    token.set(persistedToken)
    try {
      const { data } = await axios.get('/users/current')
      return data
    } catch (error) {
      return console.log('error on refresh', error)
    }
  },
)

const authOperations = {
  register,
  logIn,
  logOut,
  refreshCurrentUser,
}

export default authOperations
