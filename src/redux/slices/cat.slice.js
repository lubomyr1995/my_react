import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cats: [],
    cat: null
};
const catSlice = createSlice({
    name: 'catSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const [lastEl] = state.cats.slice(-1);
            const id = lastEl ? lastEl.id + 1 : 0
            const {name} = action.payload
            const newCat = {id, name}
            state.cats.push(newCat)
        },
        del: (state, action) => {
            const index = state.cats.findIndex(i => i.id === action.payload.id)
            state.cats.splice(index, 1);
        },
        setUpdate: (state, action) => {
            state.cat = action.payload.cat
        },
        update: (state, action) => {
            const {id, name} = action.payload
            const index = state.cats.findIndex(i => i.id === id)
            state.cats[index].name = name
            state.cat = false
        }
    }
});
const {reducer: catReducer, actions: {add, del, setUpdate, update}} = catSlice;

export default catReducer;
export const catActions = {add, del, setUpdate, update};
