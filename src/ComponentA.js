import React from 'react';
import './App.css'
// import components
import ComponentB from './ComponentB.js'

function ComponentA() {
  return(
    <div className="container">
      <h2>This is Component A.</h2>
      <ComponentB />
    </div>
  )
}

export default ComponentA
