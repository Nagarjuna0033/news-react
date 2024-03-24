import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        India News
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="About">
                                    Link
                                </Link>
                            </li> */}

                            <Link to="Entertainment" className="nav-link">
                                Entertainment
                            </Link>
                            <Link to="Sports" className="nav-link">
                                Sports
                            </Link>
                            <Link to="Business" className="nav-link">
                                Business
                            </Link>
                            <Link to="Health" className="nav-link">
                                Health
                            </Link>
                            <Link to="Science" className="nav-link">
                                Science
                            </Link>
                            <Link to="Technology" className="nav-link">
                                Technology
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
