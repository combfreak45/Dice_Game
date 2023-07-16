import React from 'react'
import Button from './Button'
import './MainWindow.css'
function MainWindow({change}) {
  return (
    <div className='main_w'>
      <div>
        <img src="images/dices.png" alt="dices"  style={{height: "40rem"}}/>
      </div>
      <div>
        <h1>Dice Game</h1>
        <div className='bt'>
        <Button text="Play Now" change = {change}/>
        </div>
      </div>
    </div>
  );
}

export default MainWindow
