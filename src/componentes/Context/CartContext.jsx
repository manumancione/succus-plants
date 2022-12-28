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

    const vaciarCarrito = () => setCartList([])
    //fx precio total
    //fx cantidad total
    
    //estados y fx globales
    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}