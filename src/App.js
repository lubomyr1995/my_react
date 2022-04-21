import {useReducer, useRef} from "react";

const App = () => {
    function reducer(state, action) {
        const {type, payload} = action;
        switch (type) {
            case 'addCat':
                return {...state, cats: [...state.cats, {name: payload, id: Date.now()}]}
            case 'delCat':
                return {...state, cats: state.cats.filter(cat => cat.id !== payload)}
            case 'addDog':
                return {...state, dogs: [...state.dogs, {name: payload, id: Date.now()}]}
            case 'delDog':
                return {...state, dogs: state.dogs.filter(dog => dog.id !== payload)}
            default:
                console.log('Невідомий тип');
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    let nameCat = useRef()
    let nameDog = useRef()

    function createCat(e) {
        e.preventDefault()
        let nameAdd = nameCat.current.value
        dispatch({type: 'addCat', payload: nameAdd})
    }

    function createDog(e) {
        e.preventDefault()
        let nameAdd = nameDog.current.value
        dispatch({type: 'addDog', payload: nameAdd})
    }

    // console.log(state.cats)

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-evenly', margin: '10px'}}>
                <form onSubmit={createCat}>
                    <div><label htmlFor="{'name'}">Add Cat <input name={'name'} type="text" ref={nameCat}/></label>
                        <button style={{margin: '5px'}}>save</button>
                    </div>
                </form>
                <form onSubmit={createDog}>
                    <div><label htmlFor="{'name'}">Add Dog <input name={'name'} type="text" ref={nameDog}/></label>
                        <button style={{margin: '5px'}}>save</button>
                    </div>
                </form>
            </div>

            <hr/>
            <div style={{display: 'flex', justifyContent: 'space-evenly', margin: '10px'}}>
                <div>
                    {state.cats.map(cat =>
                        <div key={cat.id}>
                            {cat.name}
                            <button onClick={() => dispatch({type: 'delCat', payload: cat.id})}
                                    style={{margin: '5px'}}>delete
                            </button>
                        </div>
                    )}
                </div>

                <div>
                    {state.dogs.map(dog =>
                        <div key={dog.id}>
                            {dog.name}
                            <button onClick={() => dispatch({type: 'delDog', payload: dog.id})}
                                    style={{margin: '5px'}}>delete
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;