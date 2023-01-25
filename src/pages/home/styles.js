import styled from "styled-components";

export const Container = styled.section`
  max-width: 1250px;
  margin: auto;
  background-color: #ffeadc;
  text-align: center;
  border-left: 2px solid #512522;
  border-right: 2px solid #512522;
  color: #512522;

  section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 35px;
  }

  h2 {
    padding: 60px 0 15px;
  }
`;

export const Intro = styled.div`
  div {
    padding: 30px 0 0;
  }

  img {
    margin: 2rem;
  }

  h1 {
    font-size: 30px;
  }
`;
