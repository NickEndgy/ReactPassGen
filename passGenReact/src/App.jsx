import { useState, useId, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [inputValue, setInputValue] = useState('');


  useEffect(() => {
    const arrayNumber = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));

    setInputValue(arrayNumber.join(''));
    console.log(arrayNumber);
  }, [])

  function genClick() {

  }



  return (
    <>
      <input type="text" value={inputValue} readOnly />
      <button>Сгенерировать</button>
    </>
  )
}

export default App
