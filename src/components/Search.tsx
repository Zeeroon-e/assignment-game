import { stringify } from 'querystring';
import React, { useState } from 'react'
import '../styles/search.scss'
function Search() {
    const [searchedValue, setSearchedValue] = useState('');
    
    
    
    
    
    
  return (
    <div className='search-container'>
      <section className='search-section'>
        <input type="text"  onChange={(e) => setSearchedValue(e.target.value)}/>
        <select id="">
            <option value=""></option>
        </select>

      </section>
      <section className='display-section'>
        
      </section>
    </div>
  )
}

export default Search
