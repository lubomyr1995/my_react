function reducer(state, action) {
    switch (action.type) {
        case 'addCat':
            let {name} = action.payload
            let [lastEl] = state.cats.slice(-1)
            let id = lastEl ? lastEl.id + 1 : 0
            console.log({id, name})
            return {...state, cats: [...state.cats, {id, name}]}
        case 'delCat':
            let delId = action.payload.id
            let index = state.cats.findIndex(cat => cat.id === delId)
            state.cats.splice(index, 1)
            return {...state}
        case 'addDog':
            let dog = action.payload.name;
            let [lastElDog] = state.dogs.slice(-1);
            let idDog = lastElDog ? lastElDog.id + 1 : 0;
            console.log({idDog: idDog, name: dog})
            return {...state, dogs: [...state.dogs, {id: idDog, name: dog}]}
        case 'delDog':
            let delIdDog = action.payload.id;
            let indexDog = state.dogs.findIndex(dog => dog.id === delIdDog);
            state.dogs.splice(indexDog, 1);
            return {...state}
        default:
            return state
    }
}

export {reducer};