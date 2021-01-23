import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Part from './Part'


const Content = ({ parts }) => {
    return (
        <div>
            <ul>
                {parts.map(part => <Part key={part.id} part={part}></Part>)}
            </ul>
        </div>
    )
}
export default Content