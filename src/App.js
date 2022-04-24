import {ClassComponent, FunctionComponent} from "./components";
import {useState} from "react";

const App = () => {
    const [flag, setFlag] = useState(true);
    return (
        <div>
            {/*<div>{flag && <ClassComponent sss={'MyProps'}/>}*/}
            {/*    <button onClick={() => setFlag(prev => !prev)}>hide</button>*/}
            {/*</div>*/}

            <hr/>
            <div>{flag && <FunctionComponent sss={'MyProps'}/>}
                <button onClick={() => setFlag(prev => !prev)}>hide</button>
            </div>
        </div>
    );
};

export default App;