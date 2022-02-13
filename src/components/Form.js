import React, {useContext, useState} from "react";
import {MovieContext} from "../context/MovieContext";
import "../styles/Form.css"

const Form = () => {
    const {insertMovie} = useContext(MovieContext);
    const [newMovie, setNewMovie] = useState({});

    const addNewMovie = (e, field) => {
        setNewMovie({
            ...newMovie,
            [field]: e.target.value,
        });
    };

    const submitMovie = (e) => {
        e.preventDefault();
        insertMovie(newMovie);
        alert('Movie is added.')
    };

    return (
        <form onSubmit={submitMovie}>
            <div className="form-group">
                <label htmlFor="exampleInputTitle1" className={"field-"}>Title</label>
                <input type="text" className="form-control" id="exampleInputTitle1" name="title"
                       placeholder="Enter title" onChange={(e) => addNewMovie(e, "title")}/>
            </div>
            <div>
                <br/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputYear1" className={"field-"}>Year</label>
                <input type="text" className="form-control" id="exampleInputYear1" placeholder="Enter year" name="year"
                       onChange={(e) => addNewMovie(e, "year")}/>
            </div>
            <div>
                <br/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1" className={"field-"}>Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                          placeholder="Enter description"
                          name="description" onChange={(e) => addNewMovie(e, "desc")}/>
            </div>
            <div>
                <br/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputImageUrl1" className={"field-"}>Image Url</label>
                <input type="text" className="form-control" id="exampleInputImageUrl1" name="image"
                       placeholder="Enter Url" onChange={(e) => addNewMovie(e, "image_url")}/>
            </div>
            <div>
                <br/>
            </div>
            <button type="submit" className="btn-lg btn-primary d-grid gap-2 col-3 mx-auto">Add</button>
        </form>
    )
}

export default Form