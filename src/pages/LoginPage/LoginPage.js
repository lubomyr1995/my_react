import {useAuth} from "../../hooks";
import {useLocation, useNavigate} from "react-router-dom";
import {useRef} from "react";

const LoginPage = () => {
    const {logIn} = useAuth();
    const {state} = useLocation();
    const name = useRef()
    const navigate = useNavigate();
    // console.log(pathname)

    function submit() {
        const newUser = name.current.value
        logIn(newUser, () => navigate(state.pathname, {replace: true}))

    }

    return (
        // <form onSubmit={submit}>
        //     <div><label htmlFor="{'name'}">Name: <input name={'name'} type="text" ref={name}/></label></div>
        //     <button>Send</button>
        // </form>
        <div>
            <input type="text" ref={name} placeholder={'name'}/>
            <button onClick={submit}>log</button>
        </div>
    )
        ;
};

export {LoginPage};
