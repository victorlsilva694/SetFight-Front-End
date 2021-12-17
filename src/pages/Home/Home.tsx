import { NavBar } from './NavBar';
import { SessionOne } from './SessionOne';
import { SessionTwo } from './SessionTwo';
import { SessionThree } from './SessionThree';
import { SessionFour } from './SessionFour'

function Home() {
  return (
    <>
      <NavBar />
      <SessionOne />
      <SessionTwo />
      <SessionThree />
      <SessionFour />
    </>
  )
}

export default Home;