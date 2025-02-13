import React from 'react';
import './ButtonComponent.css';


const Button=({type,text,onClick})=>{
    return<button type={type} onClick={onClick}>{text}</button>
}

export default Button;