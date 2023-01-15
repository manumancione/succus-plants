import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../componentes/ItemDetail/ItemDetail'
import Loading from '../../componentes/Loading/Loading'
import { funcionFetch } from '../../helpers/funcionFetch'
import  './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [producto, setProducto] = useState([])  // ------> en detailcontainer (firebase)
  const [loading, setLoading] = useState('true')
    const {productId} = useParams()
    
    
  // useEffect(() => {
  //   funcionFetch(productId)
  //     .then(resp => setProduct(resp))
  //     .catch(error => console.log(error))
  //   .finally(()=>setLoading(false))
  // })

  //trae un solo pto: ITEMDETAILCONTAINER
  useEffect(() => {
    const baseDatos = getFirestore()
    const queryDoc = doc(baseDatos, 'productos', '7nZz0KFuQc1oASJ4RBXK')
    getDoc(queryDoc)
      .then(response => setProducto({id:response.id, ...response.data()}))
      .catch(error => console.log(error))
      .finally(setLoading(false))
  },[])
  console.log(producto)

  return (
    <div className='div'>
      {loading ? <Loading /> :
        <ItemDetail
          product={product}
        />}
    </div>
  )
}

export default ItemDetailContainer
