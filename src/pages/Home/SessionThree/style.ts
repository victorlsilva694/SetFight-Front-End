import styled from 'styled-components';

export const NofifyContainer = styled.div`
  width: 100%;
  position: relative;
  height: 600px;
  display: flex;
  overflow: hidden;
  background-color: rgb(210,210,210);
`;

export const ImageModal = styled.div`
  width: 50%;
  height: 500px;
  position: relative;
  top: 50px;
`;

export const ImgContext = styled.div`
  width: 90%;
  position: relative;
  height: 500px;
  left: 5%;
  border-radius: 5px;

  img {
    position: relative;
    width: 100%;
    height: 85%;
    top: 7.5%;
    border-radius: 10px;
  }
`;

export const TextContent = styled.div`
  width: 50%;
  height: 500px;
  position: relative;
  top: 50px;

  h1 {
    position: relative;
    font-family: 'IBM Plex Sans';
    width: 80%;
    text-align: center;
    left: 10%;
    top: 13vh;
    font-size: max(2.5vw, 15px);
  }

  p {
    position: relative;
    font-size: max(1.2vw, 15px);
    width: 80%;
    left: 10%;
    text-align: center;
    top: 20vh;
  }
`;
