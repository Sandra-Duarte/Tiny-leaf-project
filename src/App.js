import React from 'react'
import Home from './Component/page/Home/Home';
import Meno from './Component/page/Menu/Meno';
import Reservations from './Component/page/Reservations/Reservations';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import Layout from './Component/page/Navbar/Layout';

const router = createBrowserRouter(createRoutesFromElements(

  <Route element ={<Layout/>}>

    <Route path="/" element={<Home/>}/>
    <Route path="/menu" element={<Meno/>}/>
    <Route path="/reservations" element={<Reservations/>}/>

  </Route>
))

const App = () => {
  return (
    <>
    
    <RouterProvider router={router} />
    </>
  )
}

export default App
