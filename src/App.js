import React from 'react';
import './App.css'
import Actors from "./components/Actors";
import Users from "./components/Users";

// const actors = [
//     {id: 1, name: 'Tom', image: 'https://i.pinimg.com/474x/ba/74/6a/ba746a5ad203704cbac746f2c23314da.jpg'},
//     {id: 2, name: 'Jerry', image: 'https://pngimg.com/uploads/tom_and_jerry/tom_and_jerry_PNG3.png'},
//     {id: 3, name: 'Legs', image: 'https://static.wikia.nocookie.net/tomandjerry/images/0/0d/Mammytwoshoes-1-.jpg'},
//     {id: 4, name: 'Spike', image: 'https://static.wikia.nocookie.net/thetomjerry/images/c/cb/Spike.gif'},
// ]

const App = () => {
    return (
        <div>
            {/*<div>*/}
            {/*    {actors.map(actor => <Actors key={actor.name} name={actor.name} image={actor.image}/>)}*/}
            {/*</div>*/}
            <div>
                <Users/>
            </div>
        </div>
    );
};

export default App;