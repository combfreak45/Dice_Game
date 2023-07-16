import React from 'react'
import './Button.css'
function Button({text,change}) {
  return (
    <div >
      <button onClick={change}>{text}</button>
    </div>
  )
}

export default Button
