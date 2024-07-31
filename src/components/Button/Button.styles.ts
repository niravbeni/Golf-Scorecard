import styled from "styled-components";
import { LIGHT_GREY, GREY } from "../../constants/colours";

export const StyledButton = styled.button`
  width: 120px;
  height: 50px;

  font-size: 12px;
  padding: 10px;
  margin-bottom: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${LIGHT_GREY};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${GREY};
  }
`;
