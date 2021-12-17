import styled from 'styled-components';

export const Sessionone = styled.div`
  width:100%;
  display: flex;
  height: 91vh;
  top: 5px;
  position: relative;
  overflow: hidden;

  img {
    position: relative;
    right: 0;
    width: 32%;
    left: 32.5%;
    height: 100%;
  }
`;

export const BoxText = styled.div`
  position: absolute;
  width: 25%;
  left: 5%;
  top: 10vh;
  height: 500px;

  h1 {
    font-family: 'IBM Plex Sans';
    font-size: max(2.5vw, 15px);
    position: relative;
    top: 8vh;
  }
`;

export const BoxBrandAndText = styled.div`
  position: absolute;
  left: 65%;
  top: 10vh;
  width: 30%;
  height: 550px;

  img {
    position: relative;
    left:0 ;
    top: 10vh;
    width: 85%;
    height: 30%;
  }

  h1 {
    font-family: 'IBM Plex Sans';
    font-size: max(1.5vw, 15px);
    position: relative;
    left: 6%;
    top: 12vh;
  }
  
  p {
    font-family: 'Open Sans';
    position: relative;
    top: 15vh;
    left: 6%;
    font-size: max(1.5vw, 15px);

    a {
      font-family: 'Open Sans';
      position: relative;
      color: black;
      text-decoration: none;
      font-size: max(1.5vw, 15px);
    }
  }
`;
export const ButtonToEntry = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 40px;
  position: relative;
  top: 10.5vh;
  left: 38%;
  background-color: rgb(80, 80, 80);

  &:hover{
    background-color: rgb(20, 20, 20);
    border: none;
    transition: .8s;
  }

  img {
    position: relative;
    top: 0;
    width: 90%;
    left: 5%;
    height: 90%;
    top: 3%;
  }
`;
