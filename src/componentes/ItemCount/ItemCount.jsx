import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({stock=8, initial=1,onAdd}) => {

    const [count, setCount] = useState(1)


    const sumaCount = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const restaCount = () => {
        if(count > initial) {
            setCount(count - 1)
        } 
    }

    const handleOnAdd = () => {
        onAdd(count)
       
    }
  return (
      <div>
          <div className='counter-container'>
              
              <button className='counter-button' onClick={restaCount}><i className="bi bi-dash"></i></button>              

              <label className='counter-display' htmlFor=''>{count}</label>

              <button className='counter-button' onClick={sumaCount}><i className="bi bi-plus"></i></button>        
          </div>
          <div>
          <button className='counter-button-cantidades' onClick={handleOnAdd} >Agregar al carrito</button>         
          </div>
          </div>
  )
}

export default ItemCount
