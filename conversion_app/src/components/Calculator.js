import React from 'react'
import convert from 'convert-units'

export default function Calculator() {

  // const {
  //   unitOptions,
  //   startValue,
  //   convertValue
  // } = props

  // const calculate = () => {
  //   convert(unitOptions).from('unit').to('unit')
  // }

  const calculate = () => {
    window.alert('Correct - Incorrect - Invalid')
   }

  return (
    <div>
      <button className='button' onClick={calculate}>Calculate</button>
    </div>
  )
}

// onClick={calculate}