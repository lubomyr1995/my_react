import {useEffect, useState} from "react";

const FunctionComponent = ({sss}) => {
    console.log('constructor');
    const [state, setState] = useState({a: 0, b: 0});

    function inc() {
        setState({...state, a: state.a + 1})
    }

    useEffect(() => {
        console.log('mount')
        return () => {
            console.log('componentWillUnmount')
        }
    }, []);

    useEffect(_ => {
        console.log('update')
    }, [sss, state])

    return (
        <div>
            {console.log('render')}
            Hello this is FunctionComponent Lifecycles
            <div>{sss}</div>
            <div>A: {state.a}</div>
            <div>B: {state.b}</div>
            <button onClick={inc}>inc</button>
        </div>
    );
};

export {FunctionComponent};
