import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Header = ({ header }) => {
    console.log(header);
    return (
        <h2>{header}</h2>
    )
}
export default Header