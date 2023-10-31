import { useState, useEffect } from 'react'
import style from './landing.module.css'

function Landing() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(false);
    }, 3000);
    return () => clearTimeout(timeout); 
  }, []);

  return (
    <div className={style.init}>
      {showText ? (
        <h1  style={{ fontFamily: 'Titillium Web, sans-serif', textAlign: 'center', color: 'color:#ffffff;' }}>
          <h1  style={{ fontSize: '3rem', fontWeight: 'normal' }}>Welcome to:</h1>
        </h1>
      ) : (
        <h1  style={{fontFamily: 'Titillium Web, sans-serif', textAlign: 'center', color: 'color:#ffffff;' }}>Facundo Santillan <h2 className={style.h2}>Portafolios</h2> </h1>
      )}

    </div>
  )
}

export default Landing
