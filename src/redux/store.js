import {combineReducers, configureStore} from "@reduxjs/toolkit";
import countReducer from "./slices/counter.slice";
import userReducer from "./slices/user.slice";

const rootReducer = combineReducers({
    counter: countReducer,
    users: userReducer
});
const store = configureStore({
    reducer: rootReducer
});

export default store