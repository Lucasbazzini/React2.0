import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Card'
import styles from './productList.module.css'
import axios from 'axios'

const ProductList = ({ productos }) => {
    const [filteredProductos, setFilteredProductos] = useState([]);
    const { categoria } = useParams();
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                console.log(response.data);
                setFilteredProductos(
                    categoria
                        ? response.data.filter((producto) => producto.category === categoria)
                        : response.data
                );
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [categoria]);

    return (
        <div className={styles.container}>
            <div className={styles.row}>
            {filteredProductos.map((producto) => (<Card key={producto.id} producto={producto} />))}
            </div>
        </div>
    )
}

export default ProductList