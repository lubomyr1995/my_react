import {useRef} from "react";
import {ADD, DELL, useCatReducer} from "./reducers";
import {useDogReducer} from "./reducers";

const App = () => {
    let catRe = useRef();
    let dogRe = useRef();

    const [state, dispatch] = useCatReducer();
    const [dogState, dogDispatch] = useDogReducer();

    const addCat = () => {
        let newCatName = catRe.current.value
        dispatch({type: ADD, payload: {name: newCatName}})
    }

    const addDog = () => {
        let newDogName = dogRe.current.value
        dogDispatch({type: ADD, payload: {name: newDogName}})
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <div>
                    <input type="text" ref={catRe}/>
                    <button onClick={addCat}>AddCat</button>
                </div>
                <div>
                    <input type="text" ref={dogRe}/>
                    <button onClick={addDog}>AddDog</button>
                </div>
            </div>

            <hr/>

            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <div>
                    {state.cats.map(cat => <div key={cat.id}>{cat.name}
                        <button onClick={() => dispatch({type: DELL, payload: {id: cat.id}})}>delete</button>
                    </div>)}
                </div>

                <div>
                    {dogState.dogs.map(dog => <div key={dog.id}>{dog.name}
                        <button onClick={() => dogDispatch({type: DELL, payload: {id: dog.id}})}>delete</button>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default App;