import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from   'redux-thunk'

// Reducer
const reducer=combineReducers({

})
// middleware
const middleware=[thunk]

// create store

const store=createStore(reducer,applyMiddleware(...middleware))



export default store