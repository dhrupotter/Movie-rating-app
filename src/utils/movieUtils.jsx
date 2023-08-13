export const isMovieStarred = (starredMovies, id) => starredMovies.find((movie) => movie.id === id)
export const isMovieInWatchList = (watchlistMovies, id) => watchlistMovies.find((movie) => movie.id === id)
export const removeFromWatchList = (watchlistMovies, id) => watchlistMovies.filter((movie) => movie.id !== id)
export const removeFromStarred = (starredMovies) => starredMovies.filter((movie) => movie.id !== id)
