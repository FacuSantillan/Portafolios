import { useState, useEffect } from 'react'

import Landing from './views/landing/landing';


import './App.css'
import Information from './views/information/information';

function App() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(false);
    }, 6000);
    return () => clearTimeout(timeout); 
  }, []);

  return (
    <div className='init'>
      {showText ? (

        <Landing/>

      ) : (

      <Information/>
      )}

    </div>
  )
}

export default App
