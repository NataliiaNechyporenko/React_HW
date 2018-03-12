import React from 'react';
import './styles.css';

import Navigation from '../Navigation';

const Header = ({ pageTitle, navLinks }) => (
    <header className="Header">
        <h1 className="title">{ pageTitle }</h1>
        <Navigation navLinks={ navLinks } />
    </header>
);

export default Header;
