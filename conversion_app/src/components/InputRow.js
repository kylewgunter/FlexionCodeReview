import React from 'react'


export default function InputRow(props) {
  const {
    unitOptions
  } = props

  return (
    <div>
      <input type='number' className="input" placeholder="enter start value" />
      <select>
        {unitOptions.map(unit => (
          <option key={unit} value={unit}>{unit}</option>
        ))}  
      </select>
      
    </div>
  )
}
