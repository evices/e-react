import { createStore, applyMiddleware , combineReducers} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import auth from "./auth";
import posts from './posts';


let reducers = combineReducers({auth, posts});

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default store();