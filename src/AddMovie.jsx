
import React, { useState } from 'react';
import { usemovies } from './movie.context';


const AddMovie = () => {
    const { setMoviesList, setAllMovies } = usemovies()
    const [movieData, setMovieData] = useState({
        title: '',
        year: 2023,
        genre: [],
        rating: 0,
        director: "",
        writer: '',
        cast: [],
        summary: "",
        imageUrl: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMovieData({
            ...movieData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted data:', movieData);
        setMoviesList((prev) => ([...prev, { ...movieData, id: Math.floor(Math.random() * 100000) + 1 }]))
        // setAllMovies((prev) => ([...prev, { ...movieData, id: Math.floor(Math.random() * 100000) + 1 }]))
    };


    return (
        <div>
            <h2>Add new Product</h2>
            <form onSubmit={handleSubmit}>
                <br />
                <label>
                    Title:
                    <div>
                        <input
                            type="text"
                            name="title"
                            value={movieData.title}
                            onChange={handleInputChange}
                        />
                    </div>
                </label>
                <br />
                <label>
                    Year:
                    <div>
                        <input
                            type="number"
                            name="year"
                            value={movieData.year}
                            onChange={handleInputChange}
                        />
                    </div>
                </label>
                <br />
                <label>
                    Genre:
                    <div>
                        <textarea
                            type="text"
                            name="genre"
                            value={movieData.genre}
                            onChange={handleInputChange}
                        />
                    </div>
                </label>
                <br />
                <label>
                    Rating:
                    <div>
                        <input
                            type="number"
                            name="rating"
                            value={movieData.rating}
                            onChange={handleInputChange}
                        />
                    </div>
                </label>
                <br />
                <label>
                    Director:
                    <div>
                        <input
                            type="text"
                            name="director"
                            value={movieData.director}
                            onChange={handleInputChange}
                        />
                    </div>
                </label>
                <br />
                <label>
                    Writer:
                    <div>
                        <input
                            type="text"
                            name="writer"
                            value={movieData.writer}
                            onChange={handleInputChange}
                        />
                    </div>
                </label>
                <br />
                <label>
                    Cast:
                    <div>
                        <input
                            type="text"
                            name="cast"
                            value={movieData.cast}
                            onChange={handleInputChange}
                        />
                    </div>
                </label>
                <br />
                <label>
                    Summary:
                    <div>
                        <input
                            type="text"
                            name="summary"
                            value={movieData.summary}
                            onChange={handleInputChange}
                        />
                    </div>
                </label>
                <br />
                <label>
                    Image URL:
                    <div>
                        <input
                            type="text"
                            name="imageUrl"
                            value={movieData.imageUrl}
                            onChange={handleInputChange}
                        />
                    </div>
                </label>
                <br />
                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
};


export default AddMovie