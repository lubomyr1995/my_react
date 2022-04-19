import {useAuth} from "../hooks";
import {Navigate, useLocation} from "react-router-dom";

const RequireAuth = ({children}) => {
    const location = useLocation();
    const {user} = useAuth();

    if (!user) {
        return (<Navigate to={'/login'} state={location}/>)
    } else {
        return children
    }
};

export {RequireAuth};
