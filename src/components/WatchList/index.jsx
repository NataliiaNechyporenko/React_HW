import React from 'react';
import './styles.css';
import WatchListCard from '../WatchListCard';

const WatchList = ({watchList, deleteFromWatchList}) => (
    <div className="WatchList">
        <h2 className="WatchList__title">WatchList</h2>
        <div className="MoviesListContainer">
            {watchList.length === 0
                ? <p className="text">Add movies to watchlist...</p>
                : <div className="MoviesList">
                    {watchList.map(movie => (
                        <div className="WatchList__item" key={movie.id}>
                            <WatchListCard movie={movie} deleteFromWatchList={deleteFromWatchList} />
                        </div>
                    ))}
                </div>
            }
        </div>
    </div>
);

export default WatchList;
