// import { useState } from 'react'
// import LogoIcono from '../../assets/logoIcono.png'
// import './MenuHamburguesa.css'

// const MenuHamburguesa = (handleClick) => {


//     const [clickEnMenuHamburguesa, setClickEnMenuHamburguesa] = useState(true)
//     const handleClick = () => {
//         setClickEnMenuHamburguesa(!clickEnMenuHamburguesa)
//     }


//     return (
//         <>

//             <div className={`nav-hamburguesa ${clickEnMenuHamburguesa ? 'navHamburguesaInactivo' : ''}`}>

//                 <div className='nav-hamburguesa-container'>
//                     <a href='../index.html'><img className='nav-hamburguesa-logo' src={LogoIcono} alt='logo'></img></a>
//                     <button onClick={handleInter} className='nav-hamburguesa-close'><i className="bi bi-x"></i></button>
//                 </div>
//                 <ul>
//                     <li><a href=''>SUCULENTAS</a></li>
//                     <li><a href=''>PLANTAS</a></li>
//                     <li><a href=''>MACETAS</a></li>
//                     <li><a href=''>CUIDADOS</a></li>
//                 </ul>
//             </div>
//         </>
// )
// }

// export default MenuHamburguesa