import {useDispatch, useSelector} from "react-redux";
import {countActions} from "../../redux/slices";

const Counter = () => {
    const {count} = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => dispatch(countActions.inc())}>Inc</button>
            <button onClick={() => dispatch(countActions.dec())}>Dec</button>
            <button onClick={() => dispatch(countActions.res(10))}>R</button>
            <hr/>
        </div>
    );
};

export {Counter};

