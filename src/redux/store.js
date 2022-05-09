import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {authReducer, carReducer} from "./slices";

const rootReducer = combineReducers({
    cars: carReducer,
    auth: authReducer
});
const store = configureStore({
    reducer: rootReducer
});

export default store