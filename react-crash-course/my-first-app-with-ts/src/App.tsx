import React from 'react';
import './App.css';
import ContinuousAssessment2 from './components/CA2/ContinuousAssessment2'
import CreateUser from './components/CA2/CreateUser'
import HelloWorld8 from './components/HelloWorld8';

const App: React.FC = () => {
  return (
    <div className="Container">
      <div className="Column1">
        <HelloWorld8 />
      </div>
      <div className="Column2">
        <ContinuousAssessment2 />
      </div>
      <div className="Column3">
        <CreateUser />
      </div>
    </div>
    );
}

export default App;