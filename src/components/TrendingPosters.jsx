import React, { Component } from "react";
import axios from "axios";
import {withRouter} from "react-router-dom"
class TrendingPosters extends Component {
    state = {
        particularMovie: [],
    };
    handleId = async (e) => {
        const id = e.target.id;
        console.log(id);
        const res = await axios(
            `https://api.themoviedb.org/3/movie/${id}?api_key=8ca9cccd7f9d7141a09b3ba540ae73fc&language=en-US`
        );
        console.log(res.data);
        this.setState({ particularMovie: res.data });
        this.props.history.push({
            pathname: "/particular-movie",
            state: res.data,
        });
    };
    render() {
        console.log(this.props.data);
        console.log(this.state.particularMovie);

        return this.props.data === undefined ? null : (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        {this.props.data.map((p) => (
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
                                    <button id={p.id} onClick={this.handleId}>
                                        Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(TrendingPosters);
