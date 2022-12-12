import LogoIcono from '../../assets/logoIcono.png'
import './Footer.css'

const Footer = () => {
    return (
      <div>
            <div className='footer-container'>
             <div className='footer-container__item'>
                    <a href='../index.html' ><img className='footer-logo' src={LogoIcono} alt='logo'></img></a>
             </div>

             <div className='footer-container__item'>
              <h4 className='footer-title'>Sumate a nuestra comunidad</h4>
              <p>Recibí nuestras ofertas y descuentos exclusivos en tu bandeja de entrada.</p>
              <div className='footer-input-container'>
                    <i className='footer-icon bi bi-envelope'></i>
                  <input className='footer-input' type="email" placeholder='Introduce tu email' />
              </div>
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
            </div>
            <div className="footer-final">
                <h5>© Succus&Plants 2022 | Manuela Mancione</h5> 
            </div>
      </div>
  )
}

export default Footer
