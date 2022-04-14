import {carsService} from "../../services";

export const Car = ({car, setDelCar, setCarUpdate}) => {
    const {id, model, price, year} = car;
    const delCar = async () => {
        await carsService.deleteById(id);
        setDelCar(id);
    }
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={delCar}>delete</button>
            <button onClick={() => setCarUpdate(car)} >update</button>
            <br/>
        </div>
    );
};