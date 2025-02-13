import React from 'react';
import logo from './images/logo2.png';
import './HeaderComponent.css'

function Header() {
    return (
      <header className='Header'>
        <h1>UniTest</h1>
        <img src={logo}  className="Logo" alt=""/>
      </header>
    );
  }
  
  export default Header;
  