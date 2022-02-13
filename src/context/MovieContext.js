import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const MovieContext = createContext();

const Axios = axios.create({
    baseURL: 'http://localhost/server/',
});

const MovieApp = ({children}) => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedMovie, setSelectedMovie] = useState('');

    const getMovies = async () => {
        if (search === '') {
            const list = await Axios.get(`movie-all.php`);
            setMovies(list.data);
            console.log(list.data);
        } else {
            const searchMovie = await Axios.post(`movie-search.php`, {
                value: search,
            });
            setMovies(searchMovie.data);
            console.log(searchMovie.data);
        }
    };

    useEffect(() => {
        getMovies(search);
    }, [search]);

    const insertMovie = async (newMovie) => {
        const insert = await Axios.post(`movie-add.php`, {
            title: newMovie.title,
            year: newMovie.year,
            desc: newMovie.desc,
            image_url: newMovie.image_url
        });
        console.log(insert.data);
    };

    const showDetail = async (id) => {
        const movie = await Axios.post(`movie-get.php`, {
            id: id,
        });
        setSelectedMovie(movie.data);
        console.log(movie.data);
    }

    const deleteMovie = async (id) => {
        const deleteMovie = await Axios.post(`movie-delete.php`, {
            id: id,
        });
        console.log(deleteMovie.data);
    }

    const updateMovie = async (movie, id) => {
        const upMovie = await Axios.put(`movie-update.php`, {
            title: movie.title,
            year: movie.year,
            desc: movie.desc,
            id: id,
        });
        console.log(upMovie.data);
    }

    return (
        <MovieContext.Provider
            value={{
                movies,
                setSearch,
                insertMovie,
                updateMovie,
                deleteMovie,
                selectedMovie,
                showDetail
            }}
        >
            {children}
        </MovieContext.Provider>
    )
}

export default MovieApp