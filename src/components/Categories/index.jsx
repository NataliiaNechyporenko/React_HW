import React from 'react';
import './styles.css';

const Categories = ({getCategory}) => {
    const handleClick = (evt) => {
        evt.preventDefault();
        let choise = evt.target.id;
        getCategory(choise);
    };
    return (
    <div className="Categories">
        <button className="btn" onClick={handleClick} id="/movie/popular">popular</button>
        <button className="btn" onClick={handleClick} id="/movie/top_rated">top rating</button>
        <button className="btn" onClick={handleClick} id="/movie/upcoming">upcomming</button>
    </div>
)};

export default Categories;
