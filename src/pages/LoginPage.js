import {Link, useSearchParams} from "react-router-dom";
import {AuthForm} from "../components";
import {useEffect} from "react";

const LoginPage = () => {
    const [query] = useSearchParams();
    localStorage.clear();
    useEffect(() => {
        console.log(!!query.get('ExpSession'))
    }, [query])
    return (
        <div>
            <AuthForm/>
            <Link to={'/register'}>register</Link>
        </div>
    );
};

export {LoginPage};
