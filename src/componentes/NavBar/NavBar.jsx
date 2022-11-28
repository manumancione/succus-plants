
import './NavBar.css'
import LogoPpal from '../../assets/logoPpal3.png'
import LogoIcono from '../../assets/logoIcono.png'


const NavBar = () => {
  return (
      <div className='nav-container'>
          <div className='nav-icon nav-icon--buscar1'>
              <button><i className='bi bi-search'></i></button>
          </div>

          <div className='nav-icon nav-icon--hamburguesa'>
              <button onclick={abrirMenuHamburguesa}><i className='bi bi-list'></i></button>
          </div>

          <div className='nav-container__item'>
                <ul className='nav-list'>
                    <li><a href=''>SUCULENTAS</a></li>
                    <li><a href=''>PLANTAS</a></li>
                </ul>
              <a href='../index.html'><img className="logo-img" src={LogoPpal} alt='Logo de Succus and Plants'></img></a>
                <ul className='nav-list'>
                    <li><a href=''>MACETAS</a></li>
                    <li><a href=''>CUIDADOS</a></li>
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

      </div>
  )
}


//js
//cerrar y abrir menu hamburguesa
// const closeButton = document.getElementById('closeButton');
// const menuHamburguesa = document.getElementById('menuHamburguesa');


// closeButton.addEventListener('click', ()=>{
//     menuHamburguesa.classList.add('inactivo');
// })

export default NavBar


