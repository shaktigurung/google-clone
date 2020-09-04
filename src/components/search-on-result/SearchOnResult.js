import React, { useState } from 'react';
import './SearchOnResult.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import ClearIcon from '@material-ui/icons/Clear';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { actionTypes } from '../../context/reducer';

function SearchOnResult() {
    const [ state, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const history = useHistory();

    const search = e => {
        e.preventDefault();
        console.log("you just searched", input);
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        });
        history.push('/search');
    };

    const clearInput = e => {
        e.preventDefault();
        setInput("");
    }

    return (
        <form className="search">
            <div className="search__input">
                <input value={input} onChange={ e => setInput(e.target.value)} />
                { input ? (<div className="search__inputIconClear"> <ClearIcon onClick={clearInput}  /> </div> ) : ""}
                <MicIcon className="search__inputIcon" />
                <SearchIcon className="search__inputIcon" />
            </div>      
        </form>
    )
}

export default SearchOnResult;
