import {useRef} from "react";

export const Form1 = () => {
    const name = useRef();
    const age = useRef();

    function onSubmit(e) {
        e.preventDefault()
        let name1 = name.current.value;
        let age1 = age.current.value;
        const user = {name1, age1};
        console.log(user);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div><label htmlFor="{'name'}"><input name={'name'} type="text" ref={name}/></label></div>
                <div><label htmlFor="{'age'}"><input name={'age'} type="number" ref={age}/></label></div>
                <button>click me</button>
            </form>
        </div>
    );
};