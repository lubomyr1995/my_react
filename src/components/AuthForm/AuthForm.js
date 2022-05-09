import {useForm} from "react-hook-form";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {usersService} from "../../services";
import {useDispatch} from "react-redux";
import {authActions} from "../../redux/slices";

const AuthForm = () => {
    const {register, handleSubmit} = useForm();
    const [isLogin, setIsLogin] = useState(null);
    const [errors, setErrors] = useState(null);
    const {loginErrors} = useSearchParams(state1 => state1.auth);
    const {pathname, state} = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        pathname === '/register' ? setIsLogin(false) : setIsLogin(true)
    }, [pathname])

    const submit = async (user) => {
        try {
            if (!isLogin) {
                await usersService.create(user)
                navigate('/login')
            } else {
                await dispatch(authActions.login({user}))
                navigate(state?.pathname || '/', {replace: true})
            }
        } catch (e) {
            console.log(e.response)
            setErrors(e.response.data)
        }
    }

    // if (errors) {
    //     console.log(errors);
    // }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Username: <input type="text" {...register('username')}/></label></div>
            <div><label>Password: <input type="text" {...register('password')}/></label></div>
            <div>
                {errors?.username && <span>{errors.username[0]}</span>}
                {errors?.password && <span>{errors.password[0]}</span>}
                {loginErrors && <span>Wrong uasername or password</span>}
            </div>
            <button>{isLogin ? 'login' : 'register'}</button>
        </form>
    );
};


export {AuthForm};
