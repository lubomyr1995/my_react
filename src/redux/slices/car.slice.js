import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsService} from "../../services";

const initialState = {
    cars: []
}
const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carsService.getAll();
        console.log(data)
        return data
    });

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
    }
});
const {reducer: carReducer} = carSlice;
const carActions = {getAll};

export {carReducer, carActions}