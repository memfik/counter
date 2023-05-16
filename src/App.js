import React, { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0)
  const onClickPlus=()=>{
    setCount(count + 1)
  }
  const onClickMinus=()=>{
    setCount(count - 1)
  }
  const onClickNull=()=>{
    setCount(0)
  }
  return (
    <div className="App">
      <div className='counter'>
        <h2>Счётчик:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className='minus'> - Минус</button>
        <button onClick={onClickNull} className='null'> Сбросить</button>
        <button onClick={onClickPlus} className='plus'>Плюс +</button>
      </div>
    </div>
  );
}

export default App;
