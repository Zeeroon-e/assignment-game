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
    const [games, setGames] = useState({});
    const navigate = useNavigate();
    let gameResult: [] = [];
    
    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       console.log(firstPlayer);
       

       let gamePlayed = [{
           firstplayer: firstPlayer,
           firstplayergoals: firstPlayerGoals,
           secondplayer: secondPlayer,
           secondplayergoals: secondPlayerGoals,
           result: result,
           date: SubmitedTime         
        }]
        
        /* gameResult.push(gamePlayed) */
        console.log(games);
        
        
        localStorage.setItem(SubmitedTime, JSON.stringify(gamePlayed))
        console.log(gameResult);
        
    }

    useEffect(() => {
        if (firstPlayerGoals > secondPlayerGoals) {
          let difference = firstPlayerGoals - secondPlayerGoals;
          setResult(firstPlayer + ' won the game by: ' + difference + ' Point. ' + 'Result: ' + firstPlayerGoals + '-' + secondPlayerGoals)
        } else {
          let difference = secondPlayerGoals - firstPlayerGoals;
          setResult(secondPlayer + ' won the game by: ' + difference + ' Point. ' + 'Result: ' + secondPlayerGoals + '-' + firstPlayerGoals)
       } 
        if (firstPlayerGoals == secondPlayerGoals) {
          setResult('The game ended up in a tie')
        }
    })

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
