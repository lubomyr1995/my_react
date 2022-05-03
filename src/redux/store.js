import {combineReducers, configureStore} from "@reduxjs/toolkit";
import episodeReducer from "./slices/episode.slice";

const rootReducer = combineReducers({
    episodes: episodeReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;