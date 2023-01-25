import styled from "styled-components";
export const Form = styled.div`
  background-color: #512522;
  min-width: 400px;
  min-height: 300px;
  border-radius: 10%;
  color: #ffeadc;
  box-shadow: 0 0 20px black;
  text-align: center;
  padding: 10px;

  h1 {
    padding: 25px;
  }
`;

export const CriarLayout = styled.body`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 1250px;
  min-height: 800px;
  background-color: #ffeadc;

  border-left: 2px solid #512522;
  border-right: 2px solid #512522;
  color: #512522;
`;
