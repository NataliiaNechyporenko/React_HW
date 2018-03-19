import React, { Component } from 'react';
import './styles.css';

import MovieCard from '../MovieCard';

export default class MovieGallery extends Component {
    render () {
        const { movies, addToWatchList, msg } = this.props;
        return (
            <div className="MovieGallery">
                {movies.length === 0 ?
                    (<p className="MovieGallery__msg">{msg}</p>)
                    : (movies.map(movie => (
                        <div className="GalleryItem" key={movie.id}>
                            <MovieCard movie={movie} addToWatchList={addToWatchList} />
                        </div>)
                    ))
                }
            </div>
        );
    };
};
