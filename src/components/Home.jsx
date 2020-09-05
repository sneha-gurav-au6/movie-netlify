import React, { Component } from "react";
import SearchBox from "./SearchBox";
import "./Home.css";
import {
    TrendingMovies,
    Trending_TV_Shows,
    Top_rated_movies
} from "../redux/actions/moviesDataState";
import { connect } from "react-redux";
import TrendingPosters from "./TrendingPosters";
import TopTVShows from "./TopTVShows";
import SearchResult from './SearchResult'


class Home extends Component {
    state = {
        data: [],
    };
    async componentDidMount() {
        const data = await this.props.TrendingMovies();
        const TopTv = await this.props.Trending_TV_Shows();
        const TopMovies = await this.props.Top_rated_movies();
    }
    render() {
        console.log(this.props.top_Rated_movies);
        console.log(this.props.search_result)
        return (
            this.props.search_result ? <SearchResult />:
            <div className="">
                <SearchBox />
                <div>
                    <div className="categor ">
                        <h3 className="text-centre">Trending Movies</h3>
                    </div>
                    <div>
                        <TrendingPosters data={this.props.Trending} />
                    </div>
                    <div className="categor mt-2">
                        <h3>Top Rated TV Shows</h3>
                    </div>
                    <div>
                        <TopTVShows data={this.props.TV} />
                    </div>
                    <div className="categor mt-2">
                        <h3>Top Rated Movies</h3>
                    </div>
                    <div>
                        <TopTVShows data={this.props.top_Rated_movies} />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        Trending: state.data[0],
        TV: state.topRatedTv6[0],
        top_Rated_movies: state.TOP_RATED_Movies[0],
        search_result: state.Search_Result
    };
};
export default connect(mapStateToProps, {
    TrendingMovies,
    Trending_TV_Shows,
    Top_rated_movies,
})(Home);
