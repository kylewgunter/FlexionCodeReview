import React from 'react'

export default function TargetRow(props) {
  const {
    unitOptions,
    selectedUnit,
    onChangeUnit,
    onChangeValue
  } = props

  return (
    // accepts input as numbers only and wont let user input strings
    // on change updates the value of the input form
    <div>
      <input type='number' className='target' placeholder='enter students answer' onChange={onChangeValue} />
      <select value={selectedUnit} onChange={onChangeUnit}>
        {unitOptions.map(unit => (
            <option key={unit} value={unit}>{unit}</option>
          ))}  
      </select>
    </div>
  )
}
