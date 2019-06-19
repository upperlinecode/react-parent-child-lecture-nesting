import React from 'react';
import './App.css';
// import components
import Artist from './Artist.js'

const App = () => {
  const component = new React.Component();
  component.state = {}
  
  component.render = () => {
    return (
      <div className="container">
        <h1>This is the App.</h1>
        <Artist />
      </div>
    )
  }
  
  return component
}

export default App;
