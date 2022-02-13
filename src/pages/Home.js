import "../styles/Home.css"
import Input from "../components/Input";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faTh} from '@fortawesome/free-solid-svg-icons'
import Card from "../components/Card";
import {useContext} from "react";
import {MovieContext} from "../context/MovieContext";
import {Link} from "react-router-dom";

const Home = () => {
    const {movies, setSearch} = useContext(MovieContext);
    var elements = document.getElementsByClassName("movies");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const listView = () => {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.width = "50%";
        }
    }

    const gridView = () => {
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.width = "100%";
        }
    }

    return (
        <div className="home-container">
            <div id="btn-container">
                <button id={"btn"} className={"btn-lg"} onClick={listView}><FontAwesomeIcon icon={faBars}/> List
                </button>
                <button id={"btn1"} className={"btn-lg"} onClick={gridView}><FontAwesomeIcon icon={faTh}/> Grid
                </button>
            </div>
            <Input handleSearch={handleSearch}/>
            <div className={"border"}/>
            {movies?.length > 0 ? (
                <div className="movies">
                    {movies?.map((movie) => {
                        console.log(movie.id);
                        return (
                            <Link
                                to={`/movie/${movie.id}`} // Detail page
                                key={movie.id}
                            >
                                <Card
                                    key={movie.id}
                                    title={movie.title}
                                    year={movie.year}
                                    image={movie.image_url}
                                />
                            </Link>
                        );
                    })}
                </div>
            ) : (
                <div className="list-group-item-warning">
                    <h3>Empty!</h3>
                </div>
            )}
        </div>
    );
};

export default Home