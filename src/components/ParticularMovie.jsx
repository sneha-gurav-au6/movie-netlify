import React, { Component } from "react";
import "./ParticularMovie.css"
class ParticularMovie extends Component {
    render() {
        console.log(this.props.history.location.state);
        return (
            <div className="container-fluid row">
                <div className="col-md-1"></div>
                <div className="col-md-10 mt-2  main">
                    {/* <div
                        style={{
                            backgroundImage:
                                "url(" +
                                "https://image.tmdb.org/t/p/w220_and_h330_face/" +
                                this.props.history.location.state.poster_path +
                                ")",
                            width: "400px",
                            height: "100%",
                        }}
                    ></div> */}
                    <img
                        src={
                            "https://image.tmdb.org/t/p/w220_and_h330_face/" +
                            this.props.history.location.state.poster_path
                        }
                        className="card-img-top im"
                        alt="..."
                    />
                    <div className="text">
                        <h2 style={{"color":"white"}}><strong>
                            {this.props.history.location.state.original_title}
                        </strong>
                           
                        </h2>
                        <h5 style={{ "color": "red" }}>{this.props.history.location.state.tagline}</h5>
                        <div className="box1">Original_language :{this.props.history.location.state.original_language} </div>
                        <div className="box1">Popularity :{this.props.history.location.state.popularity}</div>
                        <div className="box1">release_date:{this.props.history.location.state.release_date}</div>
                        <div className="box1">revenue:{this.props.history.location.state.revenue}</div>
                        <div className="box1">vote_average:{this.props.history.location.state.vote_average}</div>
                        <h6 style={{ "color": "gray" ,"padding-top":"15px" }}>{this.props.history.location.state.overview}</h6>

                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        );
    }
}

export default ParticularMovie;
