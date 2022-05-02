import {useDispatch} from "react-redux";

import {carAction} from "../../redux/slices/car.slice";

const Car = ({car}) => {
    const {id, model, price, year} = car;
    const dispatch = useDispatch();

    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <div>
                <button onClick={() => dispatch(carAction.deleteById({id}))}>delete</button>
                <button onClick={() => dispatch(carAction.setUpdate({car}))}>update</button>
            </div>
            <br/>
        </div>
    );
};

export {Car};
