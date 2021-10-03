import React, { useState, useEffect }from 'react'
import './App.css';
import InputRow from './components/InputRow';
import TargetRow from './components/TargetRow';
import Calculator from './components/Calculator';
// import convert from 'convert-units'
import configureMeasurements, { volume, temperature } from 'convert-units';


const convert = configureMeasurements({
  volume,
  temperature
});

function App() {

  const unitOptions = useState
  // const [tempOptions, setTempOptions] = useState([]);
  // console.log(tempOptions)

  // useEffect (() => {
  //   setTempOptions([...Object.values(temperatures)])
  // }, [])

  return (
    <>
      <h1>Unit Converter</h1>
      <hr></hr>
      <InputRow />
      <div>
        <p className="subhead">Convert to</p>
        {/* <p> {console.log(temperatures)} </p> */}
      </div>
      <TargetRow />
      <Calculator />
    </>
  );
}

export default App;
