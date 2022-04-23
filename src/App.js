import {useRef} from "react";
import {useAnimalReducer} from "./hooks";
import {Cat, Dog} from "./components";

const App = () => {
    const catRe = useRef();
    const dogRe = useRef();
    const [state, dispatch] = useAnimalReducer();

    const addCat = () => {
        let newCatName = catRe.current.value
        dispatch({type: 'addCat', payload: {name: newCatName}})
    }

    const addDog = () => {
        let newDogName = dogRe.current.value
        dispatch({type: 'addDog', payload: {name: newDogName}})
    }
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <div>
                    <input type="text" ref={catRe}/>
                    <button onClick={addCat}> addCat</button>
                </div>
                <div>
                    <input type="text" ref={dogRe}/>
                    <button onClick={addDog}> addDog</button>
                </div>
            </div>
            <hr/>
            <div>
                {state.cats.map(cat => <Cat key={cat.id} cat={cat} dispatch={dispatch}/>)}
                {state.dogs.map(dog => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}
            </div>
        </div>
    );
};

export default App;