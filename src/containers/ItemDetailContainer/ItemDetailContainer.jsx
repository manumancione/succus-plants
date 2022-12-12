import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../componentes/ItemDetail/ItemDetail'
import  './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const {productId} = useParams()
    console.log(productId)
    //use effect + gfetch(productoId) ->objeto
  return (
    <div>
        <h2>item detail container</h2>
          <ItemDetail
          // prodct ={product}
          />
    </div>
  )
}

export default ItemDetailContainer
