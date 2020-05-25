import {
  configureStore,
  combineReducers,
  createSlice,
  PayloadAction,
  Dispatch,
} from '@reduxjs/toolkit'

import { User } from '~/types/user'
import { requestUsers } from '~/request-users'

// -- counter slice -- //

export const counterSilce = createSlice({
  name: 'counter',
  initialState: 0,

  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
})

// -- users slice -- //

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    users: [] as Array<User>,
  },

  reducers: {
    getUsersStart: (state) => ({ ...state, loading: true }),

    getUsersSuccess: (state, action: PayloadAction<{ users: Array<User> }>) => ({
      ...state,
      loading: false,
      users: action.payload.users.map((u) => ({
        id: u.id,
        name: u.name,
        username: u.username,
      })),
    }),
  },
})

// action creator can return a function because 'thunk' middleware included by default
export const fetchUsers = () => (dispatch: Dispatch) => {
  try {
    dispatch(usersSlice.actions.getUsersStart())

    requestUsers().then((users) => {
      dispatch(usersSlice.actions.getUsersSuccess({ users }))
    })
  } catch (error) {
    console.error(error)
  }
}

// -- Configure store -- //

const rootReducer = combineReducers({
  counter: counterSilce.reducer,
  users: usersSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type Store = ReturnType<typeof rootReducer>
