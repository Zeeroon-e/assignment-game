import './App.css'
import {Routes, Route} from 'react-router-dom';
import PlayGameView from './Views/PlayGameView'
import ResultView from './Views/ResultView';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PlayGameView/>}/>
        <Route path='/result' element={<ResultView/>}/>

      </Routes>
    </div>
  )
}

export default App
