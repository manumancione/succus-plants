import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../componentes/ItemDetail/ItemDetail'
import { funcionFetch } from '../../helpers/funcionFetch'
import  './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {productId} = useParams()
    
    
  useEffect(() => {
    funcionFetch(productId)
      .then(resp => setProduct(resp))
      .catch(error=>console.log(error))
  }, [])

  return (
    <div>
          <ItemDetail
        product={product}
          />
    </div>
  )
}

export default ItemDetailContainer
