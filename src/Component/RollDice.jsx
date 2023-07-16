import React, { useState } from 'react'
import './RollDice.css'
const RollDice = ({ isDice, randomDice }) => {
  return (
    <div className="dice">
      <div onClick={randomDice}>
        <img
          src={`/images/dice_${isDice}.png`}
          alt="dice"
          style={{ height: "15rem", width: "15rem" }}
        />
      </div>
      <p>Click on Dice to roll</p>
    </div>
  );
};

export default RollDice
