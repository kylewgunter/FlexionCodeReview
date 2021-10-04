import React, { useState, useEffect }from 'react'
import './App.css';
import InputRow from './components/InputRow';
import TargetRow from './components/TargetRow';
import Calculator from './components/Calculator';
import convert from 'convert-units'

const temperature = convert().possibilities('temperature')
const volume = convert().possibilities('volume')

function App() {

  const [unitOptions, setUnitOptions] = useState([]);
  const [fromUnit, setFromUnit] = useState();
  const [toUnit, setToUnit] = useState();

  // console.log(typeof(unitOptions))//object

  useEffect (() => {
    setUnitOptions([...Object.values(temperature), ...Object.values(volume)]);
    console.log(typeof(unitOptions))
    const unit = Object.keys(unitOptions)

    // setFromUnit(Object.values(firstUnit))
    // setToUnit(Object.values(toUnit))
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
