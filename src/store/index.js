import { createStore, applyMiddleware , combineReducers} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import auth from "./auth";
import posts from "./posts"
import categories  from "./categories";
import checkAuth from './checkAuth';
import reservation from './reservation'


let reducers = combineReducers({auth,posts,checkAuth,categories,reservation});

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default store();