import { CardGrid, LeftContainer } from './style';
import ConorMcgregor from './img/Conor-McGregor.jpg';
import JonJones from './img/gettyimages-1342173777.jpg';
import RondaRousey from './img/ronda-rousey-e1566316200403.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import brandImage from './img/favpng_ufc-205-alvarez-vs-mcgregor-t-shirt-reebok-boxing-mixed-martial-arts.png';

export function SessionFour() {
  return (
    <CardGrid>
      <LeftContainer>
        <ul>
          <li>
            <a href=""><strong>Sobre nós</strong></a>
          </li>

          <li>
            <a href="">Contato</a>
          </li>

          <li>
            <a href="">Trabalhe Conosco</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href=""><strong>Lutadores</strong></a>
          </li>

          <li>
            <a href="">Vendores</a>
          </li>

          <li>
            <a href="">Perdedores</a>
          </li>

          <li>
            <a href="">Apostas</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href=""><strong>Minhas Apostas</strong></a>
          </li>

          <li>
            <a href="">Fazer aposta</a>
          </li>

          <li>
            <a href="">Apostas vencidas</a>
          </li>

          <li>
            <a href="">Apostas perdidas</a>
          </li>
        </ul>
      </LeftContainer>

      <LeftContainer>
        <img src={brandImage} alt="" />
      </LeftContainer>
    </CardGrid>
  );
}