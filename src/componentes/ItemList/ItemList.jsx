import Item from '../Item/Item'

const ItemList = ({productos}) => {
    return (
        
        productos.map(product => <Item product={product} key={product.id}/>)   

    )
}

export default ItemList
