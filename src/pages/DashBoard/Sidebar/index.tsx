import { observer } from 'mobx-react-lite';
import { SideNavContainer, BrandUserName, SideBarItens, UserStatus, ContainersStatus, WinStatus, LoseStatus } from './style';
import UFCBrand from './img/favpng_ufc-fight-night-131-rivera-vs-moraes-ufc-193-rousey-vs-holm-mixed-martial-arts-ufc-212-aldo-vs-holloway.png';
import {authContext} from '../../../stores/AuthStore';
import React, { createContext, useContext, useState } from 'react';
import winBrand from './img/medal.png';
import loseBrand from './img/decrease.png';
import IconsSideBar from './IconsSideBar/IconsSideBar';

const SideBar = () => {
  const store = useContext(authContext);
  return (
    <SideNavContainer>
      <BrandUserName>
        <img src={UFCBrand} alt="" />
      </BrandUserName>
      <SideBarItens>
        <h1>{store.user.name + " " + store.user.lastName}</h1>
        <UserStatus>
          <ContainersStatus>
            <WinStatus>
              {/* <img src={winBrand} alt="" /> */}
            </WinStatus>
            <h1>{store.user.wins + " Vitórias"}</h1>
          </ContainersStatus>
          <ContainersStatus>
            <LoseStatus>
              {/* <img src={loseBrand} alt="" /> */}
            </LoseStatus>
            <h1>{store.user.loses + " Derrotas"}</h1>
          </ContainersStatus>
        </UserStatus>

        <IconsSideBar/>
      </SideBarItens>
    </SideNavContainer>
  )
}

export default observer(SideBar);
