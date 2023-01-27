import '../MenuHamburguesa/MenuHamburguesa.css'
import LogoPpal from '../../assets/logoPpal3.png'
import LogoIcono from '../../assets/logoIcono.png'

import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { useState } from 'react'
// import MenuHamburguesa from '../MenuHamburguesa/MenuHamburguesa'


const NavBar = () => {

const [clickEnMenuHamburguesa, setClickEnMenuHamburguesa] = useState(true)
const handleClick = () => {
setClickEnMenuHamburguesa(!clickEnMenuHamburguesa)
}



return (
<>
    <div className='nav-container'>
        <div className='nav-icon nav-icon--buscar1'>
            <button><i className='bi bi-search'></i></button>
        </div>

        <div className='nav-icon nav-icon--hamburguesa'>
            <button onClick={handleClick}><i className='bi bi-list'></i></button>
        </div>

        <div className='nav-container__item'>
            <ul className='nav-list'>
                <li>
                    <Link to='/categoria/suculentas'>SUCULENTAS</Link>
                </li>
                <li>
                    <Link to='/categoria/plantas'>PLANTAS</Link>
                </li>
            </ul>
            <Link to='/'><img className="logo-img" src={LogoPpal} alt='Logo de Succus and Plants'></img></Link>
            <ul className='nav-list'>
                <li>
                    <Link to='/categoria/macetas'>MACETAS</Link>
                </li>
                <li>
                    <NavLink className={({ isActive })=> {}} to='/cuidados'>CUIDADOS</NavLink>
                </li>
                {/* cambio modo activo */}

            </ul>
        </div>

        <div className='nav-icon-container'>
            <div className='nav-icon nav-icon--buscar2'>
                <button><i className='bi bi-search nav-icon-search'></i></button>
            </div>

            <div className='nav-icon'>
                <CartWidget />
            </div>
        </div>
    </div>

        
        {/* COMPONENTE CART */}
        {/* <div className='cart'>
            <h3>Tu carrito</h3>
            <div className='div-button'><button className='button-finalizar'>Finalizar compra</button></div>
            <div className='div-button'><button className='button-continuar'>Continuar comprando</button></div>
           
      </div> */}
        
        {/* COMPONENTE MENU HAMBURGUESA */}
    <div className={ `nav-hamburguesa ${clickEnMenuHamburguesa ? 'navHamburguesaInactivo' : '' }`}>

        <div className='nav-hamburguesa-container'>
            <a href='../index.html'><img className='nav-hamburguesa-logo' src={LogoIcono} alt='logo'></img></a>
            <button onClick={handleClick} className='nav-hamburguesa-close'><i className="bi bi-x"></i></button>
        </div>
        <ul>
                <li><Link to='/categoria/suculentas'>SUCULENTAS</Link></li>
                <li><Link to='/categoria/plantas'>PLANTAS</Link></li>
                <li><Link to='/categoria/macetas'>MACETAS</Link></li>
                <li><Link to='/categoria/cuidados'>CUIDADOS</Link></li>
        </ul>
    </div> 
</>
)
}

export default NavBar