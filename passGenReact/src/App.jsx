import { useState, useId, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [inputValue, setInputValue] = useState('');


  function genStart() {

    // Создаем массивы, 3 пустых, 2 с буквами

    const arrayNumber = []
    const arrayLetters = [];
    const arrayLettersTop = []
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const alphabetTop = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');


    // Создаем массив, который будет создавать 5 букв, 5 строчных букв и 5 заглавных
    for (let i = 0; i < 5; i++) {
      arrayNumber.push(Math.floor(Math.random() * 10));
      arrayLetters.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
      arrayLettersTop.push(alphabetTop[Math.floor(Math.random() * alphabetTop.length)]);
    }

    // Объединяем 3 массива в один
    const arrayAll = [...arrayNumber, ...arrayLetters, ...arrayLettersTop];

    // Перемешиваем цифры и буквы в массиве
    arrayAll.sort(() => Math.random() - 0.5);

    // Переносим в input массив, который мы перевели в строку
    setInputValue(arrayAll.join(''))

  }
  return (
    <>
      <input type="text" value={inputValue} readOnly />
      <button onClick={genStart}>Сгенерировать</button>
    </>
  )
}

export default App
