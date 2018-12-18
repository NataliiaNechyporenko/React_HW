import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Navigation = ({ navLinks }) => (
  <ul className="Navigation">
    {navLinks.map(link => (
      <li key={link.linkText} className="item">
        <NavLink
          to={link.linkUrl}
          activeClassName="selected"
          className="nav-link item">
          {link.linkText}
        </NavLink>
      </li>
    ))}
  </ul>
);

Navigation.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      linkText: PropTypes.string,
      linkUrl: PropTypes.string,
    }),
  ),
};

Navigation.defaultProps = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      linkText: '',
      linkUrl: '#',
    }),
  ),
};

export default Navigation;
