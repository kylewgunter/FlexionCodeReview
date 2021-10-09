import React from 'react'

export default function InputRow(props) {
  const {
    unitOptions,
    selectedUnit,
    onChangeUnit
  } = props

  return (
    <div>
      <input type='number' className="input" placeholder="enter start value" />
      <select value={selectedUnit} onChange={onChangeUnit}>
        {unitOptions.map(unit => (
          <option key={unit} value={unit}>{unit}</option>
        ))}  
      </select>
      <h1>{console.log(onChangeUnit.props)}</h1>
    </div>
  )
}
