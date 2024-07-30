import { ButtonWrapper } from "./App.styles";

import { useState } from "react";

import { data } from "./constants/data";

import Button from "./components/Button/Button";
import Scoreboard from "./components/Scoreboard/Scoreboard";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [currentHole, setCurrentHole] = useState(1);

  const handlePlayerToggle = () => {
    setCurrentPlayer((currentPlayer + 1) % data.players.length);
  };

  const handleHoleChange = () => {
    setCurrentHole((prevHole) => {
      const nextHole = prevHole + 1;
      return nextHole > data.holes.length ? 1 : nextHole;
    });
  };
  return (
    <>
      <ButtonWrapper>
        <Button onClick={handlePlayerToggle}>Toggle Player</Button>
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
