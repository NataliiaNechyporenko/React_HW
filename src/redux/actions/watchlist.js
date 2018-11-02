import { ADD_MOVIE_TO_WATCHLIST, DELETE_MOVIE_FROM_WATCHLIST } from './types';

export const addMovieToWatchList = movie => ({
  type: ADD_MOVIE_TO_WATCHLIST,
  payload: movie
});

export const deleteMovieFromWatchList = id => ({
  type: DELETE_MOVIE_FROM_WATCHLIST,
  payload: id
})

export const s=5;




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

  // getWatchList = () => {
  //   const localWatchList = JSON.parse(localStorage.getItem('watchList'));
  //     if (localWatchList !== null) {
  //       this.setState({
  //       watchList: localWatchList
  //     });
  //   }
  // }

  //   deleteFromWatchList = (movieCard) => {
  //       const {watchList} = this.state;
  //       localStorage.removeItem('watchList');
  //       const newWatchList = watchList.filter(movie => movie.id !== movieCard.id);
  //       this.setState({
  //           watchList: newWatchList
  //       });
  //       localStorage.setItem('watchList', JSON.stringify(newWatchList));
  //   }