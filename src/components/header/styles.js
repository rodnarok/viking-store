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

  ul {
    display: flex;
    list-style: none;
    align-items: center;
  }

  li {
    margin-right: 1em;
  }

  li:hover {
    font-size: 20px;
  }

  img {
    width: 150px;
    cursor: pointer;
  }

  p {
    padding: 10px;
  }

  a {
    text-decoration: none;
  }
  a:visited {
    color: #ffeadc;
  }
`;
