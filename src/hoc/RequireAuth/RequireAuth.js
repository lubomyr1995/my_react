import {useAuth} from "../../hooks";
import {Navigate, useLocation} from "react-router-dom";

const RequireAuth = ({children}) => {
    const {user} = useAuth();
    const location = useLocation();

    if (!user) {
        return <Navigate to={'/login'} state={location}/>
    }
    return children
};

export {RequireAuth};
