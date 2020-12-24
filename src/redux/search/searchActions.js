import { createAction } from '@reduxjs/toolkit';

const getSearchRequest = createAction('search/getSearchRequest');
const getSearchSuccess = createAction('search/getSearchSuccess');
const getSearchError = createAction('search/getSearchError');

export default {
  getSearchRequest,
  getSearchSuccess,
  getSearchError
}