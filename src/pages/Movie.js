import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../Data.json";
import { Link } from "react-router-dom";

function Movie(props) {
    const params = useParams();
    const [movie] = useState(Data[params.id - 1]);

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center text-center text-light">
            <div className="blur">
                <img src={movie.image} alt={movie.title} />
                <h1>{movie.title}</h1>
                <h2>Director: {movie.director}</h2>
                <ul>
                    <span className="fs-3">Stars:</span>
                    {movie.stars.map((star) => {
                        return <li>{star}</li>;
                    })}
                </ul>
                <p>{movie.description}</p>
            </div>
            <Link className="decoration text-light" to={`/`}>
                <button type="button" className="btn btn-dark">
                    Return
                </button>
            </Link>
        </div>
    );
}

export default Movie;
