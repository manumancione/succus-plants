import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import SuperNav from './componentes/SuperNav/SuperNav'
import NavBar from './componentes/NavBar/NavBar'
import Footer from './componentes/Footer/Footer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'





function App() { 
  
let saludo="Hola, holaaaa!"

  return (
    <div>
      <SuperNav />   
      <NavBar />
      <ItemListContainer 
        saludo={saludo}
      />
      <Footer />
    </div>
  )
}

export default App
