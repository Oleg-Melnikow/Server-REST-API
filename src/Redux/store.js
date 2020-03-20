import { createStore, applyMiddleware, combineReducers } from "redux"
import {bookReducer} from "./bookReducer"
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
    books: bookReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export default store