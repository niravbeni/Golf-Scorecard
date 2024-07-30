import { FC } from "react";
import {
  ScoreboardWrapper,
  Tablewrapper,
  Table,
  TableCell,
  TableRow,
  PlayerName,
  PlayerNameText,
  HammerIcon,
  TotalScore,
  CellContent,
  PointValue,
  TableHeaderCell,
  PointValueContainer,
  HammerIconContainer,
  RotatedHammer,
} from "./Scoreboard.styled";
import { IScoreboard } from "./Scoreboard.types";
import Hammer from "../Svgs/Hammer/Hammer";

const Scoreboard: FC<IScoreboard> = ({
  players = [],
  holes = [],
  hammerThrows = [],
  currentHole = 0,
  currentPlayer = 0,
}) => {
  const getHammerHolderForHole = (holeNumber: number) => {
    let currentHolder = 0;
    for (const throw_ of hammerThrows) {
      if (throw_.holeNumber > holeNumber) break;
      if (throw_.accepted) {
        currentHolder = currentHolder === 0 ? 1 : 0;
      } else {
        currentHolder = throw_.playerId;
      }
    }
    return currentHolder;
  };

  const getHammerThrow = (holeNumber: number) => {
    return hammerThrows.find(
      (currentThrow) => currentThrow.holeNumber === holeNumber
    );
  };

  return (
    <ScoreboardWrapper>
      <Tablewrapper>
        <Table>
          <thead>
            <tr>
              <TableHeaderCell $isCurrentHole={false}>Player</TableHeaderCell>
              {holes.map((hole) => (
                <TableHeaderCell
                  key={hole.holeNumber}
                  $isCurrentHole={hole.holeNumber === currentHole}
                >
                  {hole.holeNumber}
                </TableHeaderCell>
              ))}
              <TableHeaderCell $isCurrentHole={false}>Total</TableHeaderCell>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => {
              const isCurrentPlayer = player.id === currentPlayer;
              return (
                <TableRow key={player.id} $isCurrentPlayer={isCurrentPlayer}>
                  <PlayerName $isCurrentPlayer={isCurrentPlayer}>
                    <PlayerNameText>{player.name}</PlayerNameText>
                    {getHammerHolderForHole(currentHole) === player.id && (
                      <HammerIcon>
                        <Hammer
                          isFilled={true}
                          color={isCurrentPlayer ? "white" : "black"}
                        />
                      </HammerIcon>
                    )}
                  </PlayerName>
                  {player.points.map((point, index) => {
                    const holeNumber = index + 1;
                    const hammerThrow = getHammerThrow(holeNumber);
                    return (
                      <TableCell
                        key={index}
                        $isCurrentHole={holeNumber === currentHole}
                        $isCurrentPlayer={isCurrentPlayer}
                      >
                        <CellContent>
                          <PointValueContainer>
                            <PointValue>{point}</PointValue>
                          </PointValueContainer>
                          <HammerIconContainer>
                            {hammerThrow && (
                              <RotatedHammer>
                                <Hammer
                                  isFilled={hammerThrow.playerId === player.id}
                                  width="16px"
                                  height="16px"
                                  color={isCurrentPlayer ? "white" : "black"}
                                />
                              </RotatedHammer>
                            )}
                          </HammerIconContainer>
                        </CellContent>
                      </TableCell>
                    );
                  })}
                  <TotalScore $isCurrentPlayer={isCurrentPlayer}>
                    {player.points.reduce((acc, curr) => acc + curr, 0)}
                  </TotalScore>
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      </Tablewrapper>
    </ScoreboardWrapper>
  );
};

export default Scoreboard;
