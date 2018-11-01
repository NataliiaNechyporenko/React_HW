export const getFilteredMovies = (movies, searchValue) => 
movies.filter(movie=> ((movie.title.toLowerCase().includes(searchValue.toLowerCase()))));

export const x=5;