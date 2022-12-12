import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import 'bootstrap-icons/font/bootstrap-icons.css'
import SuperNav from './componentes/SuperNav/SuperNav'
import NavBar from './componentes/NavBar/NavBar'
import Footer from './componentes/Footer/Footer'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import MenuHamburguesa from './componentes/MenuHamburguesa/MenuHamburguesa'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'

import './App.css'
import { Router } from 'react-router-dom'
import ItemCount from './componentes/ItemCount/ItemCount'







function App() {
  
  let saludo = "Hola, holaaaa!"
  let nombreStore = "Succus&Plants"
  

  return (
    <BrowserRouter>
      
      <SuperNav />   
      <NavBar>
        <MenuHamburguesa />
      </NavBar>
      

      <Routes> 
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/detail/:productId' element={<ItemDetailContainer />} /> 
        <Route path='/categoria/:productCategory' element={<ItemListContainer />} /> 
        <Route path='*' element={<Navigate to='/' />} />
        {/* <Route path='/notpage*' element={<Componente404/>} /> =>para hacer una vista de 404*/}
      </Routes>

     

      <Footer />

    </BrowserRouter>
  )
}

export default App
