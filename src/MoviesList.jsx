import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { usemovies } from './movie.context'
import { movies } from './db/movies'
import { isMovieInWatchList, isMovieStarred } from './utils/movieUtils'

const MoviesList = () => {
    const navigate = useNavigate()

    const { allMovies, moviesList, setAllMovies, selectedGenre, setSelectedGenre, selectedYear, setSelectedYear, starredMovies, setStarredMovies, watchlistMovies, setWatchlistMovies } = usemovies()

    const startYear = 1990;
    const endYear = 2023;
    const years = [];

    for (let year = startYear; year <= endYear; year++) {
        years.push(year);
    }

    const handleGenreFilter = (GenreName) => {
        setSelectedGenre(GenreName)
        const filteredGenreMovies = GenreName === "All" ? movies : movies.filter((movie) => movie.genre.includes(GenreName))
        setAllMovies(filteredGenreMovies)
    }

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
            navigate("/watchlist")
        } else {
            setWatchlistMovies((prev) => [...prev, movie]);
        }
    }


    const handleYearFilter = (year) => {
        setSelectedYear(+year)
        const filteredYearMovies = year === "All" ? moviesList : allMovies.filter((movie) => movie.year === +year)
        setAllMovies(filteredYearMovies)
    }



    return (
        <div className='movie-list'>
            <div className='filters'>
                <h2>Movies</h2>
                <select name="category" id="" value={selectedGenre} onChange={(e) => handleGenreFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Drama">Drama</option>
                    <option value="Crime">Crime</option>
                    <option value="Romance">Romance</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Action">Action</option>
                </select>

                <select name="year" id="" value={selectedYear} onChange={(e) => handleYearFilter(e.target.value)}>
                    <option value="All">All</option>
                    {years.map(year => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>

                <button onClick={() => navigate("/addMovie")}>Add a Movie</button>
            </div>
            {allMovies.length > 0 ? (<div className='movie-list-section'>
                <ul className="movie-list">
                    {allMovies.map(movie => (
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
                                            ? "Go to Watchlist"
                                            : "Add to Watchlist"}</button>
                                    </div>
                                </div>

                            </li>

                        </div>
                    )

                    )}
                </ul>
            </div >) : (
                <h2>No movies found</h2>
            )}

            <div>

            </div>

        </div >
    )
}

export default MoviesList