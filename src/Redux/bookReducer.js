import {API} from "../API/api";

export const SET_BOOKS = 'App/Reducer/SET_BOOKS';
export const DELETE_BOOK = 'App/Reducer/DELETE_BOOKS'

const initialState = {
    books: []
}

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {...state, books: action.books.map(b => ({...b}))}
        case DELETE_BOOK:
            return {...state, books: state.books.filter(b => b.id !== action.bookId)}
        default:
            return state
    }
}

export const setBooksSuccess = (books) => ({type: SET_BOOKS, books})
export const deleteBookSuccess = (bookId) => ({ type: DELETE_BOOK, bookId })

export const setBooks = () => async (dispatch) => {
    let books = await API.getBooks()
    dispatch(setBooksSuccess(books))
}

export const deleteBook = (bookId) => async (dispatch) => {
    let book = await API.deleteBook(bookId)
    dispatch(deleteBookSuccess(book))
    dispatch(setBooks())
}