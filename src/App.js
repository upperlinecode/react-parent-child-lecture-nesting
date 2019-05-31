import React from 'react';
import './App.css';
// import components
import ComponentA from './ComponentA.js'

const App = () => {
  const component = new React.Component();
  component.state = {}
  
  return (
    <div className="container">
      <h1>This is the App.</h1>
      <ComponentA />
    </div>
  );
}

export default App;
