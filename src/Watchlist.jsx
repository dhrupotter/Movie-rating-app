import React from 'react'
import { usemovies } from './movie.context'
import { Link } from 'react-router-dom'
import { isMovieInWatchList, isMovieStarred, removeFromWatchList } from './utils/movieUtils'

const Watchlist = () => {

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
        <div className='movie-list-section'>
            <ul className="movie-list">
                {watchlistMovies.map(movie => (
                    <div className='movie-card'>

                        <li key={movie.id}>
                            <Link key={movie.id} to={`/${movie.id}`}>
                                <div className="movie-img-container">
                                    <img
                                        src={movie.imageURL}
                                        atl={movie.title}
                                        className="movie-img"
                                    ></img>
                                </div>
                            </Link>
                            <div className='details'>
                                <h1>{movie.title} </h1>
                                <p>{movie.summary}</p>
                                <div className="btn-container">
                                    <button onClick={() => handleAddToStarred(movie, movie.id)}>{isMovieStarred(starredMovies, movie.id)
                                        ? "Starred"
                                        : "Star"}</button>
                                    <button onClick={() => handleAddToWatchlist(movie, movie.id)}>{isMovieInWatchList(watchlistMovies, movie.id)
                                        ? "Remove from watchList"
                                        : "Add to Watchlist"}</button>
                                </div>
                            </div>

                        </li>

                    </div>
                )

                )}
            </ul>
        </div >
    )
}

export default Watchlist