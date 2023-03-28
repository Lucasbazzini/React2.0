import styles from './card.module.css'
import { Link } from 'react-router-dom'

const Card = ({ producto }) => {
  return (
    <Link className={styles.link} to={`${producto.id}`}>
    <div className={styles.card}>
      <div className={styles.container}>
      <img className={styles.image} src={producto.image} />
      </div>

      <div className={styles.text}>
        <h2 className={styles.title}>{producto.title}</h2>
        <h3 className={styles.price}>$ {producto.price}</h3>
      </div>
    </div>
    </Link>
  )
}

export default Card