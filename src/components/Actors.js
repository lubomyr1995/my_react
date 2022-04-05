import React from 'react';

const Actors = ({name, image}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, temporibus?</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Actors;