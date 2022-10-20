import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router'
import '../styles/form.scss'


type Game = {
  date: string;
  players: [{name: string; goals: number; result: string;}, {name: string; goals: number; result: string;}]
}
function Form() {
    const [firstPlayer, setFirstPlayer] = useState('')
    const [firstPlayerGoals, setFirstPlayerGoals] = useState(Number)
    const [secondPlayer, setSecondPlayer] = useState('')
    const [secondPlayerGoals, setSecondPlayerGoals] = useState(Number)
    const [SubmitedTime, setSubmitedTime] = useState('')
    const [result, setResult] = useState('')
    const [secondPresult, setSecondPResult] = useState('')

    const [games, setGames] = useState([{}]);
    const navigate = useNavigate();
    let gameResult: [] = [];
    
    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       
       const oldInfo = JSON.parse(localStorage.getItem('data') || '[]');

       let gamePlayed: Game = {
           date: SubmitedTime,
           players: [
             {name: firstPlayer, goals: firstPlayerGoals, result: result},
             {name: secondPlayer, goals: secondPlayerGoals, result: secondPresult}
           ],          
        }
        
        oldInfo.push(gamePlayed)
        
        setGames([...games, gamePlayed])
        localStorage.setItem('games', JSON.stringify(games))
        console.log(games);
        
        
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
