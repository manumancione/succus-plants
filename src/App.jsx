import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


//componentes:

//super nav
const SuperNav = () => {
  return (
    <div className='supernav-container'>
      <h2>Envío gratis en compras mayores a $5000</h2>
    </div>
  )
}

//nav
const NavList = () => {
  return (
    <div className='nav-container'>
      <div className='nav-icon'>
        <button><i className='bi bi-search'></i></button>
      </div>

      <div >
        <ul className='nav-container-list'>
          <li><a href=''>SUCULENTAS</a></li>
          <li><a href=''>PLANTAS</a></li>
          <a href='../index.html'><img src='../images/logo3.png' alt='logo'></img></a>
          <li><a href=''>MACETAS</a></li>
          <li><a href=''>CUIDADOS</a></li>
        </ul>
      </div>

      <div className='nav-icon'>
      <button><i className='bi bi-bag'></i></button>
      </div>

    </div>
  )
}

//footer
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-container__item'>
        <a href='../index.html' ><img className='footer-logo' src='../images/florIcono.png' alt='logo'></img></a>
      </div>

      <div className='footer-container__item'>
        <h4 className='footer-title'>¿Necesitas ayuda?</h4>
        <ul className='footer-list'>
          <li>Envío y devoluciones</li>
          <li>Política de privacidad</li>
          <li>Política de reembolso</li>
          <li>Términos de servicio</li>
        </ul>
      </div>

      <div className='footer-container__item'>
        <h4 className='footer-title'>Sumate a nuestra comunidad</h4>
        <p>Únase a nuestra comunidad y reciba ofertas exclusivas.</p>
        <div className='footer-container__input'>
          <i className='footer-icon bi bi-envelope'></i>          
          <input className='footer-input' type="email" placeholder='Introduce tu email' />
        </div>        
      </div>

    </div>
  )
}


function App() {  

  return (
    <div>
      <SuperNav />   
      <NavList />

      <Footer />
    </div>
  )
}

export default App
