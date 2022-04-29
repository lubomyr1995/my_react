import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    formErrors: {}
}
const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data
    }
);
const createAsync = createAsyncThunk(
    'carSlice/create',

    async ({car}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            // return data
            return dispatch(create({car: data}))
        } catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data})
        }
    }
);
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        create: (state, action) => {
            state.cars.push(action.payload.car)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.cars = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                console.log('rejected')
            })
            .addCase(createAsync.fulfilled, (state, action) => {
                // state.cars.push(action.payload)
            })
            .addCase(createAsync.rejected, (state, action) => {
                const {status, formErrors} = action.payload;
                state.status = status
                state.formErrors = formErrors
            })
    }
    // extraReducers: {
    //     [getAll.pending]: (state) => {
    //         state.status = 'pending'
    //     },
    //     [getAll.fulfilled]: (state, action) => {
    //         state.status = 'fulfilled'
    //         state.cars = action.payload
    //     },
    //     [getAll.rejected]: (state, action) => {
    //         console.log('rejected')
    //     },
    //     [createAsync.fulfilled]: (state, action) => {
    //         // state.cars.push(action.payload)
    //     },
    //     [createAsync.rejected]: (state, action) => {
    //         const {status, formErrors} = action.payload;
    //         state.status = status
    //         state.formErrors = formErrors
    //     }
    // }
});

const {reducer: carReducer, actions: {create}} = carSlice;

export default carReducer;
export const carActions = {
    getAll,
    createAsync
};