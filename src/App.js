import './App.css';
import React from 'react';
import {Comments, Posts, Users} from "./components";

const App = () => {
    return (
        <div>
            <div className={'users_posts'}><Users/>
                <Posts/>
            </div>
            <Comments/>
        </div>
    );
};

export default App;
