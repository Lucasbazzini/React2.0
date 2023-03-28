import Card from '../Card'
import styles from './productList.module.css'

const ProductList = ({productos}) => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
            {productos.map((producto) => (<Card key={producto.id} producto={producto}/>))}
            </div>
        </div>
    )
}

export default ProductList