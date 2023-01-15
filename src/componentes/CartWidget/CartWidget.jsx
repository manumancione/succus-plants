import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'

const CartWidget = () => {
  const { cantidadTotal } = useCartContext()
 
 
  return (
    <div>
    
      <Link to={'/cart'}><button><i className='bi bi-bag'><span className="nav-icon__span">  {cantidadTotal()}</span></i></button></Link>
      
    </div>
    
  )
}

export default CartWidget
