import { FC } from "react";

import { ScoreboardWrapper } from "./Scoreboard.styled";
import { IScoreboard } from "./Scoreboard.types";

const Scoreboard: FC<IScoreboard> = ({
  players = [],
  // holes = [],
  hammerThrows = [],
}) => {
  return (
    <ScoreboardWrapper>
      <div className="Scoreboard">
        <h2>Scoreboard</h2>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={index}>
                <td>{player.name}</td>
                <td>{player.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Hammer Throws</h2>
        <table>
          <thead>
            <tr>
              <th>PlayerID</th>
              <th>Hole</th>
              <th>Accepted?</th>
              <th>Won?</th>
            </tr>
          </thead>
          <tbody>
            {hammerThrows.map((h, index) => (
              <tr key={index}>
                <td>{h.playerId}</td>
                <td>{h.holeNumber}</td>
                <td>{h.accepted ? "YES" : "NO"}</td>
                <td>{h.won ? "YES" : "NO"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ScoreboardWrapper>
  );
};

export default Scoreboard;
