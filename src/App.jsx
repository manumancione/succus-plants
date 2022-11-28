import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import SuperNav from './componentes/SuperNav/SuperNav'
import NavBar from './componentes/NavBar/NavBar'
import Footer from './componentes/Footer/Footer'
import Saludar from './componentes/Saludar/Saludar'





function App() { 
  
let saludo="Hola, holaaaa!"

  return (
    <div>
      <SuperNav />   
      <NavBar />
      <Saludar 
        saludo={saludo}
      />
      <Footer />
    </div>
  )
}

export default App
