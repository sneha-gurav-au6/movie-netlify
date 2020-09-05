import React, { Component } from "react";
import config from "../config";
import axios from "axios";
import "./SearchResult.css";
import img from "../img/mv5.jpg";
import Spinner from './Spinner'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";



class SearchResult extends Component {
   state={
       data:null
   }


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
        const name = this.props.history.location.detail
        // console.log(name)
      

    axios(
        `https://api.themoviedb.org/3/search/movie?api_key=9fdea44b51c5793a8b94bc08a8a283bb&language=en-US&query=${name}&page=1&include_adult=false`
    ).then((data)=>{
        // console.log(data.data.results)
        this.setState({ data: data.data.results })
    }).catch((error)=>{
        console.log(error)
    })
    // console.log(this.props.history.location.detail)
   
        return this.state.data !== null ? (
            <div className="container-fluid ">
                <div className="row">
                    {this.state.data.map((p) => (
                        <div className="col-md-2 mx-auto col-sm-4">
                            <div className="card ">

                                <img style={{"height":"200px"}}
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
                                <button onClick={this.handleId} id={p.id}>Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>):(
                <Spinner/>
                // <h1>Loading</h1>
            )
        
    }
}

const mapStateToProps=(state)=>{
    return { data: state.Search_Result}
}

export default connect(mapStateToProps)(withRouter(SearchResult));
