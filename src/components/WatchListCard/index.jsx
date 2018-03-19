import React from 'react';
import './styles.css';

const WatchListCard = ({movie, deleteFromWatchList}) =>  {
    const deleteMovie = (evt) => {
        evt.preventDefault();
        let movieCard = movie;
        deleteFromWatchList(movieCard);
    };

    return (
    <div className="WatchListCard">
        <img src={movie.img} title={`Poster ${movie.movieTitle}`} alt={`Poster ${movie.movieTitle}`} className="WatchListCard__img" />
        <div className="WatchListCard__info">
            <h4 className="WatchListCard__title">{movie.movieTitle}</h4>
            <p className="WatchListCard__reliase">{`Released: ${movie.releaseDate.slice(0, 4)}`}</p>
            <p className="WatchListCard__rating">Rating: {movie.rating}</p>
        </div>
        <button className="WatchListCard__btn" onClick={deleteMovie} >-</button>
    </div>
)};

export default WatchListCard;
