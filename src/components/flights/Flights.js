import {useEffect, useState} from "react";
import './Flights.css'
import {services} from "../../services";
import {Flight} from "../flight/Flight";

export const Flights = () => {
    const [flights, setFlights] = useState([]);
    useEffect(_ => {
        services.getFlights.then(value => setFlights(value.filter(el => el.launch_year !== '2020')))
    }, []);
    return (
        <div className={'flex'}>
            {flights.map((flight, index) => <Flight key={index} item={flight}/>)}
        </div>
    );
};
