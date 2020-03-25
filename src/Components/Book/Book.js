import React, {useState} from 'react';
import style from "./Book.module.css"
import BookForm from "../Form/BookForm";

const Book = (props) => {

    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
    }

    let deleteBook = () => {
        props.deleteBook(props.id)
    }

    return (
        <div className={style.container}>
            {editMode
                ? <BookForm deactivateEditMode={deactivateEditMode} changeBook={props.updateBook} url={props.url}
                            name={props.name} author={props.author} id={props.id}/>
                : <div className={style.containerBook}>
                    <img src={props.url} alt=""/>
                    <span>{props.name}</span>
                    <span>{props.author}</span>
                    <div className={style.icon}>
                        <i className="fas fa-trash-alt" onClick={deleteBook}/>
                        <i className="fas fa-edit" onClick={activateEditMode}/>
                    </div>
                </div>}
        </div>
    )
}

export default Book;