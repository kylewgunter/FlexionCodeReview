import React from 'react'

export default function InputRow(props) {
  const {
    unitOptions,
    selectedUnit,
    onChangeUnit,
    onChangeValue
  } = props

  return (
    // accepts input as numbers only and wont let user input strings
    <div>
      <input type='number' className='input' placeholder='enter start value' onChange={onChangeValue} />
      <select value={selectedUnit} onChange={onChangeUnit}>
        {unitOptions.map(unit => (
          <option key={unit} value={unit}>{unit}</option>
        ))}  
      </select>
    </div>
  )
}
