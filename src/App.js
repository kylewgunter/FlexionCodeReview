import React, { useState }from 'react'
import './App.css';
import InputRow from './components/InputRow';
import TargetRow from './components/TargetRow';
import Calculator from './components/Calculator';
import convert from 'convert-units'

const temperature = convert().possibilities('temperature')
const volume = convert().possibilities('volume')

function App() {

  const [unitOptions] = useState([...Object.values(temperature), ...Object.values(volume)]);
  const [startUnit, setStartUnit] = useState(unitOptions[0]);
  const [convertUnit, setConvertUnit] = useState(unitOptions[0]);
  const [startValue, setStartValue] = useState(0)
  const [targetValue, setTargetValue] = useState(0)

  return (
    <>
      <h1>Unit Converter</h1>
      <hr></hr>
      <InputRow
        unitOptions={unitOptions} 
        selectedUnit={startUnit}
        onChangeUnit={e => setStartUnit(e.target.value)}
        onChangeValue={e => setStartValue(e.target.value)}
      />
      <div>
        <p className="subhead">Convert to</p>
      </div>
      <TargetRow 
        unitOptions={unitOptions}
        selectedUnit={convertUnit}
        onChangeUnit={e => setConvertUnit(e.target.value)}
        onChangeValue={e => setTargetValue(e.target.value)}
      />
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
