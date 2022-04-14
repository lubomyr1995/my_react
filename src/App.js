import {CarForm} from "./components";
import {Cars} from "./components";
import {useState} from "react";

const App = () => {
    const [newCar, setNewCar] = useState(null);
    const [carUpdate, setCarUpdate] = useState(null);
    const [updatedCar, setUpdatedCar] = useState(null);

    return (
        <div>
            <CarForm setNewCar={setNewCar} carUpdate={carUpdate} setUpdatedCar={setUpdatedCar} setCarUpdate={setCarUpdate}/>
            <hr/>
            <Cars newCar={newCar} setCarUpdate={setCarUpdate} updatedCar={updatedCar}/>
        </div>
    );
};

export default App;