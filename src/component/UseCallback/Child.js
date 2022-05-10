import {useEffect} from "react";

const Child = ({sayHello}) => {
    useEffect(() => {
        console.log('pererender')
    }, [sayHello]);

    return (
        <div>
            <button onClick={sayHello}>sayHello</button>
        </div>
    );
};

export {Child};
