import styled from "styled-components";
import {
  GREY,
  LIGHT_GREY,
  DARK_GREY,
  CHARCOAL,
  WHITE,
  BLACK,
  BLUE,
} from "../../constants/colours";

export const ScoreboardWrapper = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgrey;
`;

export const Tablewrapper = styled.div`
  width: 550px;
  height: 210px;
  transform: skew(-10deg) rotateX(10deg);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 20px 15px 10px rgba(0, 0, 0, 0.5);
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: separate;
  border-spacing: 3px 3px;
`;

export const TableHeaderCell = styled.th<{ $isCurrentHole: boolean }>`
  padding: 10px;
  border-radius: 8px 8px 0 0;
  border: ${(props) =>
    props.$isCurrentHole ? `2px solid ${DARK_GREY}` : "none"};
  border-top: none;
  border-left: none;
  text-align: center;
  font-size: 18px;
  background: linear-gradient(90deg, ${GREY} 0%, ${LIGHT_GREY} 50%);
  color: ${CHARCOAL};
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  box-shadow: ${(props) =>
    props.$isCurrentHole ? "inset 0 5px 5px rgba(0, 0, 0, 0.1)" : "none"};
`;

export const TableRow = styled.tr<{ $isCurrentPlayer: boolean }>``;

export const TableCell = styled.td<{
  $isCurrentHole: boolean;
  $isCurrentPlayer: boolean;
  $isShowPoints: boolean;
}>`
  position: relative;
  padding: 10px;
  border-radius: 8px;
  border: ${(props) =>
    props.$isCurrentHole ? `2px solid ${DARK_GREY}` : "none"};
  border-top: none;
  border-left: none;
  text-align: center;
  background-color: ${(props) => (props.$isCurrentPlayer ? BLUE : LIGHT_GREY)};
  color: ${(props) => (props.$isCurrentPlayer ? WHITE : BLACK)};
  box-shadow: ${(props) =>
    props.$isShowPoints
      ? "inset 0 5px 5px rgba(0, 0, 0, 0.075)"
      : "inset 0 5px 5px rgba(0, 0, 0, 0.175)"};
`;

export const PlayerName = styled.td<{ $isCurrentPlayer: boolean }>`
  display: flex;
  height: 100%;
  padding: 8px;
  border-radius: 8px 0 0 8px;
  align-items: center;
  justify-content: center;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  background: ${(props) =>
    props.$isCurrentPlayer
      ? `linear-gradient(90deg, #333333 0%, ${BLACK} 100%)`
      : `linear-gradient(90deg, #ffffff 0%, ${LIGHT_GREY} 100%)`};
  color: ${(props) => (props.$isCurrentPlayer ? WHITE : "")};
  box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.05);
`;

export const TotalScore = styled.td<{ $isCurrentPlayer: boolean }>`
  position: relative;
  padding: 10px;
  border-radius: 0 12px 12px 0;
  overflow: hidden;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  background: ${(props) =>
    props.$isCurrentPlayer
      ? `linear-gradient(270deg, #333333 0%, ${BLACK} 100%)`
      : `linear-gradient(270deg, #ffffff 0%, ${LIGHT_GREY} 100%)`};
  color: ${(props) => (props.$isCurrentPlayer ? WHITE : BLACK)};
  box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.05);
`;

export const CellContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 5px 0;
`;

export const PointValue = styled.span`
  font-size: 18px;
`;

export const PointValueContainer = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HammerIconContainer = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;

export const PlayerNameText = styled.span`
  margin-right: 10px;
`;

export const HammerIcon = styled.span`
  display: inline-flex;
  align-items: center;
`;
