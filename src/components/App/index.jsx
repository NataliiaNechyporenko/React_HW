import React, { Component } from 'react';
import './styles.css';
import v4 from 'uuid/v4';

import Header from '../Header';
import SideBar from '../SideBar';
import MovieGallery from '../MovieGallery';

const navLinks = [
    {
        id: v4(),
        linkText: "home"
    },
    {
        id: v4(),
        linkText: "about"
    },
    {
        id: v4(),
        linkText: "browse"
    }
];

export default class App extends Component {
    state = {
        movies: [],
        fApi: "/movie/popular",
        searchQuery: ''
    };

    handleSearch = (query) => {
        this.setState({
            fApi: "/search/movie",
            searchQuery: `&query=${query}`
        }, () => {
            this.getMovies();
            console.log(this.state.movies);});
    };

    getMovies = () => {
        const { fApi, searchQuery } = this.state;
        const endPoint = "https://api.themoviedb.org/3";
        const apiKey = '?api_key=4625b62e0cb64ba1828971e21a3d765b';
        fetch(`${endPoint}${fApi}${apiKey}${searchQuery}`)
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
                console.log(data);
                this.setState({
                    movies: mov
                });
            })
            .catch(err => console.log(err))
    };

    componentWillMount () {
        this.getMovies();
    }

    render() {
        const { movies, searchQuery } = this.state;
        console.log("query:", searchQuery);
        return (
            <div className="App">
                <Header pageTitle="Movie Mate" navLinks={ navLinks }/>
                <div className="AppBody">
                    <SideBar onSearch={this.handleSearch} query={searchQuery} />
                    <MovieGallery movies={movies} />
                </div>
            </div>

        );
    }
}
