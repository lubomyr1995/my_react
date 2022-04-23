import {useReducer} from "react";
import {reducer} from "../reducer";

const useAnimalReducer = () => useReducer(reducer, {cats: [], dogs: []});

export {useAnimalReducer};