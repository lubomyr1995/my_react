import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Car} from "../Car/Car";
import {carAction} from "../../redux/slices/car.slice";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.cars);

    useEffect(() => {
        dispatch(carAction.getAll())
    }, []);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};
