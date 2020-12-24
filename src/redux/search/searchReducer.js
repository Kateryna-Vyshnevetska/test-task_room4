import { createReducer } from '@reduxjs/toolkit';
import actions from './searchActions';

export const search = createReducer([], {
  [actions.getSearchSuccess]: (_, { payload }) => {
    return payload
  },
}); 