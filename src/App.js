import React, {useState} from 'react';

import css from './App.module.css'
import {Details, Form1, Form2, Users} from "./components";

const App = () => {
    const [details, setDetails] = useState(null)
    return (
        <div className={css.w500}>
            {/*{details && <Details item={details}/>}*/}
            {/*<Users getUser={setDetails}/>*/}
            {/*<Form1/>*/}
            <Form2/>
        </div>
    );
};

export default App;