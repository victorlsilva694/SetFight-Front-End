import styled from 'styled-components';

export const Navbar = styled.nav`
  width:100%;
  display: flex;
  height: 60px;
`;
export const Brand = styled.nav`
  position: relative;
  left: 3%;
  width:30%;
  height: 60px;

  h1 {
    font-weight: 600px;
    font-size: max(1.6vw);
    font-family: 'Roboto';
    color: rgb(220,50,50);
    position: relative;
    top: 2vh;

    span {
      font-weight: 600px;
      font-size: max(1.6vw);
      color: rgb(70,70,80);
      position: relative;
    }
  }
`;
export const ListItens = styled.nav`
  position: relative;
  display: flex;
  left: 30%;
  width:40%;
  height: 60px;

  ul {
    display: flex;
    width: 100%;

    li {
      list-style: none;
      width: 25%;
      height: 60px;
    }

    p {
      text-align: center;

      a {
        font-size: max(1.2vw, 12px);
        font-family: 'Open Sans';
        color: black;
        font-weight: 400;
        position: relative;
        top: 3vh;
        text-decoration: none;
      }
    }
  }
`;

export const Login = styled.button`
  width: 80%;
  position: relative;
  left: 10%;
  height: 50px;
  top: 10px;
  border-radius: 6px;
  border: none;
  background-color: rgb(195,195,195);
`;

