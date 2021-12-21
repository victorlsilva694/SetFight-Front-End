import styled from 'styled-components';

export const MainContainerLogin = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(230,230,230);
  display: flex;
`;
export const ContainerImage = styled.div`
  width: 35%;
  height: 100vh;

  img {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

export const ContainerForm = styled.div`
  width: 65%;
  height: 100vh;

  img {
    width: 40%;
    position: relative;
    left: 32%;
    top: 15vh;
  }

  h5 {
    position: relative;
    top: 20vh;
    font-size: max(1.1vw, 15px);
    font-family: 'IBM Plex Sans';
    text-align: center;

    a{
      text-decoration: none;
    }
  }
`;

export const FormInputLogin = styled.div`
  width: 60%;
  height: 40vh;
  position: relative;
  top: 25vh;
  left: 20%;

  input {
    border: none;
    width: 80%;
    position: relative;
    left: 10%;
    height: 50px;
    border: 1px solid rgb(210,210,210);
    border-radius: 4px;
    margin: 10px;
    font-size: max(1vw, 15px);

    &:focus {
      outline: none;
      box-shadow: 0px 0px 5px dodgerblue;
    }
  }

  button {
    border: none;
    width: 80%;
    position: relative;
    left: 10%;
    font-family: 'Open Sans';
    height: 60px;
    border: 1px solid rgb(210,210,210);
    border-radius: 4px;
    margin: 10px;
    color: white;
    background-color: rgb(80, 80, 80);
    font-size: max(1.1vw, 15px);

    &:hover {
      transition: .4s;
      background-color:rgb(20, 20, 20);
    }
  }
`;

export const CheckboxInput = styled.input`
  width: 20px !important;
  height: 20px !important;
  position: absolute !important;
  top: 20vh;
`;
