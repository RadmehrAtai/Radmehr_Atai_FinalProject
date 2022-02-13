import "../styles/Detail.css"
import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {MovieContext} from "../context/MovieContext";
import FormDialog from "../components/FormDialog";
import Button from "@mui/material/Button";
import * as React from "react";

const Detail = () => {
    let {id} = useParams();
    const {showDetail, selectedMovie, deleteMovie, updateMovie} = useContext(MovieContext);
    const [updatedMovie, setUpdatedMovie] = useState({});
    const [bool, setBool] = useState(false);

    const getMovieInfo = (e, field) => {
        setUpdatedMovie({
            ...updatedMovie,
            [field]: e.target.value,
        });
    };

    const submitUpdate = (e) => {
        e.preventDefault();
        console.log(updatedMovie);
        updateMovie(updatedMovie, id);
        console.log("Movie is updated.");
        setBool(true);
    }

    useEffect(() => {
        showDetail(id);
    }, [bool]);

    const handleDelete = (e) => {
        e.preventDefault();
        if (window.confirm("Do you want to delete a movie?")) {
            deleteMovie(id);
            alert("Movie is deleted.")
            window.location = '/';
        }
    }

    useEffect(() => {
        showDetail(id);
    }, []);

    return (
        <div className="detail-container">
            <div className="poster">
                <img src={selectedMovie.image_url} alt={selectedMovie.title}/>
            </div>
            <div className="info">
                <div className="field">
                    <div className="label">
                        <p className="title label-p">{selectedMovie.title}</p>
                    </div>
                </div>
                <div className="field">
                    <div className="label">
                        Year: <p className="label-p">{selectedMovie.year}</p>
                    </div>
                </div>
                <div className="field">
                    <div className="label">
                        <p className="label-p">{selectedMovie.description}</p>
                    </div>
                </div>
            </div>
            <div className={"d-inline gap-1 col-2 mx-auto"}>
                <FormDialog handleUpdate={submitUpdate} getInfo={getMovieInfo} bool={bool}/>
                <Button variant={"contained"} color={"error"} onClick={handleDelete}>Delete</Button>
            </div>
        </div>
    )
}

export default Detail