import LogoIcono from '../../assets/logoIcono.png'

const MenuHamburguesa = () => {
  return (
    <div>
          <div id='menuHamburguesa' className='nav-hamburguesa'>
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
          </div>
    </div>
  )
}

export default MenuHamburguesa
