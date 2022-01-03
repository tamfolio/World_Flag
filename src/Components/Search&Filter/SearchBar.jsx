import React from 'react'
import './SearchBar.css'

function SearchBar() {
    return (
        <div className="search_and_filter">
            <div className="search">
            <input 
            type="text"
            placeholder='Search for a Country'
            name='SearchBar'
            className='SearchBox'
            />
            </div>
            <div className="filter_box">
            <select className="filter">
              <option value="" >Filter by Region</option>
            </select>
            </div>
            </div>
    )
}

export default SearchBar
