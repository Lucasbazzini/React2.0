import styles from './productList.module.css'

const ProductList = ({productos}) => {
    return (
        <div className={styles.container}>
            {productos.map((producto) => (<h3 key={producto.id}>{producto.title}</h3>))}
        </div>
    )
}

export default ProductList