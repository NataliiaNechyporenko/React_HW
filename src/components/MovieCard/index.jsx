import React from 'react';
import './styles.css';

const MovieCard = ({movie}) => (
            <div className="MovieCard">
                <span className="MovieCard__rating">{movie.rating}</span>
                <img src={movie.img} title={`Poster ${movie.movieTitle}`} alt={`Poster ${movie.movieTitle}`} className="MovieCard__img" />
                <h3 className="MovieCard__title">{movie.movieTitle}</h3>
                <p className="MovieCard__desc">{`${movie.desc.slice(0, 100)}...`}</p>
                <p className="MovieCard__reliase">{`Release date: ${movie.releaseDate.slice(0, 4)}`}</p>
                <button className="MovieCard__addBtn">+</button>
            </div>
);
export default MovieCard;
