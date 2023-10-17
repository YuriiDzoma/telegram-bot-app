import React from "react";
import styles from './button.module.scss'

const Button = ({plus = false, children}) => {
    return (
        <button className={plus ? styles.buttonPlus : styles.button}>{children}</button>
    )
}

export default Button;