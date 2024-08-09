import React, { useState, useEffect } from 'react';
import WindowTracker from './assets/windowTracker';

export default function App() {
  
  const [toggleTracker, setTracker] = useState(true);

  function getSetWindowWidth(){
    setTracker(prevState => !prevState)
  }

  return (
    <>
    <center>
      <button onClick={getSetWindowWidth}>Toggle WindowTracker</button>
      <br/>
      {toggleTracker && <WindowTracker/>}
    </center>
      
    </>
  )
}

