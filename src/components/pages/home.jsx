import React, { Component, Fragment}  from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMovies } from '../../redux/actions/movies';

import MovieGallery from '../MovieGallery';

class HomePage extends Component {
  static propTypes = {
    OnGetMovies: PropTypes.func,
    isLoading: PropTypes.bool
  };
    
  componentDidMount () {
    const { OnGetMovies } = this.props;
    OnGetMovies();
  };

  // addToWatchList = (movieCard) => {
  //   const {watchList} = this.state;
  //   const findCard = watchList.find(movie => (movie.id === movieCard.id || movie.movieTitle === movieCard.movieTitle));
  //   if (findCard === undefined) {
  //     this.setState(prevState => ({
  //     watchList: prevState.watchList.concat(movieCard)
  //     }), () => {
  //     localStorage.setItem('watchList', JSON.stringify(this.state.watchList));
  //   });
  //   };
  // };

  getWatchList = () => {
    const localWatchList = JSON.parse(localStorage.getItem('watchList'));
      if (localWatchList !== null) {
        this.setState({
        watchList: localWatchList
      });
    }
  }

    deleteFromWatchList = (movieCard) => {
        const {watchList} = this.state;
        localStorage.removeItem('watchList');
        const newWatchList = watchList.filter(movie => movie.id !== movieCard.id);
        this.setState({
            watchList: newWatchList
        });
        localStorage.setItem('watchList', JSON.stringify(newWatchList));
    }

  render() {
    const { isLoading } = this.props;
    
    return (
      <Fragment>
        { isLoading ?
          <p className="MovieGallery__msg">Loading...</p>
          : <MovieGallery />
        }
      </Fragment>
    );
  };
};

HomePage.defaultProps = {
  OnGetMovies: () => {},
  isLoading: true
};

const mSTP = state => ({ isLoading: state.movies.loading });

const mDTP = dispatch => ({ 
  OnGetMovies: () => dispatch(getMovies()),
 });

export default connect(mSTP, mDTP)(HomePage);