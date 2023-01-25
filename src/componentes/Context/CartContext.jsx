import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const agregarCarrito = (producto) => {

        // isInCart
        const idx = cartList.findIndex(product => product.id === producto.id)

        if (idx === -1) {
            setCartList([
                ...cartList,
                producto
            ])
        } else {
            cartList[idx].cantidadItemSeleccionados += producto.cantidadItemSeleccionados

            setCartList([...cartList])

        }

        // setear en localstorage
    }


     
     
    
    //vaciar carrito
    const vaciarCarrito = () => setCartList([])

    //precio total
    const precioTotal = () => cartList.reduce((count, product) => count += (product.cantidadItemSeleccionados*product.price), 0)


    //cantidad total   
    const cantidadTotal = () => cartList.reduce((count, product) => count += product.cantidadItemSeleccionados, 0)

    //eliminar por item
    const eliminarItem = (id) => setCartList(cartList.filter(product => product.id !== id))
    
  
    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito,
            cantidadTotal,
            eliminarItem,
            precioTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}