import {API} from "../API/api";

export const SET_BOOKS = 'App/Reducer/SET_BOOKS'

const initialState = {
    books: []
}

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {...state, books: action.books.map(b => ({...b}))}
        default:
            return state
    }
}

export const setBooksSuccess = (books) => ({type: SET_BOOKS, books})

export const setBooks = () => async (dispatch) => {
    let books = await API.getBooks()
    dispatch(setBooksSuccess(books))
}