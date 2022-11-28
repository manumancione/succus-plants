

const ItemListContainer= ({saludo, nombreStore}) => {
  return (
    <div style={{textAlign:'center', padding:'2rem 0', backgroundColor:'violet'}}>
      <h1>Prueba del componente ItemListContainer</h1>
      <p style={{fontSize:25}}>{saludo} Bienvenido a {nombreStore}!</p>
    </div>
  )
}

export default ItemListContainer
