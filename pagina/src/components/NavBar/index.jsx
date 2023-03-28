import React from 'react'
import CartWidget from '../cartWidget'
import Button from '../Button'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.div_button}>
                    <Link to="/home" >
                        <Button text='Home' />
                    </Link >
                    <Link to="/productos">
                        <Button text='Productos' />
                    </Link>
                    <Link to="/productos/men">
                        <Button text='Hombre' />
                    </Link>
                    <Link to="/productos/women">
                        <Button text='Mujer' />
                    </Link>
                    <Link to="/productos/jewelery">
                        <Button text='Jewelery' />
                    </Link>
                    <Link to="/productos/electronics">
                        <Button text='Tecnologia' />
                    </Link>
                </div>
                <div className={styles.div_cart}>
                    < button className={styles.buttonCarrito} >
                        <CartWidget />
                    </button >
                </div>
            </nav>
        </header>
    )
}

export default Navbar




