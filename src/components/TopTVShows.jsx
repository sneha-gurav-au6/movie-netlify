import React, { Component } from 'react'

class TopTVShows extends Component {
   
    componentDidMount(){

    }
    render() {
         console.log(this.props.data);
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
                                            {p.name}
                                        </h5>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">
                                            Release Date: {p.first_air_date}
                                        </small>
                                    </div>
                                    <button>Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default TopTVShows
