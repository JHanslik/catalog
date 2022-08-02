import React from "react";
import Data from "../Data.json";
import { Link } from "react-router-dom";

function home(props) {
    return (
        <div className="container d-flex flex-column align-items-center justify-content-center my-5 text-center">
            <header className="mb-5">
                <h1 className="text-light">Catalog</h1>
            </header>
            <main className="m-5">
                <ul className="p-0">
                    {Data.map((movie) => {
                        console.log(movie);
                        return (
                            <li className="m-3 cursor" key={movie.title}>
                                <Link
                                    className="decoration text-light"
                                    to={`/movie/${movie.id}`}
                                >
                                    {movie.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </main>
        </div>
    );
}

export default home;
