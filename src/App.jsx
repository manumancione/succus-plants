import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import SuperNav from './componentes/SuperNav/SuperNav'
import NavBar from './componentes/NavBar/NavBar'
import Footer from './componentes/Footer/Footer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import MenuHamburguesa from './componentes/MenuHamburguesa/MenuHamburguesa'





function App() {
  
  let saludo = "Hola, holaaaa!"
  let nombreStore = "Succus&Plants"
  

  return (
    <div>
      <SuperNav />   
      <NavBar />
      <ItemListContainer 
        saludo={saludo}
        nombreStore={nombreStore}
      />
      <Footer />
    </div>
  )
}

export default App
