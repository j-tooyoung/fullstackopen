import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Part from './Part'


const Total = ({ parts }) => {
    const sum = parts.reduce((a,b) =>{
        return a+b.exercises
    },0)
    return (
        <p><strong>total of {sum} exercises</strong></p>
    )
}
export default Total