import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100px;
  height: 40px;

  font-size: 10px;
  padding: 10px;
  margin-bottom: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f2f2f2;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }
`;
