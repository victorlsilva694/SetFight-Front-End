import { MainContainerLogin, ContainerImage, ContainerForm, FormInputLogin, CheckboxInput } from './style';
import Wallpaper from './img/annie-spratt-yI3weKNBRTc-unsplash.jpg';
import imgUFC from './img/favpng_ufc-fight-night-131-rivera-vs-moraes-ufc-193-rousey-vs-holm-mixed-martial-arts-ufc-212-aldo-vs-holloway.png'
import React, { createContext, useContext, useState } from 'react';
import api from '../../services/api';
import { RouterContext } from '../../App';
import {authContext} from '../../stores/AuthStore';
import { observer } from 'mobx-react-lite';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const store = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleClick() {
    try {
      await store.login(email, password);
      navigate('/User/DashBoard');
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <MainContainerLogin>
      <ContainerImage>
        <img src={Wallpaper} alt="" />
      </ContainerImage>

      <ContainerForm>
        <img src={imgUFC} alt="" />
        <h5>Você é novo por aqui? <span><a href="#">Faça já seu registro</a></span></h5>
        <FormInputLogin >
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" * Endereço de e-mail"/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder=" * Senha"/>
          <button onClick={handleClick}>
            Entrar
          </button>
        </FormInputLogin>

      </ContainerForm>
    </MainContainerLogin>
  )
}

export default observer(Login);