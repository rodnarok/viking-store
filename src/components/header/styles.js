import styled from "styled-components";

export const Top = styled.div`
  background-color: #512522;
  height: 100px;
  color: #ffeadc;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  img {
    width: 100px;
    cursor: pointer;
  }

  p {
    padding: 10px;
  }
`;
