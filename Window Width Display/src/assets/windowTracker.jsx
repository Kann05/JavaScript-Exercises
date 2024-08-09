import React, { useState, useEffect } from 'react';
import App from '../App';

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function resizeChecker() {
            console.log('setting up')
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', resizeChecker)
        
        
        return () => {
            window.removeEventListener('resize', resizeChecker)
        }
    }, )
   
  return (
    <>
        {<h1>Window width: {windowWidth}</h1> }   
    </>
      
    )
}

