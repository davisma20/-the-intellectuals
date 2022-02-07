import React, { useState } from 'react';

function SearchBar (props){
    const [state, setState] = useState('');
    
    const searchChangeHandler = (e) => {
        setState({search: e.target.value})
    };
    return(
        <div>
            <input
            className = "searchBarInput "
            placeholder="Search Rant Videos"
            value={console.log(state.search)}
            onChange={searchChangeHandler}
            />
        </div>
        ); 
    }

export default SearchBar;




