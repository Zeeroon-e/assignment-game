
import React, { useState } from 'react'
import '../styles/search.scss'
function Search() {
    const [searchedValue, setSearchedValue] = useState('');
    
    
    
    
    console.log(searchedValue);
    
    
  return (
    <div className='search-container'>
      <section className='search-section'>
        <input type="text"  onChange={(e) => setSearchedValue(e.target.value)}/>
        

      </section>
      <section className='display-section'>
        
      </section>
    </div>
  )
}

export default Search
