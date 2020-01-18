import { toolsReducer } from './toolsReducer'
import { modalReducer } from './modalReducer'

import { combineReducers } from 'redux'

export const Reducers = combineReducers({
  toolsState: toolsReducer,
  modalState: modalReducer,
})