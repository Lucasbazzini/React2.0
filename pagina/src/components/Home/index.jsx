import styles from './home.module.css'

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.container}>
            <h1 className={styles.titulo}>
                Los mejores precios para tus componentes
            </h1>
            <p className={styles.texto}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit cum sint porro voluptas cupiditate atque
            </p>
            </div>
        </div>
    )
}

export default Home