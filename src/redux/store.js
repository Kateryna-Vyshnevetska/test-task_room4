import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { devToolsEnhancer } from "redux-devtools-extension";
import {populars} from './populars/popularsReducer';
import {singer} from './singers/singerReduser';
import {search} from './search/searchReducer';
const defaultMiddleware = getDefaultMiddleware();

export const store = configureStore({
    reducer: {
        tracks: populars,
        singer,
        search,
    },
    middleware: [...defaultMiddleware],
    devTools: devToolsEnhancer()
})
