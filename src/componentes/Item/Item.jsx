import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
  return (
    
          <div key={product.id} className='product-card'>
              <Link to={`/detail/${product.id}`}>
                  <div className='card'>
                      <img className='product-card__img' src={product.image} alt='' />
                      <h4>{product.name}</h4>
                      <p>desde $ {product.price}</p>
                      {/* <button>Agregar al carrito</button> */}
                  </div>
              </Link>
          </div>
      
  )
}

export default Item
