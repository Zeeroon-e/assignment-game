import { stringify } from 'querystring';
import React, { useState } from 'react'
import '../styles/search.scss'
function Search() {
    const [searchedValue, setSearchedValue] = useState('');
    
    let arrayOfKeys = Object.keys(localStorage)
    let arrayOfValues = Object.values(localStorage)
    
    console.log(searchedValue);
    console.log(arrayOfValues[0]);
    
    
    
  return (
    <div className='search-container'>
      <section className='search-section'>
        <input type="text"  onChange={(e) => setSearchedValue(e.target.value)}/>
        <select id="">
            <option value=""></option>
        </select>

      </section>
      <section className='display-section'>
        {arrayOfValues.filter((val) => {
            if (searchedValue == '') {
                return val
            } else if(val.includes(searchedValue)){
                return val
            }

        }).map(val =>(
            <div key={val} >
                <p>{val}</p>
                
            </div>
        ))}
      </section>
    </div>
  )
}

export default Search
