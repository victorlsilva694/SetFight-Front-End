import { NofifyContainer, ImageModal, ImgContext, TextContent } from './style';
import imageConor from './img/quando-jon-jones-começou-no-mma.jpg';

export const SessionThree = () => {
  return (
    <NofifyContainer>
      <TextContent>
        <h1>Veja os lutadores que estão entre os top's do momento!</h1>
        <p>
          Com o Set Fight você fica por dentro de tudo que está acontecendo no mundo da luta com o UFC.
          Incluindo partidas disputadas, estatisticas dos lutadores, e taxa de vitórias de cada um deles,
          para gerar apostas mais limpas e acertivas. 
        </p>
      </TextContent>
      <ImageModal>
        <ImgContext>
          <img src={imageConor} alt="" />
        </ImgContext>
        {/* <img src={} alt="" /> */}
      </ImageModal>
    </NofifyContainer>
  );
}