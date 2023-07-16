import React, { useState } from 'react'
import './Number.css'

function Number({isSelected, setIsSelected,error,setError}) {
  const arrayN = [1, 2, 3, 4, 5, 6];

  const setIsSelectedHandler = (value) =>{
    setIsSelected(value);
    setError("")
  }

  return (
    <div>
    <div className='error'>
      <p>{error}</p>
    </div>
      <div className="num">
        {arrayN.map((value, i) => {
          return (
            <div
              key={i}
              style={{
                backgroundColor: isSelected === value ? "black" : "white",
                color: isSelected === value ? "white" : "black",
              }}
              className="box"
              onClick={() => {
                setIsSelectedHandler(value);
              }}
            >
              {value}
            </div>
          );
        })}
      </div>
      <p className="pp">Select Number</p>
    </div>
  );
}


export default Number
