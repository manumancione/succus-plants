import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ItemList from "../../componentes/ItemList/ItemList"
import Loading from "../../componentes/Loading/Loading"
import { funcionFetch } from "../../helpers/funcionFetch"
import './ItemListContainer.css'
import {collection, doc, getDoc, getDocs, getFirestore, limit, limitToLast, orderBy, query, where} from 'firebase/firestore'




const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [producto, setProducto] = useState({})  // ------> en detailcontainer (firebase)
  const [loading, setLoading] = useState(true)
  const { productCategory } = useParams()
  

  // useEffect(() => {
  //   if (productCategory) {
  //     funcionFetch()
  //       .then(respuesta => setProductos(respuesta.filter(product => product.category === productCategory))) // en esta linea cambia el estado
  //       .catch(error => console.log(error))
  //       .finally(() => setLoading(false))
  // } else {
  //   funcionFetch()
  //   .then(respuesta => setProductos(respuesta)) // en esta linea cambia el estado
  //   .catch(error => console.log(error))
  //   .finally(() => setLoading(false))
    
  // }
  // }, [productCategory])
  

// //trae un solo pto: ITEMDETAILCONTAINER
//   useEffect(() => {
//     const baseDatos = getFirestore()
//     const queryDoc = doc(baseDatos, 'productos', '7nZz0KFuQc1oASJ4RBXK')
//     getDoc(queryDoc)
//       .then(response => setProducto({id:response.id, ...response.data()}))
//     .catch(error => console.log(error))
//   },[])
//   console.log(producto)


//corregir: acomodar!!
  
  
  //trae una colleccion de ptos!
  useEffect(() => {
    const baseDatos = getFirestore()
    const queryCollection = collection(baseDatos, 'productos')
    getDocs(queryCollection)
      .then(response => setProductos(response.docs.map(product => ({ id: product.id, ...product.data() }) ) ))
      .catch(error => console.log(error))
    .finally(()=>setLoading(false))
  }, [])
  console.log(producto)


  //trae filtrados por categoria
  useEffect(() => {
    const baseDatos = getFirestore()
    const queryCollection = collection(baseDatos, 'productos')
    const queryFiltrada = query(queryCollection,
      where('category', '==', 'suculentas')) //productCategory
     // limit(2)
      //orderBy('price', 'desc'))
    getDocs(queryFiltrada)
      .then(response => setProductos(response.docs.map(product => ({ id: product.id, ...product.data() }))))
      .catch(error => console.log(error))
      .finally(setLoading(false))
  }, [])
  console.log(producto)


return (

  <div className='product-card-container'>


    {loading ?
      <Loading/>
    :
      <ItemList productos={productos} />
       
    }

  </div>

)
}






export default ItemListContainer