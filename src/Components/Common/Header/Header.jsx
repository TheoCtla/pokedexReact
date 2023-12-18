import React from 'react';
import "./Header.css";
import Logo from './Logo/Logo';
import LanguageSelection from './LanguageSelection/LanguageSelection';

const Header = () => {
  return (
    <header id='header' className='header-container'>
        <div className='header-content'>
            <Logo/>
            <LanguageSelection/>
        </div>
    </header>
  );
};

export default Header;
