import { observer } from 'mobx-react-lite';
import { IconsBox, LinesBoxIcons, BoxIten } from './style';
import iconOne from './img/perfil.png';
import iconTwo from './img/swords.png';
import iconThree from './img/statistics.png';
import iconFour from './img/sprint.png';
import iconFive from './img/bell.png';
import iconSix from './img/setting.png';

const IconsSideBar = () => {
  return (
    <IconsBox>
      <LinesBoxIcons>
        <BoxIten>
          <span>
            <img src={iconOne} alt="" />
            <p>Perfil</p>
          </span>
        </BoxIten>
        <BoxIten>
        <span>
            <img src={iconTwo} alt="" />
            <p>Lutas</p>
          </span>
        </BoxIten>
      </LinesBoxIcons>
      <LinesBoxIcons>
        <BoxIten>
        <span>
            <img src={iconThree} alt="" />
            <p>Estatística</p>
          </span>
        </BoxIten>
        <BoxIten>
        <span>
            <img src={iconFour} alt="" />
            <p>Atletas</p>
          </span>
        </BoxIten>
      </LinesBoxIcons>
      <LinesBoxIcons>
        <BoxIten>
        <span>
            <img src={iconFive} alt="" />
            <p>Notificações</p>
          </span>
        </BoxIten>
        <BoxIten>
        <span>
            <img src={iconSix} alt="" />
            <p>Configurações</p>
          </span>
        </BoxIten>
      </LinesBoxIcons>
    </IconsBox>
  )
}

export default observer(IconsSideBar);