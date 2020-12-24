import { createReducer } from '@reduxjs/toolkit';
import actions from './singerActions';

const singerInitialState = {
  tags: [],
  image: '',
  descr: '',
  name: '',
  load: false
}

export const singer = createReducer({...singerInitialState}, {
  [actions.getSingerRequest]: (state, { payload })=>{
    return {...state, load: payload}
  },
  [actions.clearSigner]: (_, { payload })=>{
    return {...singerInitialState};
  },
  [actions.getSingerSuccess]: (_, { payload }) => {
    return ({
      tags: payload.tags.tag,
      image: payload.image[4]['#text'],
      descr: payload.bio.summary.split(' <a')[0],
      name: payload.name,
      load: false
    }
    )
  },
}); 