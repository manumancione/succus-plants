import '../MenuHamburguesa/MenuHamburguesa.css'
import LogoPpal from '../../assets/logoPpal3.png'
import LogoIcono from '../../assets/logoIcono.png'
import MenuHamburguesa from '../MenuHamburguesa/MenuHamburguesa'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'


const NavBar = ({ children }) => {

    const abrirMenuHamburguesa = () => {
        console.log("abrirMenu")
    }
return (
<>
    <div className='nav-container'>
        <div className='nav-icon nav-icon--buscar1'>
            <button><i className='bi bi-search'></i></button>
        </div>

        <div className='nav-icon nav-icon--hamburguesa'>
            <button onClick={abrirMenuHamburguesa}><i className='bi bi-list'></i></button>
        </div>

        <div className='nav-container__item'>
            <ul className='nav-list'>
                <li><Link to='/categoria/suculentas'>SUCULENTAS</Link></li>
                    <li><Link to='/categoria/plantas'>PLANTAS</Link></li>
            </ul>
                <Link to='/'><img className="logo-img" src={LogoPpal} alt='Logo de Succus and Plants'></img></Link>
            <ul className='nav-list'>
                    <li><Link to='/categoria/macetas'>MACETAS</Link></li>
                    <li><NavLink className={({ isActive }) => {}} to='/cuidados'>CUIDADOS</NavLink></li> 
                    {/* cambio modo activo */}
                    
            </ul>
        </div>

        <div className='nav-icon-container'>
            <div className='nav-icon nav-icon--buscar2'>
                <button><i className='bi bi-search nav-icon-search'></i></button>
            </div>

            <div className='nav-icon'>
                <button><i className='bi bi-bag'><span className="nav-icon__span">0</span></i></button>
            </div>
        </div>

        

        {/* <div id='menuHamburguesa' className='nav-hamburguesa'>
            <div className='nav-hamburguesa-container'>
                <a href='../index.html'><img className='nav-hamburguesa-logo' src={LogoIcono} alt='logo'></img></a>
                <button id='closeButton' className='nav-hamburguesa-close'><i className="bi bi-x"></i></button>
            </div>
            <ul>
                <li><a href=''>SUCULENTAS</a></li>
                <li><a href=''>PLANTAS</a></li>
                <li><a href=''>MACETAS</a></li>
                <li><a href=''>CUIDADOS</a></li>
            </ul>
        </div> */}
            
           <MenuHamburguesa/>

    </div>
</>
)
}

export default NavBar