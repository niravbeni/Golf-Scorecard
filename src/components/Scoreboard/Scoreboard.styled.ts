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
  // background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
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
  background: linear-gradient(90deg, #e0e0e0 0%, #f5f5f5 50%);

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
}>`
  position: relative;
  padding: 10px;
  text-align: center;

  border-radius: 8px;

  /*box-shadow: ${(props) =>
    props.$isCurrentHole
      ? "inset 0 5px 5px rgba(0, 0, 0, 0.1)"
      : "0 2px 5px rgba(0, 0, 0, 0.05)"};*/

  box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.075);

  border: ${(props) => (props.$isCurrentHole ? "2px solid #8D8D8D" : "none")};
  border-top: none;
  border-left: none;
  background-color: ${(props) =>
    props.$isCurrentPlayer ? "#b3e5fc" : "#f7f7f7"};
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
      ? "linear-gradient(90deg, #b3e5fc 0%, #c5e8fc 100%)"
      : "linear-gradient(90deg, #ffffff 0%, #f7f7f7 100%)"};
  padding: 8px;
  text-align: left;
  font-weight: bold;
  border-radius: 8px 0 0 8px;
  box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.05);
  font-size: 14px;
`;

export const PointValueContainer = styled.div`
  height: 20px; // Adjust this value as needed
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HammerIconContainer = styled.div`
  height: 20px; // Adjust this value as needed
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

export const TotalScore = styled.td`
  background: linear-gradient(90deg, #f4d4f4 0%, #fce4ec 100%);
  padding: 15px;
  text-align: center;
  font-weight: bold;
  border-radius: 0 12px 12px 0;
  box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  font-size: 28px;
`;
