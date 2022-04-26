import {useDispatch} from "react-redux";
import {useRef} from "react";
import {userAction} from "../../redux/slices/user.slice";

const Form = () => {
    const dispatch = useDispatch();
    const nameRe = useRef();
    return (
        <div>
            <input type="text" ref={nameRe}/>
            <button onClick={() => dispatch(userAction.add({name: nameRe.current.value}))}>sent</button>
            <hr/>
        </div>
    );
};

export {Form};
