import React from 'react'

export default function TargetRow(props) {
  const {
    unitOptions
  } = props
  return (
    <div>
      <input type='number' className="target" placeholder="enter target value" />
      <select>
        {unitOptions.map(unit => (
            <option key={unit} value={unit}>{unit}</option>
          ))}  
      </select>
    </div>
  )
}
