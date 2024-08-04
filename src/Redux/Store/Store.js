import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { AuthReducer } from "../Auth/AuthReducer";
import { thunk } from "redux-thunk";
import { UserReducer } from "../User/UserReducer";
import { PostReducer } from "../Post/PostReducer";
import { SearchReducer } from "../Search/Reducer";
import { CommentReducer } from "../Comment/Reducer";


const rootReducers = combineReducers({
    auth:AuthReducer,
    user:UserReducer,
    post:PostReducer,
    search:SearchReducer,
    comment:CommentReducer
})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk)); 
