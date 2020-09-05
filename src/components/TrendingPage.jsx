import React, { Component } from "react";
import config from "../config";
import axios from "axios";
import "./TrendingPage.css";
import img from "../img/mv5.jpg";
class TrendingPage extends Component {
    state = {
        data: null,
    };
    async componentDidMount() {
        const baseUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${config.API_key}`;

        const res = await axios.get(baseUrl);
        this.setState({ data: res.data.results });
    }
    render() {

        return this.state.data !== null ? (
            <div className="container-fluid ">
                <div className="row">
                    {this.state.data.map((p) => (
                        <div className="col-md-2 mx-auto col-sm-4">
                            <div className="card ">
                                <img
                                    src={
                                        "https://image.tmdb.org/t/p/w220_and_h330_face/" +
                                        p.poster_path
                                    }
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div
                                    className="card-body"
                                    style={{
                                        background: "rgba(0,0,0.7,0.6)",
                                        height: "40px",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <h5
                                        className="card-title"
                                        style={{
                                            fontWeight: "bold",
                                            color: "white",
                                        }}
                                    >
                                        {p.title}
                                    </h5>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">
                                        Release Date: {p.release_date}
                                    </small>
                                </div>
                                <button>Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ) : (
            <h1>Loading</h1>
        );
    }
}

export default TrendingPage;
