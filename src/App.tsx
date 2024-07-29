import "./App.css";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import { data } from "./constants/data";

function App() {
  return (
    <>
      <Scoreboard {...data} />
    </>
  );
}

export default App;
