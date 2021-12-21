import { BoxOne, BoxChildren, ImageFighter } from './style';
import fighterOne from './img/favpng_conor-mcgregor-ea-sports-ufc-2-ultimate-fighting-championship-ufc-undisputed-3.png'
import fighterTwo from './img/favpng_stipe-miocic-ufc-198-werdum-vs-miocic-ufc-220-miocic-vs-ngannou-mixed-martial-arts-heavyweight.png'
import FightContainers from './ContainerFights/index';
import ufcLogo from './img/favpng_ufc-fight-night-131-rivera-vs-moraes-ufc-193-rousey-vs-holm-mixed-martial-arts-ufc-212-aldo-vs-holloway.png';

const MainContainer = () => {
  return (
    <>
      <BoxOne>
        <BoxChildren>
        <img src={ufcLogo} alt="" />
          <ImageFighter>
            <img src={fighterOne} alt="" />
          </ImageFighter>
          <ImageFighter>
            <img src={fighterTwo} alt="" />
          </ImageFighter>
        </BoxChildren>
      </BoxOne>

      <FightContainers />
    </>
  )
}

export default MainContainer;