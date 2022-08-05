import React from "react";
import Data from "../Data.json";
import { Link } from "react-router-dom";

function home(props) {
    return (
        <div className="container text-center">
            <main>
                <h1 className="text-light m-5">Catalog</h1>
                <section className="d-flex flex-wrap justify-content-center">
                    {Data.map((movie) => {
                        return (
                            <Link
                                className="decoration text-light"
                                to={`/movie/${movie.id}`}
                            >
                                <article className="m-3" key={movie.title}>
                                    <img src={movie.image} alt={movie.title} />
                                    <h2 className="m-3 cursor fs-3">
                                        {movie.title}
                                    </h2>
                                </article>
                            </Link>
                        );
                    })}
                </section>
            </main>
        </div>
    );
}

export default home;
