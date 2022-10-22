
import React, { useState } from 'react'
import '../styles/search.scss'
function Search() {
    const [searchedValue, setSearchedValue] = useState('');
    
    let data: any = JSON.parse(localStorage.getItem('games') || '[]')
    
    
    function searchBtn (){
    

      
      /* data.filter((val) => {
        if (searchedValue == '') {
          return val
        }
        else if (val.fname.includes(searchedValue) || val.sname.includes(searchedValue) ) {
          return val
        }
      }).map(item => {
        console.log(item);
      }) */
      // let searchedArray = data.find(({fname, sname}) => fname || sname == searchedValue)
 
      // console.log(data);
      
    }
    
    
    console.log(searchedValue);
    
    
  return (
    <div className='search-container'>
      <section className='search-section'>
        <input type="text"  onChange={(e) => setSearchedValue(e.target.value)}/>
        <button className='src-btn' onClick={searchBtn}></button>
        

      </section>
      <section className='display-section'>
        {data.filter((val) => {
        if (searchedValue == '') {
          return val
        }
        else if (val.fname.includes(searchedValue) || val.sname.includes(searchedValue)) {
          return val
          
        }
      }).map(item => (
        <p> Date Played <br /> {item.date} <br />{item.fname} vs {item.sname} <br /> {item.fgoals} | {item.sgoals} <br /> {item.fresult} | {item.sresult} </p>
      ))}
      </section>
    </div>
  )
}

export default Search
