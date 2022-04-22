import {useReducer} from "react";
import {ADD, DELL} from "./actions";

function reducer(state, action) {
    switch (action.type) {
        case ADD:
            let cat = action.payload.name
            const [lastEl] = state.cats.slice(-1)
            let id = lastEl ? lastEl.id + 1 : 0
            // console.log({id, name: cat})
            return {...state, cats: [...state.cats, {id, name: cat}]}
        case DELL:
            let delId = action.payload.id;
            let index = state.cats.findIndex(cat => cat.id === delId);
            state.cats.splice(index, 1);
            return {...state}
        default:
            return state
    }
}

let useCatReducer = () => useReducer(reducer, {cats: [], dogs: []});

export {useCatReducer}