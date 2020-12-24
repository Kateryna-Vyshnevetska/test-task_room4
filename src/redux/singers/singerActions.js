import { createAction } from '@reduxjs/toolkit';

const getSingerRequest = createAction('singers/getSingerRequest');
const getSingerSuccess = createAction('singers/getSingerSuccess');
const getSingerError = createAction('singers/getSingerError');
const clearSigner = createAction('singers/clearSigner');

export default {
  getSingerRequest,
  getSingerSuccess,
  getSingerError,
  clearSigner
}