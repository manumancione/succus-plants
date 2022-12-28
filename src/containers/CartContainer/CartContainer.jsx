import { useCartContext } from '../../componentes/Context/CartContext'

const CartContainer = () => {

const {cartList, vaciarCarrito} = useCartContext()
console.log("cartList :" + cartList)


return (
    <>
        < div className='cart'>
            <h3>Tu carrito</h3>

            {/* MAP */}
            <div>
                {cartList.map(product => <li key={product.id}>
                    <img src={product.image} alt="imagen alt" style={{width:100}}/>
                    <h4>{product.name}</h4>
                    <h5>Cantidad: {product.cantidadItemSeleccionados}</h5>
                    <button onClick={() => console.log("eliminando")}>X</button>
                   

                </li>
                    
                )}
                <button onClick={vaciarCarrito}>vaciar carrito</button>
                {/* funcion : precio total y cantidad de item */}
            </div>
            
            <div className='div-button'>
                <button className='button-finalizar'>Finalizar compra
                </button>
            </div>

            <div className='div-button'>
                <button className='button-continuar'>Continuar comprando
                </button>
            </div>
        </div>

       
    </>
    )
}

    export default CartContainer