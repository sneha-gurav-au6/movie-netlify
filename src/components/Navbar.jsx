import React, { Component } from "react";
import "./navbar.css";
import {Link,Redirect} from "react-router-dom";
import { fetch } from "./../redux/actions/moviesDataState";
import { connect } from "react-redux";

class Navbar extends Component {
    handlechange = (e) => {
        e.preventDefault();
        const text = e.target.input.value;
        console.log(text);
        this.props.fetch(text)

    };
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#/">
                        MoviesDhishoom
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#/navbarColor01"
                        aria-controls="navbarColor01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarColor01"
                    >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link">
                                    <Link to="/" style={{ color: "white" }}>
                                        Home{" "}
                                    </Link>
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <Link
                                        to="/trending"
                                        style={{ color: "white" }}
                                    >
                                        Trending Movies
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <Link
                                        to="/tv-shows"
                                        style={{ color: "white" }}
                                    >
                                        Top TV Shows
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/">
                                    About
                                </a>
                            </li>
                        </ul>
                        {/* <form onSubmit={this.handlechange} className="form-inline  my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="text"
                                placeholder="Search"
                            />
                            <button
                                className="btn btn-secondary my-2 my-sm-0"
                                type="submit"
                            >
                                Search
                            </button>
                        </form> */}
                    </div>
                </nav>
            </div>
        );
    }
}

export default connect(null,{fetch})(Navbar);
