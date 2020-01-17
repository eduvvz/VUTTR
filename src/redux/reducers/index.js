import { toolsReducer } from './toolsReducer';

import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  toolsState: toolsReducer,
});