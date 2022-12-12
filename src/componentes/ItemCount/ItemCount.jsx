import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = () => {

    const [contador, setearContador] =useState(0)

    const sumaCount = () => {
        setearContador(contador+1)
    }

    const restaCount = () => {
        if (contador > 0) {
            setearContador(contador - 1)
        } else (contador == 0 )
    }
  return (
      <div>
          <div className='counter-container'>
              
              <button className='counter-button' onClick={restaCount}><i className="bi bi-dash"></i></button>              

              <label className='counter-display' htmlFor=''>{contador}</label>

              <button className='counter-button' onClick={sumaCount}><i className="bi bi-plus"></i></button>
          
                        
        </div>
        <button className='buttonCounter' >Agregar al carrito</button>
          
    </div>
  )
}

export default ItemCount
