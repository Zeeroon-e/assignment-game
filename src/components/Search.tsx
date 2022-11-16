import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useNavigate } from 'react-router'
import '../styles/search.scss';
function Search() {
    const [searchedValue, setSearchedValue] = useState('');
    const [searchByResult, setSearchByResult] = useState('');
    
    const navigate = useNavigate();
    let data: any = JSON.parse(localStorage.getItem('games') || '[]')
    
    
    function toggledBtn(event: any) {
      if (event.target.checked) {

        console.log('button is checked');
        setSearchByResult('won')

      } else {

        console.log('button is unchecked');
        setSearchByResult('lost')
      }
      
    }

    if (data) {
      data.sort((a: any, b: any) => {
        if (a.date < b.date) {
          return 1
        } else if (a.date > b.date) {
            return -1;
        } else {
            return 0;
        }
      })
    }
    
    
    
  return (
  <>
    <div className='btn-container'>
      <button onClick={() => navigate('/')}>Add new game</button>
    </div>
    <div className='search-container'>
      <section className='search-section'>
        <input type="text" placeholder='Search for player name' onChange={(e) => setSearchedValue(e.target.value)}/>
        <p> u must search name first and then <br /> toggle between the colors! <br /> 🟩 = won <br /> 🟥 = lost </p>
        <label className='switch'>
          <input type="checkbox" value={searchByResult} onClick={toggledBtn}/>
          <span className='slider round'></span>
        </label>
        <button>10 latest </button>
        
        

      </section>
      <section className='display-section'>
        {data.filter((val: any) =>{
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
            
          }
        }).map((item: any ) => (
          <p key={uuidv4()}> Date Played <br /> {item.date} <br />{item.fname} vs {item.sname} <br /> {item.fgoals} | {item.sgoals} <br /> {item.fresult} | {item.sresult} <br />  </p>
          ))}
      </section>
    </div>
  </>
  )
}

export default Search
