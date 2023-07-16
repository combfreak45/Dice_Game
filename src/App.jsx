import { useState } from 'react'
import './App.css'
import MainWindow from './Component/MainWindow'
import Game from './Component/Game';
function App() {
  const [isGame,setIsGame] = useState(false);
 
  const change = () =>{
    setIsGame((isGame)=> !isGame)
  }
  return (
    <>
      { isGame ? <Game/> : <MainWindow change = {change}/>}
    </>
  )
}

export default App
