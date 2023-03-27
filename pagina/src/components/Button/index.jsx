import React from 'react'
import styles from './button.module.css'

export function Button (props){
    return (
        <button className={styles.btn}> 
            <p className={styles.ancla} href="#">{props.text}</p>
        </button>
    )
}
export default Button