import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../componentes/Context/CartContext'
import ItemCount from '../../componentes/ItemCount/ItemCount'
import './CartContainer.css'

const CartContainer = () => {

const {cartList, vaciarCarrito, eliminarItem, precioTotal, cantidadTotal} = useCartContext()
console.log("cartList :" + cartList)

    const [count, setCount] = useState(1)


    const sumaCount = ({stock=8}) => {
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
    <>
        < div className='cart'>
            <div className='cart-header'>
                <h3 className='cart-header__title'>Tu carrito<i className="bi bi-bag-heart"></i></h3>
                <Link to={'/'}><button className="cart-header__button"><i className="bi bi-x-lg icon-cerrar"></i></button></Link>
            </div>
            {/* MAP */}
            <div>
                {cartList.map(product =>
                    <li key={product.id} className='cart-list'>
                        <div className='item-list'>
                            <img className='item' src={product.image} alt="imagen alt"  />
                            <div className='item' >
                                <h4>{product.name}</h4>
                                <h5>(tamaño seleccionado en cm)</h5>
                                {/* <ItemCount /> */}
                        
                                <div className='counter-container'>
                                    <button className='counter-button' onClick={restaCount}><i className="bi bi-dash"></i></button>

                                    <label className='counter-display' htmlFor=''>{count}</label>

                                    <button className='counter-button' onClick={sumaCount}><i className="bi bi-plus"></i></button>
                                </div>
                            </div>
                            {/* <h5 className='item' >Cantidad: {product.cantidadItemSeleccionados}</h5> */}
                            <div className='item item--precio'>
                                {/* <button className='icon-eliminar' onClick={()=>{eliminarItem(product.id)}}><i className="bi bi-x-lg"></i></button>  */}
                                <h5>$ {product.price}</h5>
                            </div>    
                        </div>

                    </li>
                    
                )}
               
               
                {/* funcion : precio total y cantidad de item */}
               
               
            </div>

            <div>
                {precioTotal() > 0 &&
                    <h5 className='precio-total'>Precio total: {precioTotal()}</h5>}
            </div>
            
            <div className='div-button'>
                <button className='button-finalizar'>Finalizar compra
                </button>
            </div>

            <div className='div-button'>
                <Link to='/'><button className='button-continuar'>Continuar comprando
                </button></Link>
                <button className='button-vaciar' onClick={vaciarCarrito}>vaciar carrito</button>
            </div>
        </div>

       
    </>
    )
}

    export default CartContainer