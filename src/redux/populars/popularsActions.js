import { createAction } from '@reduxjs/toolkit';

const getPopularRequest = createAction('populars/getPopularRequest');
const getPopularSuccess = createAction('populars/getPopularSuccess');
const getPopularError = createAction('populars/getPopularError');

export default {
  getPopularRequest,
  getPopularSuccess,
  getPopularError
}