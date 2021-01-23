import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Part = ({ part }) => {
    return (
        <li>{part.name} {part.exercises}</li>
    )
}
export default Part