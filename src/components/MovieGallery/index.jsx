import React, { Component } from 'react';
import './styles.css';
import v4 from 'uuid/v4';

import MovieCard from '../MovieCard';

export default class MovieGallery extends Component {
    state = {
        movies: []
    };

    componentWillMount () {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4625b62e0cb64ba1828971e21a3d765b")
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error('Error fetching' + response.statusText);
            })
            .then(data => {
                const mov = data.results.map(result => ({
                    id: v4(),
                    movieTitle: result.title,
                    img: `https://image.tmdb.org/t/p/w300${result.poster_path}`,
                    desc: result.overview,
                    releaseDate: result.release_date,
                    rating: result.vote_average
                }));
                this.setState({
                    movies: mov
                });
            })
            .catch(err => console.log(err));
    }

    render () {
        const { movies } = this.state;
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
