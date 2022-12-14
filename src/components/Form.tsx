import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router'
import '../styles/form.scss'



function Form() {
    const [firstPlayer, setFirstPlayer] = useState('')
    const [firstPlayerGoals, setFirstPlayerGoals] = useState(Number)
    const [secondPlayer, setSecondPlayer] = useState('')
    const [secondPlayerGoals, setSecondPlayerGoals] = useState(Number)
    const [SubmitedTime, setSubmitedTime] = useState('')
    const [result, setResult] = useState('')
    const [secondPresult, setSecondPResult] = useState('')
    const [staticGames, setStaticGames] = useState([{
      date: '2022-10-18T14:56' ,
      fname: 'adam',
      fgoals: 3,
      fresult: 'won',
      sname: 'robert',
      sgoals: 2,
      sresult: 'lost',
      id: 0
    },

    {
      date: '2022-10-18T14:56' ,
      fname: 'robert',
      fgoals: 6,
      fresult: 'lost',
      sname: 'adam',
      sgoals: 8,
      sresult: 'won',
      id: 1  
    },
    {
      date: '2022-11-28T14:56' ,
      fname: 'chia',
      fgoals: 6,
      fresult: 'won',
      sname: 'adam',
      sgoals: 3,
      sresult: 'lost',
      id: 2  
    },
    {
      date: '2022-10-18T14:56' ,
      fname: 'chia',
      fgoals: 6,
      fresult: 'lost',
      sname: 'robert',
      sgoals: 9,
      sresult: 'won',
      id: 3  
    },
    {
      date: '2022-10-01T14:56' ,
      fname: 'ahmed',
      fgoals: 6,
      fresult: 'lost',
      sname: 'robert',
      sgoals: 9,
      sresult: 'won',
      id: 4  
    },
    {
      date: '2022-10-18T14:56' ,
      fname: 'ulf',
      fgoals: 1,
      fresult: 'lost',
      sname: 'johan',
      sgoals: 2,
      sresult: 'won',
      id: 5
    },

    {
      date: '2022-10-05T14:56' ,
      fname: 'chia',
      fgoals: 6,
      fresult: 'lost',
      sname: 'ulf',
      sgoals: 8,
      sresult: 'won',
      id: 6  
    },
    {
      date: '2022-10-22T14:56' ,
      fname: 'ahmed',
      fgoals: 6,
      fresult: 'won',
      sname: 'johan',
      sgoals: 3,
      sresult: 'lost',
      id: 7  
    },
    {
      date: '2022-10-19T14:56' ,
      fname: 'ahmed',
      fgoals: 6,
      fresult: 'lost',
      sname: 'chia',
      sgoals: 9,
      sresult: 'won',
      id: 8  
    },
    {
      date: '2022-10-14T14:56' ,
      fname: 'ulf',
      fgoals: 6,
      fresult: 'lost',
      sname: 'adam',
      sgoals: 9,
      sresult: 'won',
      id: 9  
    },
  ]);

    const navigate = useNavigate();
    
    let newIdNumber = 9;

    function idGene() {
      
      newIdNumber++;

      staticGames.map(user => {
        if (user.id == newIdNumber) {
          newIdNumber++;
        } else {
          return newIdNumber;
        }
      });
      return newIdNumber;
    }
    
    let games: any = JSON.parse(localStorage.getItem('games') || '[]');
    
    if (games == '') {
      localStorage.setItem('games', JSON.stringify(staticGames))
    }
     
    
    type GameInterface = {
      date: string
      fname: string
      fgoals: number
      fresult: string
      sname: string
      sgoals: number
      sresult: string
      id: number
    }
    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       
       

       let gamePlayed: GameInterface = {

          date: SubmitedTime,
          fname: firstPlayer, 
          fgoals: firstPlayerGoals,
          fresult: result,
          sname: secondPlayer, 
          sgoals: secondPlayerGoals, 
          sresult: secondPresult,
          id: newIdNumber        
        }
        let games: any = JSON.parse(localStorage.getItem('games') || '[]');
        // setStaticGames([...staticGames , gamePlayed])
        games.push(gamePlayed)
        // localStorage.setItem('games', JSON.stringify(games))
        localStorage.setItem('games', JSON.stringify(games))
        
    }

    useEffect(() => {
      
        if (firstPlayerGoals > secondPlayerGoals) {
          setResult('won')
        } else {
          setResult('lost')
        }
        if (secondPlayerGoals > firstPlayerGoals) {
          setSecondPResult('won')
        }
        else {
          setSecondPResult('lost')
        }  
        if (secondPlayerGoals == firstPlayerGoals) {
          setSecondPResult('tie')
          setResult('tie')
        }
    });

  return (
    <>
    <div className='btn-container'>
      <button onClick={() => navigate('/result')}>Search Saved Data</button>
    </div>
    
    <form onSubmit={submitForm} className='form-container'>
        
        <label htmlFor="">Player 1</label>
        <input type="text" placeholder='Name' value={firstPlayer} onChange={(e) => setFirstPlayer(e.target.value)} required/>
        <input type="number" placeholder='first player goals' value={firstPlayerGoals} onChange={(e) => setFirstPlayerGoals(e.target.valueAsNumber)} required/>
        <label htmlFor="">Player 2</label>
        <input type="text" placeholder='Name' value={secondPlayer} onChange={(e) => setSecondPlayer(e.target.value)} required/>
        <input type="number" placeholder='second player goals' value={secondPlayerGoals} onChange={(e) => setSecondPlayerGoals(e.target.valueAsNumber)} required/>
        <label htmlFor="">Date</label>
        <input type={'datetime-local'} value={SubmitedTime} onChange={(e) => setSubmitedTime(e.target.value)} required/>
        <button className='play-btn'>Save Result</button>
    </form>
    </>
  )
}

export default Form
