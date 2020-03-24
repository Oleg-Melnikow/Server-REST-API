import React, {useState} from 'react';
import style from "./UpdateBook.module.css"

const UpdateBook = (props) => {

    const [state, setState] = useState({name: props.name, author: props.author, url: props.url})

    let update = () => {
        props.updateBook(state, props.id) || props.updateBook(state)
        props.deactivateEditMode()
    }

    let changeName = (e) => {
        setState({...state, name: e.currentTarget.value})
    }

    let changeAuthor = (e) => {
        setState({...state, author: e.currentTarget.value})
    }

    let changeUrl = (e) => {
        setState({...state, url: e.currentTarget.value})
    }

    return (
        <div>
            <div className={style.form}>
                <input type="text" placeholder="Enter name book" name="name" onChange={changeName}/><br/>
                <input type="text" placeholder="Enter author book" name="author" onChange={changeAuthor}/><br/>
                <input type="text" placeholder="Enter url for image book" name="url" onChange={changeUrl}/><br/>
            </div>
            <div className={style.icon}>
                <i onClick={update} className="fas fa-plus-square"/>
                <i onClick={props.deactivateEditMode} className="fas fa-undo-alt"/>
            </div>
        </div>
    )
}

export default UpdateBook;