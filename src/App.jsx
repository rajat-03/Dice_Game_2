
import './App.css'
import FrontPage from './components/FrontPage'
import { useState } from 'react';
import GamePlay from './components/GamePlay';

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    // if false then true and vise-versa
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
      {
        isGameStarted ? <GamePlay /> : <FrontPage toggle={toggleGamePlay} />
      }
    </>
  )
}

export default App
