import {CatForm, DogForm, Dogs} from "./components";
import {Cats} from "./components";

const App = () => {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <CatForm/>
                <DogForm/>
            </div>
            <hr/>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <Cats/>
                <Dogs/>
            </div>
        </div>
    );
};

export default App;