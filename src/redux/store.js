import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk"
import movieDataReducer from "./reducers/moviesDataReducer"
const store = createStore(movieDataReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;
