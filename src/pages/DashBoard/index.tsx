import { observer } from 'mobx-react-lite';
import React, { createContext, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import BarSide from './Sidebar'
import { MainCotainer, SideBar, ContainerMain } from './style';
import ContainerPage from './ContainerMain/index';

const DashBoard = () => {
  return(
    <>
      <MainCotainer>
        <SideBar>
          <BarSide />
        </SideBar>

        <ContainerMain>
          <ContainerPage />
        </ContainerMain>
      </MainCotainer>
    </>
  )

};

export default observer(DashBoard);