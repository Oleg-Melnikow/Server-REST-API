import React from 'react';
import './App.css';
import {connect} from "react-redux";

function App(props) {
    return (
        <div className="App">
            {props.books.map(b => <p>{b.name}</p>)}

        </div>
    );
}

const mapStateToProps = (state) => ({
  books: state.books.books
})

export default connect(mapStateToProps, {})(App);
