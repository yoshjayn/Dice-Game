import "./App.css";
import StartGame from "./components/startGame";
import GamePlay from "./components/GamePlay";
import { useState } from "react"; 

function App() {
  const [isStarted, setIsStarted] = useState(true);
  const toggleGamePlay =() => {
    setIsStarted((prev)=>!prev);
  };

  return(
  <>
  {
    isStarted? <GamePlay />:<StartGame toggle={toggleGamePlay} />
  }
  </>
        )
}
export default App;

