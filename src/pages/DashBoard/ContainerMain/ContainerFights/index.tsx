import { ContainerProxFigths, ComponentImageFighter, MainFighters, FighterOne, FighterTwo, ImageUser, ImageUserRight, FighterTwoName } from './style';
import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../../../../services/api';
import { makeAutoObservable } from 'mobx';

interface FighterResp {
  FighterOne: string,
  FighterTwo: string,
  TypeFight: string,
  Date: string,
  urlImage: string,
  urlImageTwo: string,
  id: string,
  idFighterOne: "1",
  idFighterTwo: "2",
  isMatchBet: boolean,
}
interface PercentValues {
  id: string,
  percentFighterOne: number,
  percentFighterTwo: number,
}
class ContainerFigthsStore {
  fights: FighterResp[] = []
  constructor () {
    makeAutoObservable(this)
  }
}
const ContainerFigths = () => {
  const [isMatchBet, setIsMatchBet] = useState(false);
  const [betPercent, setBetPercent] = useState<PercentValues[]>([]);
  async function percentEnv(id: string, idFighter: string) {
    const fights = await api.post('/verifyDataID', { id, idFighter });
    setIsMatchBet(true);
  }
  const [fights, setFighter] = useState<FighterResp[]>([]);
  useEffect(() => {
    async function getValues() {
      const fightersResponse = await api.get('/api');
      const datafightersResponse = fightersResponse.data;
      setFighter(datafightersResponse);
    }
    getValues();
  }, [])
  useEffect(() => {
    async function getApiValues() {
      const { data: fightsValues } = await api.get('/getIdFight');
      return fightsValues;
    }
    getApiValues().then((e: any) => {
      setBetPercent(e);
    });
  }, [isMatchBet])
  return (
    <>
      {
        fights.map((fight, index) => {
          return (
            <React.Fragment key={index}>
              <ContainerProxFigths>
                <p>{fight.Date}</p>
                <h4>{fight.TypeFight}</h4>
                <MainFighters>
                  <FighterOne>
                    <ImageUser>
                      <img src={fight.urlImage}></img>
                    </ImageUser>
                    <p>{fight.FighterOne}</p>
                    {isMatchBet ?
                    <h4>{betPercent.find((iterator: any) => iterator.id === fight.id)?.percentFighterOne}</h4>
                    : 
                    <button onClick={() => percentEnv(fight.id, fight.idFighterOne)}>
                      Apostar
                    </button>}
                  </FighterOne>
                  <FighterTwo>
                    <ImageUserRight>
                      <img src={fight.urlImageTwo}></img>
                    </ImageUserRight>
                    <FighterTwoName>{fight.FighterTwo}</FighterTwoName>
                    {isMatchBet ? <h4>{betPercent.find((iterator: any) => iterator.id === fight.id)?.percentFighterTwo}</h4> : <button onClick={() => percentEnv(fight.id, fight.idFighterTwo)}>
                      Apostar
                    </button>}
                  </FighterTwo>
                </MainFighters>

              </ContainerProxFigths>
              <br />
            </React.Fragment>
          )

        })
      }

    </>
  )

}

export default ContainerFigths;