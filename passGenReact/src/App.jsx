import { useState, useId, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [inputValue, setInputValue] = useState('');


  function genStart() {

    const arrayNumber = []
    const arrayLetters = [];
    const arrayAll = [];


    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    console.log(alphabet);

    for (let i = 0; i < 5; i++) {

      arrayNumber.push(Math.floor(Math.random() * 10));



      arrayLetters.push(alphabet[Math.floor(Math.random() * alphabet.length)])

      console.log()

    }
    console.log(arrayNumber);

    console.log(arrayLetters);

    arrayAll.push(arrayNumber);
    arrayAll.push(arrayLetters);

    console.log(arrayAll)


    setInputValue(arrayAll.join(''));

  }





  return (
    <>
      <input type="text" value={inputValue} readOnly />
      <button onClick={genStart}>Сгенерировать</button>
    </>
  )
}

export default App
