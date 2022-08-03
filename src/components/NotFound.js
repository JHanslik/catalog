import React from "react";
import { Link } from "react-router-dom";

function NotFound(props) {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <img
                src="https://img.buzzfeed.com/buzzfeed-static/static/2016-02/1/11/enhanced/webdr07/anigif_enhanced-21255-1454345675-2.gif"
                alt="travolta 404"
            />
            <Link className="decoration text-light m-5" to={`/`}>
                <button type="button" className="btn btn-dark">
                    Return
                </button>
            </Link>
        </div>
    );
}

export default NotFound;
