import styled from 'styled-components';

export const SideNavContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-width: 280px;
  background-color: rgb(240,240,240);
  border: 1px solid rgb(215,215,215);
`;

export const BrandUserName = styled.div`
  width: 100%;
  height: 70px;

  img{
    position: relative;
    top: 15px;
    left: 30%;
    width: 125px;
    height: 40px;
  }
`;

export const SideBarItens = styled.div`
  width: 100%;
  height: 90vh;

  h1 {
    font-family: 'IBM Plex Sans';
    font-size: max(1.5vw, 15px);
    position: relative;
    text-align: center;
    top: 10px;
  }
`;

export const UserStatus = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  top: 50px;

  div {
    width: 100%;
    height: 50px;
  }
`;

export const ContainersStatus = styled.div`
  width: 100%;
  height: 50px;
  display: flex;

  h1 {
      font-family: 'IBM Plex Sans';
      font-size: max(1.2vw, 15px);
      position: relative;
      top: 12px;
      left: 10%;
    }
  
`;

export const WinStatus = styled.div`
    width: 40px !important;
    height: 40px !important;
    position: relative;
    left: 5%;
    top: 5px;
    border-radius: 40px !important;
    background-color: rgba(50,120,50, .3);
    display: flex;

    h1 {
      font-family: 'IBM Plex Sans';
      font-size: max(1.5vw, 15px);
      position: relative;
      left: 10%;
    }
`;

export const LoseStatus = styled.div`
    width: 40px !important;
    height: 40px !important;
    position: relative;
    left: 5%;
    top: 5px;
    border-radius: 40px !important;
    background-color: rgba(120,50,50, .3);
    display: flex;

    h1 {
      font-family: 'IBM Plex Sans';
      font-size: max(1.5vw, 15px);
      position: relative;
      left: 10%;
    }
`;