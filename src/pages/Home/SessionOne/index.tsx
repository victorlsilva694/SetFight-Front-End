import { Sessionone, BoxText, BoxBrandAndText, ButtonToEntry } from './style';
import imgSession from './img/favpng_conor-mcgregor-ea-sports-ufc-2-ultimate-fighting-championship-ufc-undisputed-3.png';
import imgBrand from './img/favpng_ufc-205-alvarez-vs-mcgregor-t-shirt-reebok-boxing-mixed-martial-arts.png';
import nextImage from './img/next.png';

export function SessionOne() {
  return (
    <Sessionone>

      <BoxBrandAndText>
        <img src={imgBrand} alt="" />
        <h1>Entre e faça parte do nosso clube</h1>
        <strong><p><a href="#">Entrar agora</a></p></strong>

        <ButtonToEntry>
          <img src={nextImage} alt="" />
        </ButtonToEntry>
      </BoxBrandAndText>

      <BoxText>
        <h1>Faça já as suas apostas dentro de uma das maiores comunidade/clube de Luta do Brasil e divirta-se com as lutas!</h1>
      </BoxText>

      <img src={imgSession} alt="" />
    </Sessionone>
  )

}
