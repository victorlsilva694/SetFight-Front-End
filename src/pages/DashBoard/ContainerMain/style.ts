import styled from 'styled-components';

export const BoxOne = styled.div`
  width: 90%;
  position: relative;
  left: 5%;
  height: 35%;
  display: flex;
  top: 2%;
  min-height: 250px;

  @media screen and ( max-width: 1300px) {
    width: 80%;
    left: 10%;

  }

  @media screen and ( max-width: 1050px) {
    width: 80%;
    left: 15%;

  }

`;

export const BoxChildren = styled.div`
  position: relative;
  width: 100%;
  min-height: 250px;
  min-width: 95%;
  height: 60%; 
  min-height: 60%;
  z-index: 999;
  display: flex;
  top: 40%;
  background-color: rgb(240,240,240);
  border-radius: 5px;

  img {
    position: absolute;
    width: 30%;
    left: 15%;
    top: 15%;
  }
`;

export const ImageFighter = styled.div`
  width: 16%;
  position: relative;
  height: 168%;
  min-height: 250px;
  min-width: 80px;
  left: 60%;
  top: -73%;
  margin: 10px;

  img {
    width: 90%;
    min-width: 150px;
    position: relative;
    top: 10%;
  }
`;