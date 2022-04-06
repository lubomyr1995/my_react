import React from 'react';

export const Post = ({item:{id, title}}) => {
    return (
        <div>
            <p>{id}. {title}</p>
            <hr/>
        </div>
    );
};
