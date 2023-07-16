import React from 'react'
import './TotalScore.css'
function TotalScore({isResult}) {
  return (
    <div className='cont'>
      <h1>{isResult}</h1>
      <p>Total Score</p>
    </div>
  )
}

export default TotalScore
