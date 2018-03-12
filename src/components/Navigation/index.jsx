import React from 'react';
import './styles.css';

const Navigation = ({ navLinks }) => (
    <ul className="Navigation">
        { navLinks.map(link => (
            <li key={link.id} className="item">{link.linkText}</li>
        ))}
    </ul>
);

export default Navigation;
