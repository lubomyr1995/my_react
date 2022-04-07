import {useState} from "react";

export const Form2 = () => {
    const [user, setUser] = useState({});

    function getChange(e) {
        e.preventDefault()
        setUser({...user, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <div>
                {JSON.stringify(user)}
            </div>
            <hr/>
            <form>
                <div><label htmlFor="{'name'}"><input name={'name'} type="text" onChange={getChange}/></label></div>
                <div><label htmlFor="{'age'}"><input name={'age'} type="number" onChange={getChange}/></label></div>
                <button>click me</button>
            </form>
        </div>
    );
};