import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: []
};
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: {}
});

const {reducer: carReducer} = carSlice;

export default carReducer;
export const carAction = {};
