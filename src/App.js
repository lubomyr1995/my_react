import React, {useState} from 'react';

import {Details, Posts, Users} from "./components";

const App = () => {
    const [details, setDetails] = useState(null);
    return (
        <div>
            <div>
                <Users setDetails={setDetails}/>
                {details && <Details details={details}/>}
            </div>
            <Posts/>
        </div>
    );
};

export default App;