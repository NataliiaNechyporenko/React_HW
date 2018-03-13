import React, { Component } from 'react';
import './styles.css';
import v4 from 'uuid/v4';

import MovieCard from '../MovieCard';

export default class MovieGallery extends Component {
    render () {
        const { movies } = this.props;
        return (
            <div className="MovieGallery">
                { movies.map(movie => (
                    <div className="GalleryItem" key={movie.id}>
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>
        )
    }
}
