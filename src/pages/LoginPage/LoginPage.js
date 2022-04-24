import {useRef} from "react";
import {useAuth} from "../../hooks";
import {useLocation, useNavigate} from "react-router-dom";

const LoginPage = () => {
    const reUser = useRef();
    const {logIn} = useAuth();
    const navigate = useNavigate();
    const {state} = useLocation();

    const login = () => {
        const userName = reUser.current.value;
        logIn(userName, () => navigate(state.pathname, {replace: true}))
    }
    return (
        <div>
            <input type="text" ref={reUser} placeholder={'name'}/>
            <button onClick={login}>log</button>
        </div>
    );
};

export {LoginPage};
