import axios from "axios";
import actions from "./searchActions";

const API = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_URL;

export const getSearchTrack = query => async dispatch => {
  dispatch(actions.getSearchRequest());
  console.log(query);
  try {
   const {data} = await axios.get(`${url}track.search&track=${query}&api_key=${API}&format=json`);
   dispatch(actions.getSearchSuccess(data.results.trackmatches.track))
  } catch (error) {
    dispatch(actions.getSearchError(error))
  }
};