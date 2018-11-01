import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard';

import './styles.css';

const MovieGallery = ({ movies }) => (
  <div className="MovieGallery">
    {movies.length === 0 ? (
      <p className="MovieGallery__msg">
        Sorry, we did not find anything... (⌣́_⌣̀)
      </p>
    ) : (
      movies.map(movie => (
        <div className="GalleryItem" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))
    )}
  </div>
);

MovieGallery.defaultProps = {
  movies: [],
};

MovieGallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape())
};

const mSTP = state => ({
  movies: state.movies.data,
});

export default connect(mSTP)(MovieGallery);
