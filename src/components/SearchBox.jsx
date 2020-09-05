import React from "react";
import "./SearchBox.css";
import { fetch } from "./../redux/actions/moviesDataState";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom"
import axios from "axios"

const SearchBox = (props) => {
    const handlechange=async(e)=>{
           e.preventDefault();
           const text = e.target.input.value;
           console.log(text);
          
     

      props.history.push({ pathname: '/search-result', detail: text})
    }
    return (
      <div>
        <form onSubmit={handlechange}>
          <div className="wrapper">
            <div className="slide a">
              <div className="inner  ">
                <input
                  className="costume"
                  type="text"
                  placeholder="Search"
                  name="input"
                  style={{ padding: "10px" }}
                />
                <button className="btn btn-secondary " type="submit">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>


      </div>
    );
};

export default connect(null,{fetch})(withRouter(SearchBox));
