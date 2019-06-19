import React from 'react';
import './App.css'
// import components
import Album from './Album.js'

const Artist = () => {
  return(
    <div className="container">
      <h2>This is an Artist component.</h2>
      <Album />
    </div>
  )
}

export default Artist
