import {API} from "../API/api";

export const SET_BOOKS = 'App/bookReducer/SET_BOOKS';
export const DELETE_BOOK = 'App/bookReducer/DELETE_BOOKS'
export const UPDATE_BOOK = 'App/bookReducer/UPDATE_BOOK'
export const ADD_BOOK = 'App/bookReducer/ADD_BOOK'

const initialState = {
    books: []
}

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return {...state, books: action.books.map(b => ({...b}))}
        case ADD_BOOK:
            return {...state, books: [...state.books, action.book]}
        case DELETE_BOOK:
            return {...state, books: state.books.filter(b => b.id !== action.bookId)}
        case UPDATE_BOOK:
            return {
                ...state,
                books: state.books.map(b => {
                    if (b.id === action.bookId) {
                        return {
                            ...b, b: action.book
                        }
                    } else return b
                })
            }
        default:
            return state
    }
}

export const setBooksSuccess = (books) => ({type: SET_BOOKS, books})
export const createBookSuccess = (book) => ({ type: ADD_BOOK, book })
export const deleteBookSuccess = (bookId) => ({type: DELETE_BOOK, bookId})
export const updateBookSuccess = (bookId, book) => ({type: UPDATE_BOOK, bookId, book})

export const setBooks = () => async (dispatch) => {
    let books = await API.getBooks()
    dispatch(setBooksSuccess(books))
}

export const deleteBook = (bookId) => async (dispatch) => {
    let book = await API.deleteBook(bookId)
    dispatch(deleteBookSuccess(book))
    dispatch(setBooks())
}

export const updateBook = (book, bookId) => async (dispatch) => {
    await API.updateBook(book, bookId)
    dispatch(updateBookSuccess(book, bookId))
    dispatch(setBooks())
}

export const createBook = (bookBody) => async (dispatch) => {
    let book = await API.addBook(bookBody)
    dispatch(createBookSuccess(book))
}