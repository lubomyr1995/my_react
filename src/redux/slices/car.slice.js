import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {carsService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    formErrors: {},
    carUpdate: null
};
const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carsService.getAll();
        return data
    }
);

const createAsync = createAsyncThunk(
    'carSlice/createAsync',
    async ({car}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await carsService.create(car);
            return dispatch(create({car: data}))
        } catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data})
        }
    }
);

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            await carsService.deleteById(id);
            return dispatch(del({id}))
        } catch (e) {
            return rejectWithValue({status: e.message})

        }
    }
);

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}, {dispatch, rejectWithValue}) => {
        try {
            await carsService.updateById(id, car)
            dispatch(update({id, car}))
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
        },
        del: (state, action) => {
            const index = state.cars.findIndex(i => i.id === action.payload.id)
            state.cars.splice(index, 1);
        },
        setUpdate: (state, action) => {
            state.carUpdate = action.payload.car
        },
        update: (state, action) => {
            const {id, car} = action.payload;
            const index = state.cars.findIndex(i => i.id === id)
            state.cars[index] = {...state.cars[index], ...car}
            state.carUpdate = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.cars = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.status = 'rejected error'
            })
            .addCase(createAsync.rejected, (state, action) => {
                const {status, formErrors} = action.payload;
                state.status = status;
                state.formErrors = formErrors
            })
            .addCase(deleteById.rejected, (state, action) => {
                state.status = action.payload.status
            })
            .addCase(updateById.rejected, (state, action) => {
                const {status, formErrors} = action.payload;
                state.status = status;
                state.formErrors = formErrors

            })
    }

});

const {reducer: carReducer, actions: {create, del, update, setUpdate}} = carSlice;

export default carReducer;
export const carAction = {getAll, createAsync, deleteById, updateById, setUpdate};
