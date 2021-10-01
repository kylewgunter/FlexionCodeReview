import React, { useState, useEffect }from 'react'
import './App.css';
import InputRow from './components/InputRow';
import TargetRow from './components/TargetRow';
import convert from 'convert-units'
import { volume, temperature } from 'units-converter';


const temperatures = convert().possibilities('temperature')
const volumes = convert().possibilities('volume')

function App() {

  const [tempOptions, setTempOptions] = useState([]);
  const [volumeOptions, setVolumeOptions] = useState([]);

  useEffect (() => {
    setTempOptions([console.log(Object.keys(temperatures)), console.log(...Object.values(temperatures))]);
    setVolumeOptions([console.log(Object.keys(volumes)), console.log(...Object.values(volumes))]);
  }, [])

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
      {/* <Calculator /> */}
    </>
  );
}

export default App;
