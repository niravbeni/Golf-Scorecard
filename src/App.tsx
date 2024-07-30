import { useState } from "react";

import { ButtonWrapper } from "./App.styles";
import { data } from "./constants/data";

import Button from "./components/Button/Button";
import Scoreboard from "./components/Scoreboard/Scoreboard";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [currentHole, setCurrentHole] = useState(9);

  const handlePlayerToggle = () => {
    setCurrentPlayer((prevPlayer) => (prevPlayer + 1) % data.players.length);
  };

  const handleHoleChange = () => {
    setCurrentHole((prevHole) => (prevHole % data.holes.length) + 1);
  };
  return (
    <>
      <ButtonWrapper>
        <Button onClick={handlePlayerToggle}>
          Toggle Player : {currentPlayer + 1}
        </Button>
        <Button onClick={handleHoleChange}>Toggle Hole : {currentHole} </Button>
      </ButtonWrapper>
      <Scoreboard
        {...data}
        currentHole={currentHole}
        currentPlayer={currentPlayer}
      />
    </>
  );
}

export default App;
