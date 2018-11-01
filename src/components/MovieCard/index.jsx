import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMovieToWatchList } from '../../redux/actions/watchlist';

import './styles.css';

const MovieCard = ({ movie, onAddMovieToWatchList }) => (
    <div className="MovieCard">
      <span className="MovieCard__rating">{movie.vote_average}</span>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        title={`Poster ${movie.title}`}
        alt={`Poster ${movie.title}`}
        className="MovieCard__img"
      />
      <h3 className="MovieCard__title">{movie.title}</h3>
      <p className="MovieCard__desc">{`${movie.overview.slice(0, 100)}...`}</p>
      <p className="MovieCard__reliase">{`Release date: ${movie.release_date.slice(
        0,
        4,
      )}`}</p>
      <button
        className="MovieCard__addBtn"
        onClick={evt => {
          evt.preventDefault();
          onAddMovieToWatchList(movie);
        }}
        type="button">
        +
      </button>
    </div>
  );

MovieCard.defaultProps = {
  movie: {},
  // watchList: [],
  onAddMovieToWatchList: () => {},
};

MovieCard.propTypes = {
  movie: PropTypes.shape(),
  onAddMovieToWatchList: PropTypes.func,
  // watchList: PropTypes.arrayOf(PropTypes.shape())
};

// const mSTP = state => ({
//   watchList: state.watchList.data,
// });

const mDTP = dispatch => ({
  onAddMovieToWatchList: (movie) => dispatch(addMovieToWatchList(movie)),
});

export default connect( null, mDTP )(MovieCard);
