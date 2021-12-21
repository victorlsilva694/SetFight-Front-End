import styled from 'styled-components';

export const CardGrid = styled.div`
  width: 100%;
  display: flex;
  height: 400px;
`;

export const LeftContainer = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  height: 300px;
  top: 50px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 30px;
    position: relative;
    left: 10%;

    li {
      margin: 15px;
      
      a {
        text-decoration: none;
        color: black;
        font-family: 'Open Sans'
        font-size: max(1.5vw, 15px);
      }
    }
  }
  img {
    position: relative;
    left: 27.5%;
    top: 2vh;
    width: 45%;
    height: 50%;
  }
`;
export const ContainerSocials = styled.div`
  width: 35%;
  position: absolute;
  left: 28%;
  display: flex;
  height: 60px;
  top: 25vh;

  div {
    width: 25%;
    height: 50px;
    margin: 10px;

    img {
      width: 100%;
      height: 50px;
    }
  }
`;
