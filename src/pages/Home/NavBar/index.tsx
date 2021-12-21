import { Navbar, Brand, ListItens, Login } from './style';
import { Link, useNavigate } from 'react-router-dom';

export const NavBar = () => {

  const navigate = useNavigate();

  const redirectNavigate = () => {
    navigate('/login', {
      replace: true
    });
  }

  return (
    <Navbar >
      <Brand>
        <h1>Set <span>Fight</span></h1>
      </Brand>
      <ListItens>
        <ul>
          <li>
            <p>
              <a href="#">Drops</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#">Lutas</a>
            </p>
          </li>
          <li>
            <p>
              <a href="#">Menu de apostas</a>
            </p>
          </li>
          <li>
            <Login onClick={redirectNavigate}>
              Entrar
            </Login>
          </li>
        </ul>
      </ListItens>
    </Navbar>
  )
}
