import {useReducer} from "react";

const App = () => {
    const init = (initCount) => {
        return {count1: initCount, count2: initCount, count3: initCount}
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'dec1':
                return {...state, count1: state.count1 - 1}
            case 'dec2':
                return {...state, count2: state.count2 - 1}
            case 'dec3':
                return {...state, count3: state.count3 - 1}
            case 'inc1':
                return {...state, count1: state.count1 + 1}
            case 'inc2':
                return {...state, count2: state.count2 + 1}
            case 'inc3':
                return {...state, count3: state.count3 + 1}
            case 'res1':
                return {...state, count1: 0}
            case 'res2':
                return {...state, count2: 0}
            case 'res3':
                return {...state, count3: 0}
            case 'set1': {
                return {...state, count1: action.payload}
            }
            case 'set2': {
                return {...state, count2: action.payload}
            }
            case 'set3': {
                return {...state, count3: action.payload}
            }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, 0, init);
    return (
        <div>
            <div>
                <div>{state.count1}</div>
                <button onClick={() => dispatch({type: 'dec1'})}>dec</button>
                <button onClick={() => dispatch({type: 'inc1'})}>inc</button>
                <button onClick={() => dispatch({type: 'res1'})}>reset</button>
                <button onClick={() => dispatch({type: 'set1', payload: 10})}>Set to 10</button>
                <hr/>
            </div>

            <div>
                <div>{state.count2}</div>
                <button onClick={() => dispatch({type: 'dec2'})}>dec</button>
                <button onClick={() => dispatch({type: 'inc2'})}>inc</button>
                <button onClick={() => dispatch({type: 'res2'})}>reset</button>
                <button onClick={() => dispatch({type: 'set2', payload: 10})}>Set to 10</button>
                <hr/>
            </div>

            <div>
                <div>{state.count3}</div>
                <button onClick={() => dispatch({type: 'dec3'})}>dec</button>
                <button onClick={() => dispatch({type: 'inc3'})}>inc</button>
                <button onClick={() => dispatch({type: 'res3'})}>reset</button>
                <button onClick={() => dispatch({type: 'set3', payload: 10})}>Set to 10</button>
                <hr/>
            </div>
        </div>
    );
};

export default App;