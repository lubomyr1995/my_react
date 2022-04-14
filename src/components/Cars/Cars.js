import {useEffect, useState} from "react";

import {carsService} from "../../services";
import {Car} from "../Car/Car";

export const Cars = ({newCar, setCarUpdate, updatedCar}) => {
    const [cars, setCars] = useState([]);
    const [delCar, setDelCar] = useState(null);

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data))
    }, [newCar, updatedCar]);

    // useEffect(() => {
    //     if (newCar) {
    //         // setCars([...cars, newCar])
    //         setCars(prevState => [...prevState, newCar])
    //     }
    // }, [newCar]);

    useEffect(() => {
        if (delCar) {
            setCars(cars.filter(car => car.id !== delCar))
        }
    }, [delCar])
    //
    // useEffect(() => {
    //     if (updatedCar) {
    //         const car = cars.find(car => car.id === updatedCar.id)
    //         Object.assign(car, updatedCar)
    //         setCars([...cars])
    //     }
    // }, [updatedCar])


    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setDelCar={setDelCar} setCarUpdate={setCarUpdate}/>)}
        </div>
    );
};