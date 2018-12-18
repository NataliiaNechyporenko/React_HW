import React, { Component, Fragment}  from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMovies } from '../../redux/actions/movies';

import MovieGallery from '../MovieGallery';

class MoviePage extends Component {
  static propTypes = {
    OnGetMovies: PropTypes.func,
    isLoading: PropTypes.bool
  };

  componentDidMount() {
    const movieId = this.props.match.params.id;
  }
    

  render () {
    return (
      <div className="page-content-container">One Movie Page</div>
    );
  };
};

export default MoviePage;