import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 0
};
const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {
        dec: state => {
            state.count -= 1
        },
        inc: state => {
            state.count += 1
        },
        res: (state, action) => {
            state.count = action.payload || 0
        }
    }
});

const {reducer: countReducer, actions: {dec, inc, res}} = counterSlice;

export default countReducer;
export const countActions = {dec, inc, res};