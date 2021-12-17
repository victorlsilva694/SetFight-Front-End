import { Sessiontwo, ContainerWrapper, BoxImageContainer } from './style';
import imgSession from './img/wallpaperbetter (1).jpg';

export function SessionTwo() {
  return (
    <Sessiontwo>
      <ContainerWrapper>
        <img src={imgSession} alt="" />
      </ContainerWrapper>
      <BoxImageContainer>
        <h1>
          Confira agora as lutas que estão com as apostas abertas e divirta-se jogando e apostando com pessoas do mundo todo!
          Além disso, você pode também trocar o saldo recebido em produtos do Set Figth ou até mesmo depositar em sua conta do banco.
        </h1>
        <button>
          Entrar agora na comunidade
        </button>
      </BoxImageContainer>
    </Sessiontwo>
  );
}