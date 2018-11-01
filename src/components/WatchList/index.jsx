import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WatchListCard from '../WatchListCard';

import './styles.css';

const WatchList = ({ watchList }) => (
  <div className="WatchList">
    <h2 className="WatchList__title">WatchList</h2>
    <div className="MoviesListContainer">
      {watchList.length === 0 ? (
        <p className="text">Add movies to watchlist...</p>
      ) : (
        <div className="MoviesList">
          {watchList.map(movie => (
            <div className="WatchList__item" key={movie.id}>
              <WatchListCard movie={movie}/>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

WatchList.defaultProps = {
  watchList: [],
};

WatchList.propTypes = {
  watchList: PropTypes.arrayOf(PropTypes.shape()),
};

const mSTP = state => ({
  watchList: state.watchList,
});

export default connect(mSTP)(WatchList);
