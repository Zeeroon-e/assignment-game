
import React, { useState } from 'react'
import '../styles/search.scss'
function Search() {
    const [searchedValue, setSearchedValue] = useState('');
    const [searchByResult, setSearchByResult] = useState('');
    
    let data: any = JSON.parse(localStorage.getItem('games') || '[]')
    
    
    function toggledBtn(event) {
      if (event.target.checked) {

        console.log('button is checked');
        setSearchByResult('won')

      } else {
        
        console.log('button is unchecked');
        setSearchByResult('lost')
      }
      
    }
    console.log(searchByResult);
    
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
    
    
  return (
    <div className='search-container'>
      <section className='search-section'>
        <input type="text"  onChange={(e) => setSearchedValue(e.target.value)}/>

        <label className='switch'>
          <input type="checkbox" value={searchByResult} onClick={toggledBtn}/>
          <span className='slider round'></span>
        </label>
        
        <button className='src-btn' onClick={searchBtn}>Search</button>
        

      </section>
      <section className='display-section'>
        {data.filter((val) => {
        if (searchedValue == '') {
          return val
        }
        else if (val.fname.includes(searchedValue) || val.sname.includes(searchedValue) ) {
          
          if (val.fname.includes(searchedValue) && val.fresult.includes(searchByResult)) {
            return val
            
          }
          if (val.sname.includes(searchedValue) && val.sresult.includes(searchByResult)) {
            return val
            
          }
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
