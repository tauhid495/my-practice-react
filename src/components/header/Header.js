import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div><h1>This Is Header</h1></div>
            <div className='navright'>
                <a href="">Home</a>
                <a href="">Catagory</a>
                <a href="">About Us</a>
                <a href="">Contact Us</a>
            </div>
        </div>
        
    );
};

export default Header;