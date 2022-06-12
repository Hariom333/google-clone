import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


function Search({ hideButton = false }) {
    const [{ }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const search = e => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input

        })

        navigate('/search')

    }

    return (
        <form className='search'>
            <div className='search_input'>
                <SearchIcon className='search_inputIcon' />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            {!hideButton ? (
                <div className='search_buttons'>
                    <button className='btn btn-default' onClick={search}>Search</button>
                </div>

            ) : (
                <div className='search_buttons'>
                    <button className='btn btn-default  buttonsHidden' onClick={search}>Search</button>
                </div>
            )}


        </form>





    )
}

export default Search