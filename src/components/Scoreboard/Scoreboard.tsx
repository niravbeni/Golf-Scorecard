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
            {players.map((player) => (
              <TableRow
                key={player.id}
                $isCurrentPlayer={player.id === currentPlayer}
              >
                <PlayerName $isCurrentPlayer={player.id === currentPlayer}>
                  <PlayerNameText>{player.name}</PlayerNameText>
                  {getHammerHolderForHole(currentHole) === player.id && (
                    <HammerIcon>
                      <Hammer isFilled={true} />
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
                      $isCurrentPlayer={player.id === currentPlayer}
                    >
                      <CellContent>
                        <PointValueContainer>
                          <PointValue>{point}</PointValue>
                        </PointValueContainer>
                        <HammerIconContainer>
                          {hammerThrow && (
                            <Hammer
                              isFilled={hammerThrow.playerId === player.id}
                              width="16px"
                              height="16px"
                              color={
                                hammerThrow.playerId === player.id
                                  ? hammerThrow.accepted
                                    ? "green"
                                    : "red"
                                  : hammerThrow.accepted
                                  ? "red"
                                  : "green"
                              }
                            />
                          )}
                        </HammerIconContainer>
                      </CellContent>
                    </TableCell>
                  );
                })}
                <TotalScore>
                  {player.points.reduce((acc, curr) => acc + curr, 0)}
                </TotalScore>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Tablewrapper>
    </ScoreboardWrapper>
  );
};

export default Scoreboard;
