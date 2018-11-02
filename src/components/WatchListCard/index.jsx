import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WatchListCard = ({movie, onDelete}) =>  {
    // const deleteMovie = (evt) => {
    //     evt.preventDefault();
    //     let movieCard = movie;
    //     deleteFromWatchList(movieCard);
    // };

    return (
    <div className="WatchListCard">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} title={`Poster ${movie.title}`} alt={`Poster ${movie.title}`} className="WatchListCard__img" />
        <div className="WatchListCard__info">
            <h4 className="WatchListCard__title">{movie.title}</h4>
            <p className="WatchListCard__reliase">{`Released: ${movie.release_date.slice(0, 4)}`}</p>
            <p className="WatchListCard__rating">Rating: {movie.vote_average}</p>
        </div>
        <button className="WatchListCard__btn"
        onClick={(evt) => {
            evt.preventDefault();
            console.log(movie.id);
            onDelete(movie.id);
        } }
        type="button" >-</button>
    </div>
)};


WatchListCard.defaultProps = {
  movie: {},
  onDelete: () => {}
};

WatchListCard.propTypes = {
  movie: PropTypes.shape(),
  onDelete: PropTypes.func
};

export default WatchListCard;
