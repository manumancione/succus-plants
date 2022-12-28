import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ItemList from "../../componentes/ItemList/ItemList"
import { funcionFetch } from "../../helpers/funcionFetch"
import './ItemListContainer.css'




const ItemListContainer = () => {

const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState('true')
  const { productCategory } = useParams()
  

  useEffect(() => {
    if (productCategory) {
      funcionFetch()
        .then(respuesta => setProductos(respuesta.filter(product => product.category === productCategory))) // en esta linea cambia el estado
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
  } else {
    funcionFetch()
    .then(respuesta => setProductos(respuesta)) // en esta linea cambia el estado
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
    
  }
  }, [productCategory])
  

return (

  <div className='product-card-container'>


    {loading ?
    <h2>Cargando productos...</h2>
    :
      <ItemList productos={productos} />
       
    }

  </div>

)
}






export default ItemListContainer