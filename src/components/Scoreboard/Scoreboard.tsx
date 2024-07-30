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

import { WHITE, BLACK, GREEN, RED } from "../../constants/colours";

import { IScoreboard } from "./Scoreboard.types";
import { IHammerThrows, IPlayer } from "../../constants/data";

import Hammer from "../Svgs/Hammer/Hammer";
import Tick from "../Svgs/Tick/Tick";
import Cross from "../Svgs/Cross/Cross";

const Scoreboard: FC<IScoreboard> = ({
  players,
  holes,
  hammerThrows,
  currentHole,
  currentPlayer,
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

  const renderTableHeader = () => {
    return (
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
    );
  };

  const renderPlayerRow = (player: IPlayer) => {
    const isCurrentPlayer = player.id === currentPlayer;
    return (
      <TableRow key={player.id} $isCurrentPlayer={isCurrentPlayer}>
        {renderPlayerNameCell(player, isCurrentPlayer)}
        {renderPointCells(player, isCurrentPlayer)}
        {renderTotalScore(player, isCurrentPlayer)}
      </TableRow>
    );
  };

  const renderPlayerNameCell = (player: IPlayer, isCurrentPlayer: boolean) => {
    return (
      <PlayerName $isCurrentPlayer={isCurrentPlayer}>
        <PlayerNameText>{player.name}</PlayerNameText>
        {getHammerHolderForHole(currentHole) === player.id && (
          <HammerIcon>
            <Hammer
              isFilled={true}
              width="20px"
              height="20px"
              color={isCurrentPlayer ? WHITE : BLACK}
            />
          </HammerIcon>
        )}
      </PlayerName>
    );
  };

  const renderPointCells = (player: IPlayer, isCurrentPlayer: boolean) => {
    return player.points.map((point, index) => {
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
          {showPoints && renderCellContent(point, hammerThrow, player)}
        </TableCell>
      );
    });
  };

  const renderCellContent = (
    point: number,
    hammerThrow: IHammerThrows | undefined,
    player: IPlayer
  ) => {
    return (
      <CellContent>
        <PointValueContainer>
          <PointValue>{point}</PointValue>
        </PointValueContainer>
        <HammerIconContainer>
          {renderSmallHammerIcon(player, hammerThrow)}
        </HammerIconContainer>
      </CellContent>
    );
  };

  const renderSmallHammerIcon = (
    player: IPlayer,
    hammerThrow: IHammerThrows | undefined
  ) => {
    if (!hammerThrow?.playerId || hammerThrow.playerId !== player.id)
      return null;
    const SmallIcon = hammerThrow.accepted ? Tick : Cross;
    return (
      <SmallIcon
        isFilled={true}
        width={hammerThrow.accepted ? "17px" : "18px"}
        height={hammerThrow.accepted ? "17px" : "18px"}
        color={hammerThrow.accepted ? GREEN : RED}
      />
    );
  };

  const renderTotalScore = (player: IPlayer, isCurrentPlayer: boolean) => {
    return (
      <TotalScore $isCurrentPlayer={isCurrentPlayer}>
        {player.points
          .slice(0, currentHole)
          .reduce((acc, curr) => acc + curr, 0)}
      </TotalScore>
    );
  };

  return (
    <ScoreboardWrapper>
      <Tablewrapper>
        <Table>
          {renderTableHeader()}
          <tbody>{players.map((player) => renderPlayerRow(player))}</tbody>
        </Table>
      </Tablewrapper>
    </ScoreboardWrapper>
  );
};

export default Scoreboard;
