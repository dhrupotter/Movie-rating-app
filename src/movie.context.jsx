import { createContext, useContext, useEffect, useState } from "react";
import { movies } from "./db/movies";

const CreateMovies = createContext([]);

export const MoviesProvider = ({ children }) => {
    const [moviesList, setMoviesList] = useState(movies)
    const [allMovies, setAllMovies] = useState(moviesList);
    const [selectedGenre, setSelectedGenre] = useState("All")
    const [selectedYear, setSelectedYear] = useState("All")
    const [starredMovies, setStarredMovies] = useState([])
    const [watchlistMovies, setWatchlistMovies] = useState([])
    useEffect(() => { setAllMovies(moviesList) }, [moviesList])
    return (
        <CreateMovies.Provider value={{ allMovies, moviesList, setMoviesList, setAllMovies, selectedGenre, setSelectedGenre, selectedYear, setSelectedYear, starredMovies, setStarredMovies, watchlistMovies, setWatchlistMovies }}>
            {children}

        </CreateMovies.Provider>
    );
};

export const usemovies = () => useContext(CreateMovies);
