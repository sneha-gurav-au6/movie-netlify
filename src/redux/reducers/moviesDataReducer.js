const initialState = {
    data: [],
    topRatedTv: [],
    topRatedTv6:[],
    TOP_RATED_Movies:[],
    Search_Result:null
};

const movieDataReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "TRENDING_VIDEOS":
            return { ...state, data: [...state.data, payload] };
        case "TOP_RATED_TV":
            return { ...state, topRatedTv: [...state.topRatedTv, payload] };
        case "TOP_RATED_TV6":
            return { ...state, topRatedTv6: [...state.topRatedTv6, payload] };
        case "TOP_RATED_Movies":
            return { ...state, TOP_RATED_Movies: [...state.TOP_RATED_Movies, payload] };
        case "Search_Result":
            console.log(payload)
            return { ...state, Search_Result:payload}    
        default:
            return state;
    }
};

export default movieDataReducer;
