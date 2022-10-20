
import React, { useState } from 'react'
import '../styles/search.scss'
function Search() {
    const [searchedValue, setSearchedValue] = useState('');
    
    let data = JSON.parse(localStorage.getItem('games') || '[]')
    
    
    function searchBtn (){
      console.log(data);


      data.map( x =>{
        console.log(x.includes(searchedValue));
        
        
      })
      
    }
    
    
    console.log(searchedValue);
    
    
  return (
    <div className='search-container'>
      <section className='search-section'>
        <input type="text"  onChange={(e) => setSearchedValue(e.target.value)}/>
        <button onClick={searchBtn}></button>
        

      </section>
      <section className='display-section'>
        
      </section>
    </div>
  )
}

export default Search
