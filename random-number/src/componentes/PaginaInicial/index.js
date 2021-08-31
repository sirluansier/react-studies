import React, { useState } from 'react';
import './style.css';

export default function PaginaInicial() {
  const [ randomNumber, setRandomNumber ] = useState(1);

  function generateNumber() {
    const newNumber = Math.floor(Math.random() * (100-1) + 1);
    setRandomNumber(newNumber);
  }

  return(
    <div className="center-content">
        <h3>Random Number:</h3>
        <h1>{ randomNumber }</h1>
        
        <div className='btn-area'>
          <label>
            Click on the button to generate a random number:
          </label>
          
          <button onClick={ generateNumber }>
            Generate number
          </button>
        </div>
      </div>
  );
}

