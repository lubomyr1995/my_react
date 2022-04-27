import {useSelector} from "react-redux";
import {Dog} from "./Dog";

const DogsComponent = () => {
    const {dogs} = useSelector(({dogs}) => dogs);

    return (
        <div>
            {dogs.map(dog => <Dog key={dog.id} dog={dog}/>)}
        </div>
    );
};

export {DogsComponent};
