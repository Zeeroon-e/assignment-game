import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useNavigate } from 'react-router'
import '../styles/search.scss';
function Search() {
    const [searchedValue, setSearchedValue] = useState('');
    const [searchByResult, setSearchByResult] = useState('');
    const [latest, setLatest] = useState(false);

    let data: any = JSON.parse(localStorage.getItem('games') || '[]')
    const [testData, setTestData] = useState(data);
    

    
    const navigate = useNavigate();
    
    

     let filteredData = data.filter((val: any ) => {
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
     })

     
    function toggledBtn(event: any) {
      if (event.target.checked) {

        console.log('won');
        setSearchByResult('won')
        

      } else {

        console.log('lost');
        setSearchByResult('lost')
      }
      
    }

    function latestBtn() {
      console.log('btnclicked');
      if (latest == false) {
        setLatest(true)
        
      } else if (latest == true) {
        const size = 10;
        const newData = filteredData.slice(0,size)
        setTestData(newData)
        setLatest(false)
        
      }
      
    }

    function SearchButton() {
      
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
        <p> u must search name first and then <br /> toggle between the colors! <br /> then press search to update your search! <br /> 🟩 = won <br /> 🟥 = lost </p>
        <label className='switch'>
          <input type="checkbox" value={searchByResult} onClick={toggledBtn}/>
          <span className='slider round'></span>
        </label>
        <label htmlFor="latest">10 Latest</label> 
        <input type="checkbox" name="latest" id="latestTen" onClick={latestBtn} />
        <button >10 latest </button>
        <button onClick={SearchButton}>Search </button>
        
        

      </section>
      <section className='display-section'>
        {testData ? (
            testData.map((item: {date: string; fname:string; sname: string; fgoals: number; sgoals: number; fresult: string; sresult: string;}) => (
              <p key={uuidv4()}> Date Played <br /> {item.date} <br />{item.fname} vs {item.sname} <br /> {item.fgoals} | {item.sgoals} <br /> {item.fresult} | {item.sresult} <br />  </p>            
        ))): 'Please search to get data'}
      </section>
    </div>
  </>
  )
}

export default Search
