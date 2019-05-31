import React from 'react';
import './App.css'
// import components
import ComponentC from './ComponentC.js'
import ComponentD from './ComponentD.js'

function ComponentB() {
  return(
    <div className="container">
      <h3>This is Component B.</h3>
      <ComponentC />
      <ComponentD />
    </div>
  )
}

export default ComponentB
