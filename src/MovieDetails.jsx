import React from 'react'
import { usemovies } from './movie.context'
import { Link, useParams } from 'react-router-dom'
import { isMovieInWatchList, isMovieStarred, removeFromWatchList } from './utils/movieUtils'

const MovieDetails = () => {

    const { allMovies } = usemovies()
    const { movieId } = useParams()
    // console.log(allMovies)
    const currentMovie = allMovies.find(item => item.id === +movieId)
    // console.log(currentMovie)

    const { starredMovies, watchlistMovies, setStarredMovies, setWatchlistMovies } = usemovies()

    const handleAddToStarred = (movie, id) => {
        if (isMovieStarred(starredMovies, id)) {
            const removeFromStarred = starredMovies.filter((movie) => movie.id !== id)
            setStarredMovies(removeFromStarred)
        } else {
            setStarredMovies((prev) => [...prev, movie]);
        }
    }



    const handleAddToWatchlist = (movie, id) => {
        if (isMovieInWatchList(watchlistMovies, id)) {
            const newWatchlist = removeFromWatchList(watchlistMovies, movie.id)
            console.log(newWatchlist)
            setWatchlistMovies(newWatchlist)

        } else {
            setWatchlistMovies((prev) => [...prev, movie]);
        }
    }
    return (
        <div className='single-movie-card'>

            <div>
                <Link key={currentMovie.id} to={`/${currentMovie.id}`}>
                    <div className="movie-img-container">
                        <img
                            src={currentMovie.imageURL}
                            atl={currentMovie.title}
                            className="movie-img"
                        ></img>
                    </div>
                </Link>
            </div>
            <div className='details'>
                <h1>{currentMovie.title} </h1>
                <p>{currentMovie.summary}</p>
                <div className="btn-container">
                    <button onClick={() => handleAddToStarred(currentMovie, currentMovie.id)}>{isMovieStarred(starredMovies, currentMovie.id)
                        ? "Starred"
                        : "Star"}</button>
                    <button onClick={() => handleAddToWatchlist(currentMovie, currentMovie.id)}>{isMovieInWatchList(watchlistMovies, currentMovie.id)
                        ? "Go to Watchlist"
                        : "Add to Watchlist"}</button>
                </div>
            </div>



        </div>
    )
}

export default MovieDetails