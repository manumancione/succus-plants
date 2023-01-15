import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const agregarCarrito = (producto) => {
        setCartList([
            ...cartList,
            producto])
        //setear el localStorage
    }
    
    //vaciar carrito
    const vaciarCarrito = () => setCartList([])

    //calcular precio total
    const precioTotal = () => cartList.reduce((count, product) => count += (product.cantidadItemSeleccionados * product.price), 0)


    //cantidad total   
    const cantidadTotal = () => cartList.reduce((count, product) => count += product.cantidadItemSeleccionados, 0)

    //eliminar por item
    const eliminarItem = (id) => setCartList(cartList.filter(product => product.id !== id))
    
    //estados y fx globales
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