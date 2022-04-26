import {useDispatch} from "react-redux";
import {userAction} from "../../redux/slices/user.slice";

const User = ({user: {id, name}}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <h2>{id}) {name}</h2>
            <button onClick={() => dispatch(userAction.del({id}))}>delete</button>
        </div>
    );
};

export {User};
