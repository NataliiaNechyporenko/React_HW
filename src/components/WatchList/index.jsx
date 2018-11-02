import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteMovieFromWatchList } from '../../redux/actions/watchlist';
import WatchListCard from '../WatchListCard';

import './styles.css';

const WatchList = ({ watchList, onDelete }) => (
  <div className="WatchList">
    <h2 className="WatchList__title">WatchList</h2>
    <div className="MoviesListContainer">
      {watchList.length === 0 ? (
        <p className="text">Add movies to watchlist...</p>
      ) : (
        <div className="MoviesList">
          {watchList.map(movie => (
            <div className="WatchList__item" key={movie.id}>
              <WatchListCard movie={movie} onDelete={onDelete} />
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

WatchList.defaultProps = {
  watchList: [],
  onDelete: () => {}
};

WatchList.propTypes = {
  watchList: PropTypes.arrayOf(PropTypes.shape()),
  onDelete: PropTypes.func
};

const mSTP = state => ({
  watchList: state.watchList,
});

const mDTP = dispatch => ({
  onDelete: (id) => dispatch(deleteMovieFromWatchList(id)),
});

export default connect(mSTP, mDTP)(WatchList);
