import React from 'react';
import ReactDOM from 'react-dom';

const Person = ({ person }) => {
    return (
        <p>{person.name}</p>
    )
}

export default Person