import React from 'react';

export const Comment = ({item: {id, name, email, body}}) => {
    return (
        <div>
            <b>{id}. email: {email}, {name}</b>
            <i>{body}</i>
            <hr/>
        </div>
    );
};