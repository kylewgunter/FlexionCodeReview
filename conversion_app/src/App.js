import React, { useState, useEffect }from 'react'
import './App.css';
import InputRow from './components/InputRow';
import TargetRow from './components/TargetRow';
import Calculator from './components/Calculator';
import convert from 'convert-units'
// import configureMeasurements, { temperature, volume } from 'convert-units';

// const convert = configureMeasurements({
//   temperature,
//   volume
// });

const temperature = convert().possibilities('temperature')
const volume = convert().possibilities('volume')

function App() {

  const [unitOptions] = useState([...Object.values(temperature), ...Object.values(volume)]);
  const [fromUnit, setFromUnit] = useState();
  const [toUnit, setToUnit] = useState();

  console.log(unitOptions)

  useEffect (() => {
    // setUnitOptions([...Object.values(temperature), ...Object.values(volume)])
    // setFromUnit = () => {
    
    // }
  }, [])

  return (
    <>
      <h1>Unit Converter</h1>
      <hr></hr>
      <InputRow
        unitOptions={unitOptions}
      />
      <div>
        <p className="subhead">Convert to</p>
      </div>
      <TargetRow 
        unitOptions={unitOptions}
      />
      <Calculator />
    </>
  );
}

export default App;
