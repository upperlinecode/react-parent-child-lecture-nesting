import React from 'react';
import './App.css';
// import components
import ComponentA from './Components/ComponentA.js'

function App() {
  const component = new React.Component();
  component.state = {}
  
  return (
    <div class="container">
      <h1>This is the App.</h1>
      <ComponentA />
    </div>
  );
}

export default App;
