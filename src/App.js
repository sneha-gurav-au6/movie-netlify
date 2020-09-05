import React from "react";
import "bootswatch/dist/lux/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import TrendingPage from "./components/TrendingPage";
import Home from "./components/Home";
import TopTVShows from "./components/TopTVShows";
import ParticularMovie from "./components/ParticularMovie";
import SearchResult from "./components/SearchResult"

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/trending" component={TrendingPage} />
                <Route exact path="/tv-shows" component={TopTVShows} />
                <Route exact path="/particular-movie" component={ParticularMovie} />
                <Route exact path="/search-result" component={SearchResult}/>
            </Switch>
        </div>
    );
};
export default App;
