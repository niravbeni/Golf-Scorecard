import styled from "styled-components";

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
  box-shadow: 20px 15px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: separate;
  border-spacing: 3px 3px;
`;

export const TableHeaderCell = styled.th<{ $isCurrentHole: boolean }>`
  background: linear-gradient(90deg, #d7d7d7 0%, #f5f5f5 50%);

  padding: 10px;
  text-align: center;

  font-size: 18px;

  color: #333333;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 8px 8px 0 0;
  border: ${(props) => (props.$isCurrentHole ? "2px solid #8D8D8D" : "none")};
  border-top: none;
  border-left: none;

  box-shadow: ${(props) =>
    props.$isCurrentHole ? "inset 0 5px 5px rgba(0, 0, 0, 0.1)" : "none"};
`;

export const TableRow = styled.tr<{ $isCurrentPlayer: boolean }>`
  /*background-color: ${(props) =>
    props.$isCurrentPlayer ? "#d4f4f4" : "transparent"};*/
`;

export const TableCell = styled.td<{
  $isCurrentHole: boolean;
  $isCurrentPlayer: boolean;
  $isShowPoints: boolean;
}>`
  position: relative;
  padding: 10px;
  text-align: center;

  border-radius: 8px;

  box-shadow: ${(props) =>
    props.$isShowPoints
      ? "inset 0 5px 5px rgba(0, 0, 0, 0.075)"
      : "inset 0 5px 5px rgba(0, 0, 0, 0.175)"};

  border: ${(props) => (props.$isCurrentHole ? "2px solid #8D8D8D" : "none")};
  border-top: none;
  border-left: none;
  background-color: ${(props) =>
    props.$isCurrentPlayer ? "#a6dba2" : "#f7f7f7"};
  color: ${(props) => (props.$isCurrentPlayer ? "white" : "black")};
`;

export const PointValue = styled.span`
  font-size: 18px;
`;

export const CellContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 5px 0;
`;

export const PlayerName = styled.td<{ $isCurrentPlayer: boolean }>`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.$isCurrentPlayer
      ? "linear-gradient(90deg, #363636 0%, #000000 100%)"
      : "linear-gradient(90deg, #ffffff 0%, #f7f7f7 100%)"};
  color: ${(props) => (props.$isCurrentPlayer ? "white" : "black")};
  padding: 8px;
  text-align: left;
  font-weight: bold;
  border-radius: 8px 0 0 8px;
  box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.05);
  font-size: 14px;
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

export const TotalScore = styled.td<{ $isCurrentPlayer: boolean }>`
  background: ${(props) =>
    props.$isCurrentPlayer
      ? "linear-gradient(270deg, #363636 0%, #000000 100%)"
      : "linear-gradient(270deg, #ffffff 0%, #f7f7f7 100%)"};
  color: ${(props) => (props.$isCurrentPlayer ? "white" : "black")};
  padding: 10px;
  text-align: center;
  font-weight: bold;
  border-radius: 0 12px 12px 0;
  box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  font-size: 36px;
`;
