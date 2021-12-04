import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit'
import filterChange from './actions'
import operations from './operations'

const { addContacts, deleteContacts, fetchContacts } = operations

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContacts.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContacts.fulfilled]: (state, action) => {
    return state.filter((contact) => contact.id !== action.payload)
  },
})

const filter = createReducer('', {
  [filterChange]: (_, { payload }) => payload,
})

export default combineReducers({
  items,
  filter,
})

// const items = createReducer([], {
//   [fetchContacts.fulfilled]: (_, { payload }) => payload,
//   [addContacts.fulfilled]: (state, { payload }) => [...state, payload],
//   [deleteContacts.fulfilled]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// })

// const filter = createReducer('', {
//   [filterChange]: (_, { payload }) => payload,
// })

// export default combineReducers({
//   items,
//   filter,
// })
