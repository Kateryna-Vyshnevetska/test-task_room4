import axios from "axios";
import actions from "./singerActions";

const API = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_URL;

export const getSingerInfo = name => async dispatch => {
  dispatch(actions.getSingerRequest(true));
  console.log(name);
  try {
    const {data} = await axios.get(`${url}artist.getinfo&artist=${name}&api_key=${API}&format=json`);
    console.log(data.artist);
    dispatch(actions.getSingerSuccess(data.artist))
  } catch (error) {
    dispatch(actions.getSingerError(error))
  }
};

export const clearSigner = () => dispatch => {
  dispatch(actions.clearSigner());
};

