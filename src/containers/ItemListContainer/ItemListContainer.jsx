import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { funcionFetch } from "../../helpers/funcionFetch"
import './ItemListContainer.css'




const ItemListContainer = (children) => {

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
  console.log('productos: ', productos)
  console.log('productCategory:' + productCategory)

return (
<>
  <div className='product-card-container'>


    {loading ?
    <h2>Cargando productos...</h2>
    :

    productos.map(product =>
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


    )}

  </div>
</>
)
}






export default ItemListContainer