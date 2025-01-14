import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-contents">
            <h2>Dalbo Cunto</h2>
            <p>Ka dooro Cuntooyin Yaala Websitekeena</p>
            <button>
                <Link to="/allfoods">Dalbo Cunto</Link>
            </button>
        </div>
        <div className="whatsapp">
            +252 614459166
        </div>
    </div>
  )
}

export default Hero