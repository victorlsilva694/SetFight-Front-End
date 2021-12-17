import { Navbar, Brand, ListItens, Login } from './style';

export function NavBar() {
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
            <Login>
              
            </Login>
          </li>
        </ul>
      </ListItens>
    </Navbar>
  )
}
