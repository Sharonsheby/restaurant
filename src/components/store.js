import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restReducer } from "../reducers/restReducers";
import Restaurant from "./Restaurant";

// Reducer
const reducer = combineReducers({
    restaurantReducer:restReducer
}); //more than recducers will come..combine reducers is used for combines the reducers

// middleware
const middleware = [thunk];

// create store

const store = createStore(reducer, applyMiddleware(...middleware)); //spread operators  we can add multiple operators

export default store;
