import React from 'react'
import { useState } from 'react'
import TotalScore from './TotalScore'
import Number from './Number'
import RollDice from './RollDice'
import './Game.css'
import Button from './Button'
function Game() {
  const [isSelected, setIsSelected] = useState();
  const [isDice, setIsDice] = useState(1);
  const [isResult,setIsResult] = useState(0);
  const [error,setError] = useState();
  const [rule,setRule] = useState(false);

  const randomGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const randomDice = () => {
    const diceValue = randomGenerator(1, 7);
    if(!isSelected){
      setError("You have not selected any number");
      return;
    }
    setIsDice((prev) => diceValue);


    if(isSelected=== diceValue){
      setIsResult((prev)=> prev+ diceValue)
    }
    else{
      setIsResult((prev) => prev -2);
    }

    setIsSelected(undefined)
  };
  
  const resetScore = () =>{
    setIsResult(0)
  }
  return (
    <div>
      <div className="conti">
        <TotalScore isResult={isResult} />
        <Number
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          error={error}
          setError={setError}
        />
      </div>
      <div>
        <RollDice isDice={isDice} randomDice={randomDice} />
      </div>
      <div className="btn">
        <button onClick={resetScore}>Reset Scores</button>
        <button onClick={()=>setRule(!rule)}>{ rule ? 'Hide': 'Show' }Rules</button>
      </div>
      {rule && (
        <div className="rules">
          <h1>How to play dice game</h1>
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>
            after click on dice if selected number is equal to dice number you
            will get same point as dice
          </p>
          <p>if you get wrong guess then 2 point will be dedcuted </p>
        </div>
      )}
    </div>
  );
}

export default Game
