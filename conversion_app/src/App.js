import React from 'react'
import './App.css';
import InputRow from './components/InputRow';
import TargetRow from './components/TargetRow';

function App() {
  return (
    <>
      <h1>Unit Converter</h1>
      <hr></hr>
      <InputRow />
      <div>
        <p className="subhead">Convert to</p>
      </div>
      <TargetRow />
    </>
  );
}

export default App;
