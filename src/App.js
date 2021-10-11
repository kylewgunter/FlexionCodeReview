import React, { useState }from 'react'
import './App.css';

import InputRow from './components/InputRow';
import TargetRow from './components/TargetRow';
import Calculator from './components/Calculator';

import convert from 'convert-units'

const temperature = convert().possibilities('temperature')
const volume = convert().possibilities('volume')

function App() {
  // state functions that will update with teachers input
  const [unitOptions] = useState([...Object.values(temperature), ...Object.values(volume)]);
  const [startUnit, setStartUnit] = useState(unitOptions[0]);
  const [convertUnit, setConvertUnit] = useState(unitOptions[0]);
  const [startValue, setStartValue] = useState(0)
  const [targetValue, setTargetValue] = useState(0)

  return (
    <>
      <h1>Unit Converter</h1>
      <hr></hr>
      {/* input row that accepts start unit and value when updated as props to components */}
      <InputRow
        unitOptions={unitOptions} 
        selectedUnit={startUnit}
        onChangeUnit={e => setStartUnit(e.target.value)}
        onChangeValue={e => setStartValue(e.target.value)}
      />
      <div>
        <p className="subhead">Convert to</p>
      </div>
      {/* target row that accepts start unit and value when updated as props to componeents */}

      <TargetRow 
        unitOptions={unitOptions}
        selectedUnit={convertUnit}
        onChangeUnit={e => setConvertUnit(e.target.value)}
        onChangeValue={e => setTargetValue(e.target.value)}
      />
      {/* takes all values from inputs and compares them versus a strict equals and submits a window alert */}
      <Calculator 
      unitOptions={unitOptions}
      startUnit={startUnit}
      convertUnit={convertUnit}
      startValue={startValue}
      targetValue={targetValue}
      />
    </>
  );
}

export default App;