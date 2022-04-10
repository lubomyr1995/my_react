import React, {useState} from 'react';

import './App.css';
import {Details, Posts, Users} from "./components";

const App = () => {
    const [details, setDetails] = useState(null);
    const [postByUserId, setPostByUserId] = useState(null);

    return (
        <div>
            <div className={'flex'}>
                <Users setDetails={setDetails} setPostByUserId={setPostByUserId}/>
                <div>{details && <Details details={details} setPostByUserId={setPostByUserId}/>}</div>
            </div>
            {postByUserId && (<Posts postByUserId={postByUserId}/>)}
        </div>
    );
};

export default App;