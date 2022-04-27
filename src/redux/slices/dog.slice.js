import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dogs: [],
    dog: null
};
const dogSlice = createSlice({
    name: 'dogSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const [lastEl] = state.dogs.slice(-1);
            const id = lastEl ? lastEl.id + 1 : 0;
            const newDog = {id, name: action.payload.name}
            state.dogs.push(newDog)
        },
        del: (state, action) => {
            const index = state.dogs.findIndex(i => i.id === action.payload.id)
            state.dogs.splice(index, 1)
        },
        setUpdate: (state, action) => {
            state.dog = action.payload.dog
        },
        update: (state, action) => {
            const {id, name} = action.payload;
            const index = state.dogs.findIndex(i => i.id === id)
            state.dogs[index].name = name
            state.dog = false
        }
    }
});
const {reducer: dogReducer, actions: {add, del, setUpdate, update}} = dogSlice;

export default dogReducer;
export const dogActions = {add, del, setUpdate, update};