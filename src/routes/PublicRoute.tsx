import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from '../pages/Home/Home';
// import Login from '../Pages/Login/Login';
// import Register from '../Pages/Register/Register';
// import dashbaord from '../Pages/dashboard/index';

function PublicRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />}  path="/"/>
        <Route element={<h1>teste</h1>}  path="/teste"/>
      </Routes>
    </BrowserRouter>
  )
}

export default PublicRoute;