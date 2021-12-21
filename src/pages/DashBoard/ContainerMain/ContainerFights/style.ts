import styled from 'styled-components';

export const ContainerProxFigths = styled.div`
  width: 90%;
  position: relative;
  height: 19%;
  min-height: 150px;
  top: 8%;
  left: 5%;
  background-color: rgb(240,240,240);
  border-radius: 5px;

  @media screen and ( max-width: 1300px) {
    width: 80%;
    left: 10%;

  }

  @media screen and ( max-width: 1050px) {
    width: 80%;
    left: 15%;

  }

  p {
    font-size: max(.8vw, 8px);
    position: relative;
    left: 5%;
    color: rgb(110,110,110);
    font-family: 'Open Sans';
    top: 10%;
  }

  h4 {
    font-size: max(1vw, 8px);
    position: relative;
    left: 5%;
    color: rgb(110,110,110);
    font-family: 'Open Sans';
    top: 10%;
  }
`;
export const MainFighters = styled.div`
    width: 90%;
    height: 52%;
    position: relative;
    top: 15%;
    left: 5%;
    display: flex;

      div {
      width: 50%;
      height: 100%;

  }
`;

export const FighterTwoName = styled.p`
  font-size: max(.8vw, 8px);
  position: relative;
  left: 5%;
  color: rgb(110,110,110);
  font-family: 'Open Sans';
  top: 10%;

  @media screen and ( max-width: 1300px) {
    position: relative;
    left: 38% !important;
  }

`;

export const FighterOne = styled.div`
  width: 50%;
  height: 100%;
  display: flex;

  h4 {
    position: relative;
    left: -18%;
    top: 10%;
    float: left;
  }


  div {
    width: 70px !important;
    height: 70px !important;
    border-radius: 70px;
    position: relative;
    top: 5px !important;
  }

  button {
    width: 25%;
    height: 50px;
    position: relative;
    left: 15%;
    font-family: 'Open Sans';
    color: rgb(80,80,80);
    border-radius: 5px;
    top: 22%;
    background-color: rgba(40, 120, 40, .3);
    border: 1px solid rgba(40, 150, 40, .4);
  }

  p{
    font-size: max(1vw, 8px);
    position: relative;
    left: 5%;
    color: rgb(110,110,110);
    font-family: 'Open Sans';
    top: 40%;
  }
`;

export const FighterTwo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;

  p{
    font-size: max(1vw, 8px);
    position: relative;
    left: 45%;
    color: rgb(110,110,110);
    font-family: 'Open Sans';
    top: 40%;
  }
  h4 {
    position: relative;
    left: 20%;
    top: 10%;
    float: left;
  }

  button {
    font-family: 'Open Sans';
    color: rgb(80,80,80);
    width: 25%;
    height: 50px;
    left: -12%;
    position: relative;
    border-radius: 5px;
    top: 22%;
    background-color: rgba(40, 120, 40, .3);
    border: 1px solid rgba(40, 150, 40, .4);
  }
`;

export const ComponentImageFighter = styled.div`
  width: 60px !important;
  height: 60px !important;
  border-radius: 60px;
  position: relative;
  top: 10px !important;
  display: flex;
`;

export const ImageUser = styled.div`
  width: 70px !important;
  height: 70px !important;
  border-radius: 70px;
  position: relative;
  top: 5px !important;

  img{
    position: relative;
    width: 100%;
  }
`;

export const ImageUserRight = styled.div`
  width: 70px !important;
  height: 70px !important;
  border-radius: 70px;
  position: relative;
  float: right;
  top: 5px !important;
  left: 86.5%;

  img{
    position: relative;
    width: 100%;
  }
`;

export const ContainerBody = styled.div`
  width: 80% !important;
  position: relative;
  left: 10%;
`;