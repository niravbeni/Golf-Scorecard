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
import Tick from "../Svgs/Tick/Tick";
import Cross from "../Svgs/Cross/Cross";

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
                          width="20px"
                          height="20px"
                          color={isCurrentPlayer ? "white" : "black"}
                        />
                      </HammerIcon>
                    )}
                  </PlayerName>
                  {player.points.map((point, index) => {
                    const holeNumber = index + 1;
                    const hammerThrow = getHammerThrow(holeNumber);
                    const showPoints = holeNumber <= currentHole;
                    return (
                      <TableCell
                        key={index}
                        $isCurrentHole={holeNumber === currentHole}
                        $isCurrentPlayer={isCurrentPlayer}
                        $isShowPoints={showPoints}
                      >
                        {showPoints && (
                          <CellContent>
                            <PointValueContainer>
                              <PointValue>{point}</PointValue>
                            </PointValueContainer>
                            <HammerIconContainer>
                              {hammerThrow &&
                                hammerThrow.playerId === player.id &&
                                (hammerThrow.accepted ? (
                                  <Tick
                                    isFilled={true}
                                    width="17px"
                                    height="17px"
                                    color={isCurrentPlayer ? "white" : "black"}
                                  />
                                ) : (
                                  <Cross
                                    isFilled={true}
                                    width="18px"
                                    height="18px"
                                    color={isCurrentPlayer ? "white" : "black"}
                                  />
                                ))}
                            </HammerIconContainer>
                          </CellContent>
                        )}
                      </TableCell>
                    );
                  })}
                  <TotalScore $isCurrentPlayer={isCurrentPlayer}>
                    {player.points
                      .slice(0, currentHole)
                      .reduce((acc, curr) => acc + curr, 0)}
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
