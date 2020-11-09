import React from 'react'
import './scroller.sass'

export default function Scroller({text, arrow}) {
  return (
    <div className='scroller'>
      <h1>{text}</h1>
      <img src={arrow} alt="DoubleArrow" />
    </div>
  )
}