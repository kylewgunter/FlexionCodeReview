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
  const [startUnit, setStartUnit] = useState(unitOptions[0]);
  const [convertUnit, setConvertUnit] = useState(unitOptions[0]);
  // const [studentAnswer, setStudentAnswer] = useState()

  console.log(unitOptions)
  console.log(startUnit, typeof(startUnit))
  console.log(convertUnit, typeof(convertUnit))

  // convert function from convert units
  // convert(1).from('l').to('ml');

  

  // const onChange = (e) => {

  // };

  useEffect (() => {


  }, [unitOptions])

  return (
    <>
      <h1>Unit Converter</h1>
      <hr></hr>
      <InputRow
        unitOptions={unitOptions} 
        selectedUnit={startUnit}
        onChangeUnit={e => setStartUnit(e.target.value)}
      />
      <div>
        <p className="subhead">Convert to</p>
      </div>
      <TargetRow 
        unitOptions={unitOptions}
        onChangeUnit={e => setConvertUnit(e.target.value)}
      />
      <Calculator unitOptions={unitOptions}
        selectedUnit={convertUnit}
      />
    </>
  );
}

export default App;
