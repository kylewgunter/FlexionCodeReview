import React from 'react'

export default function TargetRow(props) {
  const {
    unitOptions,
    selectedUnit,
    onChangeUnit
  } = props

  return (
    <div>
      <input type='number' className="target" placeholder="enter students answer"  />
      <select value={selectedUnit} onChange={onChangeUnit}>
        {unitOptions.map(unit => (
            <option key={unit} value={unit}>{unit}</option>
          ))}  
      </select>
    </div>
  )
}
