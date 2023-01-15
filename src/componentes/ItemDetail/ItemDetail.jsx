import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import Caso1 from '../Select/Select'
import './ItemDetail.css'
import { useContext, useState } from 'react'
import { useCartContext } from '../Context/CartContext'

const ItemDetail = ({ product }) => {
  //console.log(product)
  const {agregarCarrito, cartList }= useCartContext()

  const onAdd = (cantidadItemSeleccionados) => {
    console.log(cantidadItemSeleccionados)
    agregarCarrito({...product, cantidadItemSeleccionados})
  }
  
  console.log(cartList)



  const [count, setCount] = useState(1)


  const sumaCount = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const restaCount = () => {
    if (count > initial) {
      setCount(count - 1)
    }
  }

  const handleOnAdd = () => {
    onAdd(count)
  }

  return (
    
    <div className='detail-container'>
      <div className='detail-item'>       
        <div>
          <img src={product.image} alt="Imagen del producto" />
        </div>
      </div>
      
      <div className='detail-item'>
        <h2>{product.name}</h2>
        <h3>$ {product.price}</h3>
        <h4 className='subtitle'>Tamaño</h4>

        <Caso1 />
     
        <p><i className="bi bi-heart"></i> Seleccionado a mano</p>
    
      <Link to='/cart'><button className='agregar-al-carrito' onClick={handleOnAdd} >Agregar al carrito</button></Link>
             
     
      
        <p className='detail-comment'>Envío gratis en compras mayores a $5000, y hasta 3 cuotas <b>sin interés</b>.</p>

        <Link to='/'><button className='button-continuar'>Continuar comprando</button></Link>
        
        <h4>Descripción</h4>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default ItemDetail
