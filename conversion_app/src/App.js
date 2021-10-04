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
  // console.log(unitOptions)

  useEffect (() => {
    setUnitOptions([...Object.values(temperature), ...Object.values(volume)]);
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
        {/* <p> {console.log(temperatures)} </p> */}
      </div>
      <TargetRow 
      unitOptions={unitOptions}
      />
      <Calculator />
    </>
  );
}

export default App;
