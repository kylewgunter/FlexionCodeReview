import React, { useState } from 'react'
import convert from 'convert-units'

export default function Calculator(props) {
  const {
    unitOptions,
    startUnit,
    convertUnit,
    startValue,
    targetValue
  } = props
  
  const calculate = () => {
    try {
      const convertedValue = convert(parseInt(startValue)).from(startUnit).to(convertUnit).toFixed(2);
      console.log(convertedValue, typeof(convertedValue))
      if(convertedValue === targetValue){
        window.alert('Correct!')
      } else {
        window.alert('Incorrect!')
      }
    } catch (error) {
      if(error){
        window.alert('Invalid!')
      }
    }
  }

  return (
    <div>
      <button className='button' onClick={calculate}>Calculate</button>
    </div>
  )
}