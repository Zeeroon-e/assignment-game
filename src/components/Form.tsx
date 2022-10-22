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

    const navigate = useNavigate();
    let games: any = JSON.parse(localStorage.getItem('games') || '[]');
    type GameInterface = {
      date: string
      fname: string
      fgoals: number
      fresult: string
      sname: string
      sgoals: number
      sresult: string
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
          sresult: secondPresult        
        }
        
        games.push(gamePlayed)
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
