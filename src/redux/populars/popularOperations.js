import axios from "axios";
import actions from "./popularsActions";

const API = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_URL;

export const getPopularSongs = () => async dispatch => {
  dispatch(actions.getPopularRequest());
  try {
   const {data} = await axios.get(`${url}chart.gettoptracks&api_key=${API}&format=json`);
   dispatch(actions.getPopularSuccess(data.tracks.track))
  } catch (error) {
    dispatch(actions.getPopularSuccess(error))
  }
};