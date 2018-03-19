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
        searchQuery: '',
        watchList: [],
        msg: `Loading...`
    };

    handleSearch = (query) => {
        this.setState({
            fApi: "/search/movie",
            searchQuery: `&query=${query}`
        }, () => {
            this.getMovies();
        });
    };

    getCategoriesMovies = (category) => {
        this.setState({
            fApi: category,
            searchQuery: ``
        }, () => {
            this.getMovies();
            })
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
                if (mov.length === 0) {
                    this.setState ({
                        msg: `Sorry, we didn't find anything... (⌣́_⌣̀)`,
                        movies: mov
                    })
                } else {
                    this.setState({
                        movies: mov
                    })
                }
            })
            .catch(err => console.log(err))
    };

    addToWatchList = (movieCard) => {
        const {watchList} = this.state;
        const findCard = watchList.find(movie => (movie.id === movieCard.id || movie.movieTitle === movieCard.movieTitle));
        if (findCard === undefined) {
            this.setState(prevState => ({
                watchList: prevState.watchList.concat(movieCard)
            }), () => {
                localStorage.setItem('watchList', JSON.stringify(this.state.watchList));
            });
        };
    };

    getWatchList = () => {
        const localWatchList = JSON.parse(localStorage.getItem('watchList'));
        console.log("localWatchList: ", localWatchList);
        this.setState({
            watchList: localWatchList
        });
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

    componentDidMount () {
        this.getMovies();
        this.getWatchList();
    }

    render() {
        const { movies, searchQuery, watchList, msg } = this.state;
        return (
            <div className="App">
                <Header pageTitle="Movie Mate" navLinks={ navLinks }/>
                <div className="AppBody">
                    <SideBar onSearch={this.handleSearch} query={searchQuery} getCategory={this.getCategoriesMovies} watchList={ watchList } deleteFromWatchList={this.deleteFromWatchList} />
                    <MovieGallery movies={movies} addToWatchList={this.addToWatchList} msg={msg} />
                </div>
            </div>

        );
    }
}
