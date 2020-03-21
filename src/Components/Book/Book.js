import React from 'react';
import style from "./Book.module.css"

const Book = (props) => {
    return (
        <div className={style.container}>
            <div className={style.containerBook}>
                <img src={props.url} alt=""/>
                <span>{props.name}</span>
                <span>{props.author}</span>
                <div className={style.icon}>
                    <i className="fas fa-trash-alt"/>
                    <i className="fas fa-edit"/>
                </div>
            </div>
        </div>
    )
}

export default Book;