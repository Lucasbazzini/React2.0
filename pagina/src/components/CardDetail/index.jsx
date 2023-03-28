import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styles from './detail.module.css'
import Loader from '../Loader'

const CardDetail = () => {
  const [producto, setProducto] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => { setProducto(data); })
  }, [id]);

  if (!producto){
    return <Loader/>
    
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container2}>
        <div className={styles.image_container}>
        <img className={styles.imagen} src={producto.image} />
        </div>
        <div className={styles.text}>
          <h1 >{producto.title}</h1>
          <h2>{producto.description}</h2>
          <h3 className={styles.precio} >Precio : ${producto.price}</h3>
          <h4 className={styles.categoria}>Categoria:{producto.category}</h4>
        </div>
        </div>
        
      </div>

    </div>
  )
}

export default CardDetail