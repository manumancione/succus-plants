import LogoIcono from '../../assets/logoIcono.png'
import './MenuHamburguesa.css'

const MenuHamburguesa = () => {


// cerrar y abrir menu hamburguesa
const menuHamburguesa = document.getElementsByClassName('nav-hamburguesa');

const cerrarMenuHamburguesa = () => {
// menuHamburguesa.style.display = 'none';
  menuHamburguesa.classList.add('inactivo')
console.log('funciona')
}



return (
<div>
  <div className='nav-hamburguesa' >
    <div className='nav-hamburguesa-container'>
      <a href='../index.html'><img className='nav-hamburguesa-logo' src={LogoIcono} alt='logo'></img></a>
        <button id='closeButton' onClick={cerrarMenuHamburguesa} className='nav-hamburguesa-close'><i
          className="bi bi-x"></i></button>
    </div>
    <ul>
      <li><a href=''>SUCULENTAS</a></li>
      <li><a href=''>PLANTAS</a></li>
      <li><a href=''>MACETAS</a></li>
      <li><a href=''>CUIDADOS</a></li>
    </ul>
  </div>
</div>
)
}

export default MenuHamburguesa