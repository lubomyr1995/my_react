import {CatForm} from "./components/CatForm";
import {CatsComponent, DogsComponent} from "./components";
import {DogForm} from "./components/DogForm";

const App = () => {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <CatForm/>
                <DogForm/>
            </div>
            <hr/>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <CatsComponent/>
                <DogsComponent/>
            </div>
        </div>
    );
};

export default App;