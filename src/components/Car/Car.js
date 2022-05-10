import {useDispatch} from "react-redux";
import {carActions} from "../../redux/slices";

const Car = ({car: {id, model, price, year}}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <div>
                <button onClick={() => dispatch(carActions.deleteAsync({id}))}>delete</button>
            </div>
            <br/>
        </div>
    );
};

export {Car};
