import React from 'react';
import './App.css'
import HelloWorld8 from './components/HelloWorld8';
import ContinuousAssessment from './components/CA2/ContinuousAssessment';

const App = () => {
  return (
    <div className = "Container">
      <div className = "Column1">
        <HelloWorld8 />
      </div>
      <div className = "Column2">
        <ContinuousAssessment />
      </div>
    </div>
  );
}

export default App;