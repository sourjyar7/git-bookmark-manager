import React from 'react';
import './searchBar.css';
import { FaSearch } from 'react-icons/fa';

const SearchBar = (props) => {
    return ( 
       <div className="container my-4">
            <div className="input-group md-form form-sm form-2 pl-0">
            <div className="input-group-append">
                <span className="input-group-text amber lighten-3" id="basic-text1"><FaSearch className="text-grey" aria-hidden="true"/></span>
            </div>
            <input className="form-control my-0 py-1 amber-border" type="text" placeholder={props.placeholder} aria-label="Search"/>
            </div>
      </div>
     );
}
 
export default SearchBar;