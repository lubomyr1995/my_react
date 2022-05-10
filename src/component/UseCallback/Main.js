import {useCallback, useState} from "react";
import {Child} from "./Child";

const Main = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    // const sayHello = () => {
    //     console.log('sayHello')
    // }
    const sayHello = useCallback(() => {
        console.log('sayHello')
    }, [count2]);

    return (
        <div>
            <h1>count1: {count1}</h1>
            <h1>count2: {count2}</h1>
            <Child sayHello={sayHello}/>
            <button onClick={() => setCount1(prevState => prevState + 1)}>incCount1</button>
            <button onClick={() => setCount2(prevState => prevState + 1)}>incCount2</button>
        </div>
    );
};

export {Main};
