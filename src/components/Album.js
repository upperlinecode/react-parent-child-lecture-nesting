import React from 'react';
import '../App.css';
// import components
import AlbumArt from './AlbumArt.js';
import TrackList from './TrackList.js';

function Album() {
  return(
    <div className="container">
      <h3>This is the Album component.</h3>
      <AlbumArt />
      <TrackList />
    </div>
  );
}

export default Album;
