import {AuthForm} from "../components";
import {useDispatch} from "react-redux";
import {authActions} from "../redux/slices";
import {useEffect} from "react";

const RegisterPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(authActions.setAuth())
    }, [dispatch]);
    return (
        <div>
            <AuthForm/>
        </div>
    );
};

export {RegisterPage};
