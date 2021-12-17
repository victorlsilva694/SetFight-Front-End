import styled from 'styled-components';

export const Sessiontwo = styled.div`
  width: 100%;
  display: flex;
  height: 700px;
`;

export const ContainerWrapper = styled.div`
  width: 65%;
  position: relative;
  top: 50px;
  height: 700px;

  img {
    position: relative;
    left: 2.5%;
    width: 92.5%;
    height: 80%;
    top: 10%;
    border-radius: 10px;
  }
`;

export const BoxImageContainer = styled.div`
  width: 30%;
  position: relative;
  top: 50px;
  height: 700px;

  h1 {
    font-family: 'IBM Plex Sans';
    font-size: max(1.8vw, 15px);
    position: relative;
    top: 22vh;
  }

  button{
    width: 100%;
    border: none;
    position: relative;
    height: 60px;
    background-color: rgb(200, 60, 60);
    top: 30vh;
    border-radius: 5px;
    font-family: "Open Sans";
    color: white;
    font-size: max(1.1vw, 15px);

    &:hover{
      background-color: rgb(200, 10, 10);
      border: none;
      transition: .3s;
    }
  }
`;