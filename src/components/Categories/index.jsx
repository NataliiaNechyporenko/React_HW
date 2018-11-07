import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovies } from '../../redux/actions/movies';

import './styles.css';

const Categories = ({onClick}) => {
    const handleClick = (evt) => {
        evt.preventDefault();
        const category = evt.target.id;
        onClick(category);
    };
    return (
    <div className="Categories">
        <button className="btn" onClick={handleClick} id="popular" type="button" >popular</button>
        <button className="btn" onClick={handleClick} id="top_rated" type="button">top rating</button>
        <button className="btn" onClick={handleClick} id="upcoming" type="button">upcomming</button>
    </div>
)};

Categories.defaultProps = {
  onClick: () => {}
};

Categories.propTypes = {
  onClick: PropTypes.func
};

const mDTP = dispatch => ({
 onClick: (category) => dispatch(getMovies(category))
});

export default connect(null, mDTP)(Categories);
