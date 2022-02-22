import React, {useContext} from "react";
import {MovieContext} from "../context/MovieContext";
import {useForm} from "react-hook-form";
import "../styles/Form.css"

const Form = () => {
    const {insertMovie} = useContext(MovieContext);
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        insertMovie(data);
        alert('Movie is added.');
        window.location = '/';
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="exampleInputTitle1" className={"field-"}>Title</label>
                <input type="text" className="form-control" id="exampleInputTitle1" name="title"
                       placeholder="Enter title"
                       {...register("title", {required: true})}/>
                {errors.title && <p className={"field-"}>Please check the title</p>}
            </div>
            <div>
                <br/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputYear1" className={"field-"}>Year</label>
                <input type="text" className="form-control" id="exampleInputYear1" placeholder="Enter year" name="year"
                       {...register("year", {required: true, maxLength: 4})}/>
                {errors.year && <p className={"field-"}>Please check the year</p>}
            </div>
            <div>
                <br/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1" className={"field-"}>Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                          placeholder="Enter description"
                          name="description"
                          {...register("desc", {required: true})}/>
                {errors.desc && <p className={"field-"}>Please check the description</p>}
            </div>
            <div>
                <br/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputImageUrl1" className={"field-"}>Image Url</label>
                <input type="text" className="form-control" id="exampleInputImageUrl1" name="image"
                       placeholder="Enter Url"
                       {...register("image_url", {required: true})}/>
                {errors.image_url && <p className={"field-"}>Please check the imageUrl</p>}
            </div>
            <div>
                <br/>
            </div>
            <button type="submit" className="btn-lg btn-primary d-grid gap-2 col-2 mx-auto">Add</button>
        </form>
    )
}

export default Form