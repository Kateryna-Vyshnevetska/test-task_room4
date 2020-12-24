import { createReducer } from '@reduxjs/toolkit';
import actions from './popularsActions';

export const populars = createReducer([], {
  [actions.getPopularSuccess]: (_, { payload }) => {
    return payload;
  },
}); 