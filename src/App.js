import React, {useState} from 'react';
import './App.css';
import {connect} from "react-redux";
import {createBook, deleteBook, setBooks, updateBook} from "./Redux/bookReducer";
import Book from "./Components/Book/Book";
import ButtonUpdate from "./Components/Button/ButtonUpdate";
import UpdateBook from "./Components/UpdateForm/UpdateBook";

function App(props) {

    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
    }

    return (
        <div className="App">
            <div className="wrapperBooks">
                {props.books.map(b => <Book key={b.id} deleteBook={props.deleteBook} updateBook={props.updateBook}
                                            createBook={props.createBook}
                                            url={b.url} name={b.name} author={b.author} id={b.id}/>)}
            </div>

            {editMode
                ? <UpdateBook deactivateEditMode={deactivateEditMode} updateBook={props.createBook}/>
                : <div className="add" onClick={activateEditMode}><i className="fas fa-plus-square"/></div>
            }

            <ButtonUpdate setBooks={props.setBooks}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    books: state.books.books
})

export default connect(mapStateToProps, {setBooks, deleteBook, updateBook, createBook})(App);
