import React from 'react';
import style from "./ButtonUpdate.module.css"

const ButtonUpdate = (props) => {
    let update = () => {
        props.setBooks()
    }

    return (
        <div className={style.update} onClick={update}><i className="fas fa-sync-alt"/></div>
    )
}

export default ButtonUpdate;