import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsService} from "../../services";

const initialState = {
    cars: []
}
const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carsService.getAll();
        // console.log(data)
        return data
    });
const createAsync = createAsyncThunk(
    'carSlice/create',
    async ({car}, {dispatch}) => {
        const {data} = await carsService.create(car);
        return dispatch(create({car: data}))

    });
const deleteAsync = createAsyncThunk(
    'carSlice/deleteAsync',
    async ({id}, {dispatch}) => {
        await carsService.deleteById(id)
        return dispatch(del({id}))
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        create: (state, action) => {
            state.cars.push(action.payload.car)
        },
        del: (state, action) => {
            const index = state.cars.findIndex(i => i.id === action.payload.id)
            state.cars.splice(index, 1);
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
    }
});
const {reducer: carReducer, actions: {create, del}} = carSlice;
const carActions = {getAll, createAsync, deleteAsync};

export {carReducer, carActions, createAsync}