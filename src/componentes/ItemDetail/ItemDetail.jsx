import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ product }) => {
  console.log(product)
  const onAdd = (cantidadItemSeleccionados) => {console.log(cantidadItemSeleccionados)}
  
  
  return (
    
    <div className='detail-container'>
      <div className='detail-item'>       
        <div>
          <img src={product.image} alt="Imagen del producto" />
        </div>
      </div>
      
      <div className='detail-item'>
        <h2>{product.name}</h2>
        <h3>$ {product.price}</h3>
        {/* <h4>Tamaño</h4> */}
        <p><i className="bi bi-heart"></i> Seleccionado a mano</p>
        <ItemCount
          stock={ product.stock }
        initial={1}
        onAdd={onAdd}
        />
        <p className='detail-comment'>Envío gratis en compras mayores a $5000, y hasta 3 cuotas <b>sin interés</b>.</p>
        <h4>Descripción</h4>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default ItemDetail
