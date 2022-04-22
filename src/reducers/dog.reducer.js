import {useReducer} from "react";
import {ADD, DELL} from "./actions";

function reducer(state, action) {
    switch (action.type) {
        case ADD:
            let dog = action.payload.name
            const [lastEl] = state.dogs.slice(-1)
            let id = lastEl ? lastEl.id + 1 : 0
            return {...state, dogs: [...state.dogs, {id, name: dog}]}
        case DELL:
            let delId = action.payload.id;
            console.log(delId)
            let index = state.dogs.findIndex(dog => dog.id === delId);
            state.dogs.splice(index, 1);
            return {...state}
        default:
            return state
    }
}

const useDogReducer = () => useReducer(reducer, {dogs: []});

export {useDogReducer};
