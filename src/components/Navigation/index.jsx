import React from 'react';
import './styles.css';

const Navigation = ({ navLinks }) => (
    <ul className="Navigation">
        { navLinks.map(link => (
            <li key={link.linkText} className="item">{link.linkText}</li>
        ))}
    </ul>
);

export default Navigation;
