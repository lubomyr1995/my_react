import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: []
}
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const [lastEl] = state.users.slice(-1);
            const id = lastEl ? lastEl.id + 1 : 0;
            const {name} = action.payload;
            const newUser = {id, name}
            state.users.push(newUser)
        },
        del: (state, action) => {
            let index = state.users.findIndex(u => u.id === action.payload.id);
            state.users.splice(index, 1);
        }
    }
});

const {reducer: userReducer, actions: {add, del}} = userSlice;

export default userReducer;
export const userAction = {add, del};
