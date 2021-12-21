import styled from 'styled-components';

export const IconsBox = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  top: 80px;
`;

export const LinesBoxIcons = styled.div`
  width: 80%;
  height: 120px;
  margin: 33px;
  display: flex;
`;

export const BoxIten = styled.button`
  width: 40%;
  height: 110px;
  margin: 10px;
  border: 1px solid rgb(220,220,220);
  border-radius: 10px;
  background-color: rgb(250,250,250);

  img {
    opacity: .5;
    width: 50%;
  }
  p {
    font-family: 'Open Sans';
    font-size: max(.8vw, 12px);
    position: relative;
    text-align: center;
    color: rgb(100,100,100);
    top: 5px;
  }
`;