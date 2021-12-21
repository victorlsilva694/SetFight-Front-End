import { RouterContext } from '../App';
import { useState, useEffect, useContext } from 'react';
import { authContext } from '../stores/AuthStore';
import { IndexRouteProps, LayoutRouteProps, PathRouteProps, useNavigate } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import DashBoard from '../pages/DashBoard/index';

function PrivateRoute(props: any){
  const store = useContext(authContext); 
  const navigate = useNavigate();

  useEffect(() => { 
    if(!store.isAuthenticated){
      store.verifyToken().catch(() => {
        navigate('/login');
      })
     }
  },[navigate, store, store.isAuthenticated])
  return (
    props.children
  )
}


function Router() {
   return(
    <Routes>
      <Route element={<Home />}  path="/"/>
      <Route element={<Login />}  path="/login"/>
      <Route element={<PrivateRoute><DashBoard /></PrivateRoute>}  path="/User/DashBoard" />
        {/* <Route element={<h1>oi</h1>}  path="teste"/>
      </Route> */}
      <Route element={<PrivateRoute><h1>teste</h1></PrivateRoute>}  path="/User/DashBoard/user" />
    </Routes>
   )
}


export default Router;