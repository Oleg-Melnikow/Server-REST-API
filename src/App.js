import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {deleteBook, setBooks} from "./Redux/bookReducer";
import Book from "./Components/Book/Book";
import ButtonUpdate from "./Components/Button/ButtonUpdate";

function App(props) {
    return (
        <div className="App">
            <div className="wrapperBooks">
                {props.books.map(b => <Book key={b.id} deleteBook={props.deleteBook} url={b.url} name={b.name} author={b.author} id={b.id}/>)}
            </div>
            <ButtonUpdate setBooks={props.setBooks}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
  books: state.books.books
})

export default connect(mapStateToProps, {setBooks, deleteBook})(App);
