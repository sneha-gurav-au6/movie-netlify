import axios from "axios";
import config from "../../config";
import Spinner from '../../components/Spinner'

export const TrendingMovies = () => async (dispatch) => {
    try {
        const baseUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${config.API_key}`;

        const res = await axios.get(baseUrl);
        const modified = res.data.results.splice(0, 6);
       
        dispatch({ type: "TRENDING_VIDEOS", payload: modified });
    } catch (error) {
        console.log(error);
    }
};

export const Trending_TV_Shows = () => async (dispatch) => {
    try {
        const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${config.API_key}&language=en-US&page=1`;
        const res = await axios.get(url);
        console.log(res.data)
        const modified6 = res.data.results.splice(0, 6);
        dispatch({ type: "TOP_RATED_TV", payload: res.data.results });
        dispatch({ type: "TOP_RATED_TV6", payload: modified6 });
    } catch (error) {
        console.log(error.message);
    }
};
export const Top_rated_movies = ()=>async (dispatch)=>{
    try {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${config.API_key}&language=en-US&page=1`;
        const res = await axios.get(url);
        const modified6 = res.data.results.splice(0, 6);
        dispatch({ type: "TOP_RATED_Movies", payload: modified6 });

        console.log(res.data);
    } catch (error) {
        console.log(error.message);
        
    }
}

// import { TEXT_MOVIE } from "../reducers/actionType";
// import axios from "axios"
export const fetch = userSearch => async (dispatch) => {
    console.log(userSearch)
    const data = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=9fdea44b51c5793a8b94bc08a8a283bb&language=en-US&query=${userSearch}&page=1&include_adult=false`
    );
console.log(data.data.results)

    // dispatch({ type: "Search_Result", payload: data.data.results})

};